import { useState, useEffect } from 'react';
import { formatUnits, parseUnits } from 'viem';
import { readContracts, readContract } from '@wagmi/core'
import Router from '@/contracts/abis/Router.sol/Router.json'
import pairContractABI from '@/contracts/abis/Pair.sol/Pair.json'
import EchoLib from '@/contracts/abis/EchoLibrary.sol/EchoLibrary.json'
import { useNetworkInfo } from './useNetworkInfo';
import { CONTRACT_ADDRESSES } from '@/constants/constants/contractAddresses'
import BigNumber from 'bignumber.js';

// Define interface for the return type of the hook
interface SwapHookResult {
    result: BigInt[] | null;
    path: IPath[] | null
    error: Error | null;
    isLoading: boolean;
    priceImpact: number;
}
interface PairAddresses {
    stable: `0x${string}` | null,
    volatile: `0x${string}` | null,
    tokenAWETHS: `0x${string}` | null,
    tokenAWETHV: `0x${string}` | null,
    tokenBWETHS: `0x${string}` | null,
    tokenBWETHV: `0x${string}` | null,
}
interface IPath {
    from: string;
    to: string;
    stable: boolean;
}
interface PairReserves {
    stable: BigInt[] | null;
    volatile: BigInt[] | null;
    tokenAWETHS: BigInt[] | null;
    tokenAWETHV: BigInt[] | null;
    tokenBWETHS: BigInt[] | null;
    tokenBWETHV: BigInt[] | null;
}

interface PairContract {
    address: string;
    abi: any;
}
interface Token {
    address: `0x${string}`,
    decimals: number,
    symbol?: string,
    name?: string,
    projectLink?: string
}
type PairAddressKey = keyof PairAddresses;
async function getPairAddresses(tokenA: `0x${string}`, tokenB: `0x${string}`, routerAddress: `0x${string}`, WrappETH: `0x${string}`): Promise<PairAddresses> {
    const routerContract = {
        address: routerAddress,  //use contstant file 
        abi: Router.abi as any[],
    };
    const WETH = WrappETH
    const contractsInfo: { args: [string, string, boolean]; key: PairAddressKey }[] = [
        { args: [tokenA, tokenB, true], key: 'stable' },
        { args: [tokenA, tokenB, false], key: 'volatile' },
        { args: [tokenA, WETH, true], key: 'tokenAWETHS' },
        { args: [tokenA, WETH, false], key: 'tokenAWETHV' },
        { args: [tokenB, WETH, true], key: 'tokenBWETHS' },
        { args: [tokenB, WETH, false], key: 'tokenBWETHV' },
    ];

    const results: PairAddresses = {
        stable: null,
        volatile: null,
        tokenAWETHS: null,
        tokenAWETHV: null,
        tokenBWETHS: null,
        tokenBWETHV: null,
    };
    for (let contractInfo of contractsInfo) {
        try {
            const data: [{
                error: Error;
                result?: undefined;
                status: "failure";
            } | {
                error?: undefined;
                result: unknown[] | `0x${string}`;
                status: "success";
            }] = await readContracts({
                contracts: [
                    {
                        ...routerContract,
                        functionName: 'pairFor',
                        args: contractInfo.args,
                    },
                ],
            });
            if (data[0].status === "success" && typeof data[0].result === 'string') {
                results[contractInfo.key] = data[0].result;
            } else {
                results[contractInfo.key] = null;
            }
        } catch (error) {
            console.error(`Error fetching pair address for ${contractInfo.key}: `, error);
            results[contractInfo.key] = null;
        }
    }

    return results;
}

async function getReserves(pairAddresses: PairAddresses, pairContractABI: any): Promise<PairReserves> {
    const contractsInfo = Object.keys(pairAddresses).map(key => {
        return {
            args: [],
            key: key as keyof PairAddresses,
            address: pairAddresses[key as keyof PairAddresses],
        };
    }).filter(info => info.address !== null && info.address !== "0x0000000000000000000000000000000000000000");

    const results: PairReserves = {
        stable: [BigInt(0), BigInt(0), BigInt(0)],
        volatile: [BigInt(0), BigInt(0), BigInt(0)],
        tokenAWETHS: [BigInt(0), BigInt(0), BigInt(0)],
        tokenAWETHV: [BigInt(0), BigInt(0), BigInt(0)],
        tokenBWETHS: [BigInt(0), BigInt(0), BigInt(0)],
        tokenBWETHV: [BigInt(0), BigInt(0), BigInt(0)],
    };
    for (let contractInfo of contractsInfo) {
        if (contractInfo.address) {
            try {
                const data = await readContracts({
                    contracts: [
                        {
                            address: contractInfo.address,
                            abi: pairContractABI,
                            functionName: 'getReserves',
                            args: [],
                        },
                    ],
                });
                if (data[0].status === "success") {
                    results[contractInfo.key] = data[0].result as BigInt[];
                } else {
                    results[contractInfo.key] = null;
                }
            } catch (error) {
                console.error(`Error fetching reserves for ${contractInfo.key}: `, error);
                results[contractInfo.key] = null;
            }
        }
    }

    return results;
}

async function findBestPath(
    amountIn: bigint[],
    reserves: PairReserves,
    tokenA: Token,
    tokenB: Token,
    WETHToken: Token,
    contractList: any
): Promise<{ bestPath: IPath[] | null, minPriceImpact: number }> {
    const token0 = (tokenA.address === contractList.ETH ? contractList.WRAPPED_ETH : tokenA.address) as `0x${string}`;
    const token1 = (tokenB.address === contractList.ETH ? contractList.WRAPPED_ETH : tokenB.address) as `0x${string}`;

    try {
        let paths: { path: IPath[], reservesKey: (keyof PairReserves)[] }[] = [];

        if (token0 !== WETHToken.address && token1 !== WETHToken.address) {
            paths = [
                { 
                    path: [{ from: token0, to: token1, stable: true }],
                    reservesKey: ['stable']
                },
                {
                    path: [{ from: token0, to: token1, stable: false }],
                    reservesKey: ['volatile']
                },
                {
                    path: [
                        { from: token0, to: WETHToken.address, stable: true },
                        { from: WETHToken.address, to: token1, stable: true }
                    ],
                    reservesKey: ['tokenAWETHS', 'stable']
                },
                {
                    path: [
                        { from: token0, to: WETHToken.address, stable: true },
                        { from: WETHToken.address, to: token1, stable: false }
                    ],
                    reservesKey: ['tokenAWETHS', 'volatile']
                },
                {
                    path: [
                        { from: token0, to: WETHToken.address, stable: false },
                        { from: WETHToken.address, to: token1, stable: true }
                    ],
                    reservesKey: ['tokenAWETHV', 'stable']
                },
                {
                    path: [
                        { from: token0, to: WETHToken.address, stable: false },
                        { from: WETHToken.address, to: token1, stable: false }
                    ],
                    reservesKey: ['tokenAWETHV', 'volatile']
                }
            ];
        }
        // When one of the tokens is WETH
        else if (token0 === WETHToken.address || token1 === WETHToken.address) {
            paths = [
                {
                    path: [{ from: token0, to: token1, stable: true }],
                    reservesKey: [token0 === WETHToken.address ? 'tokenBWETHS' : 'tokenAWETHS']
                },
                {
                    path: [{ from: token0, to: token1, stable: false }],
                    reservesKey: [token0 === WETHToken.address ? 'tokenBWETHV' : 'tokenAWETHV']
                }
            ];
        }
        

        let minPriceImpact = Infinity;
        let bestPath: IPath[] | null = null;

        for (let { path, reservesKey } of paths) {
            let totalPriceImpact = 0;
            let validPath = true; // This is to check if we have reserves for every step in the path
        
            for (let i = 0; i < path.length; i++) {
                const reserveKeyForStep = reservesKey[i];
                const reserve = reserves[reserveKeyForStep as keyof PairReserves];
                
                if (reserve ) {
                    const priceImpact = calculatePriceImpact(tokenA, tokenB, amountIn, reserve);
                    totalPriceImpact += priceImpact;
                } else {
                    validPath = false;
                    break; // If there's no reserve for any step in the path, we break out of the loop
                }
            }
        
            if (Math.abs(totalPriceImpact) < minPriceImpact) {
                minPriceImpact = totalPriceImpact;
                bestPath = path;
            }
        }
        

        return {
            bestPath,
            minPriceImpact
        };
    } catch (error) {
        console.error('Error in finding best path:', error);
        return {
            bestPath: [],
            minPriceImpact: Infinity
        };;
    }
}


async function getAmountsOut(amountIn: BigInt, path: IPath[], routerContract: `0x${string}`): Promise<BigInt[] | null> {
    if(routerContract || amountIn || path ){
        
    try {
        const data = await readContract({
            address: routerContract,
            abi: Router.abi,
            functionName: 'getAmountsOut',
            args: [amountIn, path],
        });
        if (data) {
            return data as BigInt[];
        } else {
            throw new Error('Unable to fetch output amounts');
        }
    } catch (error) {
        console.error('Error in getAmountsOut:', error);
        throw error;
    }
    }else{
        return null
        console.log("error ")
    }
} 
async function getTradeDiff(amountIn: BigInt, tokenIn: string, tokenOut: string,stable: boolean, routerAdd: `0x${string}`, ECHOLibContract: `0x${string}`): Promise<any | null> {
    let data: any= ''
    try {
         data = await readContract({
            address: ECHOLibContract,
            abi: Router.abi,
            functionName: 'pairFor',
            args: [tokenIn, tokenOut, stable],
        });
    } catch (error) {
        console.log(error)
    }
    
    if(data !== '0x0000000000000000000000000000000000000000' && ECHOLibContract || amountIn ){
        
    try {
        const data = await readContract({
            address: ECHOLibContract,
            abi: EchoLib.abi,
            functionName: 'getTradeDiff',
            args: [amountIn, tokenIn, tokenOut, stable],
        });
        if (data) {
            return data || [] ;
        } else {
            throw new Error('Unable to fetch output amounts');
        }
    } catch (error) {
        console.error('Error in getAmountsOut:', error);
        throw error;
    }
    }else{
        return null
        console.log("error ")
    }
} 
export function useBestPath(tokenA: Token, tokenB: Token, amountIn: bigint): SwapHookResult {
    const { chainId, isSupported } = useNetworkInfo();
    const [result, setResult] = useState<BigInt[] | null>(null);
    const [priceImpact, setPriceImpact] = useState<number>(Infinity);
    const [error, setError] = useState<any | null>(null);
    const [path, setPath] = useState<IPath[]>([])
    const [isLoadingPrice, setLoadingPrice] = useState<boolean>(false)
    const [contractList, setContractList] = useState(CONTRACT_ADDRESSES[chainId ?? 5611]);
    useEffect(() => {
        if (chainId !== undefined) {
            setContractList(CONTRACT_ADDRESSES[chainId]);
        }
    }, [chainId]);
    useEffect(() => {
        const fetchData = async () => {
            // const test =await findBestPath2(amountIn.toString(), tokenA, tokenB, contractList )
            //     console.log(test)
            if (!tokenA || !tokenB || !amountIn || !tokenA.address || !tokenB.address || amountIn === BigInt(0)) {
                        return null
                    }
            try {
                setLoadingPrice(true)
                if(tokenA.address === contractList.ETH && tokenB.address === contractList.WRAPPED_ETH ||
                    tokenB.address === contractList.ETH && tokenA.address === contractList.WRAPPED_ETH){
                        setResult([amountIn, amountIn]);
                        setPath([] as IPath[])
                        setPriceImpact(0)
                        setLoadingPrice(false)
                    }else{
                const token0 = (tokenA.address === contractList.ETH ? contractList.WRAPPED_ETH : tokenA.address) as `0x${string}`
                const token1 = (tokenB.address === contractList.ETH ? contractList.WRAPPED_ETH : tokenB.address) as `0x${string}`
                const pairAddresses = await getPairAddresses(token0, token1, contractList.ROUTER as `0x${string}`, contractList.WRAPPED_ETH as `0x${string}`);
                const reserves = await getReserves(pairAddresses, pairContractABI.abi);
                const WETHToken = { address: contractList.WRAPPED_ETH as `0x${string}`, decimals: 18 };
                const bestPath = await findBestPath([BigInt(amountIn), BigInt(0)], reserves, tokenA, tokenB, WETHToken, contractList);
                
                if (bestPath &&  bestPath.bestPath && contractList.ROUTER) {
                    // Getting amounts out
                    const amountsOut = await getAmountsOut(amountIn, bestPath.bestPath as IPath[], contractList.ROUTER as `0x${string}`);
                    
                    setResult(amountsOut);
                    setPath(bestPath.bestPath as IPath[])
                    setPriceImpact(bestPath.minPriceImpact)
                }else{
                    setResult([BigInt(0), BigInt(0), BigInt(0)]);
                    setPath([])
                    setPriceImpact(Infinity)
                }
                setLoadingPrice(false)
            }
            } catch (err) {
                console.log("Error fetching amountsOut", err)
                setError( err);
                setLoadingPrice(false)
            }
        };
        fetchData();
    }, [tokenA, tokenB, amountIn]); // Adjusted to use tokenA and tokenB objects instead of addresses

    return { result, path, error, isLoading: isLoadingPrice, priceImpact};
}
const calculatePriceImpact = (tokenA: Token, tokenB: Token, inputTokenValue: bigint[], reserve: BigInt[]): number => {
    try {
        if (reserve[0].toString() === "0") {
            return Infinity;  
        }
        const valueA = parseFloat(formatUnits(BigInt(inputTokenValue[0].toString()), tokenA.decimals));
        const valueB = parseFloat(formatUnits(BigInt(inputTokenValue[1].toString()), tokenB.decimals));
        const reserve0 = parseFloat(formatUnits(BigInt(reserve[0].toString()), tokenA.decimals));
        const reserve1 = parseFloat(formatUnits(BigInt(reserve[1].toString()), tokenB.decimals));

        const oldPrice = reserve1 / reserve0;
        const newPrice = (reserve1 - valueB) / (reserve0 + valueA);
        
        const priceImpact = ((newPrice / oldPrice) - 1) * 100;
        return priceImpact;
    } catch (error) {
        console.error('Error in calculating price impact:', error);
        return Infinity; 
    }
};
// async function findBestPath2(
//     amountIn: string,
//     tokenA: Token,
//     tokenB: Token,
//     contractList: any
// ): Promise<{  minPriceImpact: any } | null> {
//     if (!tokenA || !tokenB || !amountIn || !tokenA.address || !tokenB.address || amountIn === '0') {
//         return null
//     }
//     let addy0 = tokenA.address
//     let addy1 = tokenB.address
//     if(tokenA.address === contractList.ETH) {
//         addy0 = contractList.WRAPPED_ETH
//       }
//       if(tokenB.address === contractList.ETH) {
//         addy1 = contractList.WRAPPED_ETH
//       }
      
//       const routeAssets =     [{
//         "name": "Wrapped NATIVE",
//         "symbol": "WNATIVE",
//         "decimals": "18",
//         "logoURI": "/static/img/icon/tokens/WNATIVE.svg",
//         "address": "0xb6425DD43801E2b759BE2CAA2f642Ab5460FBAD6"
//       }]
//       const includesRouteAddress = routeAssets.filter((asset) => {
//         return (asset.address.toLowerCase() == addy0.toLowerCase() || asset.address.toLowerCase() == addy1.toLowerCase())
//       })
//       let amountOuts: any = []
//       if(includesRouteAddress.length === 0) {
//         amountOuts = routeAssets.map((routeAsset) => {
//           return [
//             {
//               routes: [{
//                 from: addy0,
//                 to: routeAsset.address,
//                 stable: true
//               },{
//                 from: routeAsset.address,
//                 to: addy1,
//                 stable: true
//               }],
//               routeAsset: routeAsset
//             },
//             {
//               routes: [{
//                 from: addy0,
//                 to: routeAsset.address,
//                 stable: false
//               },{
//                 from: routeAsset.address,
//                 to: addy1,
//                 stable: false
//               }],
//               routeAsset: routeAsset
//             },
//             {
//               routes: [{
//                 from: addy0,
//                 to: routeAsset.address,
//                 stable: true
//               },{
//                 from: routeAsset.address,
//                 to: addy1,
//                 stable: false
//               }],
//               routeAsset: routeAsset
//             },
//             {
//               routes: [{
//                 from: addy0,
//                 to: routeAsset.address,
//                 stable: false
//               },{
//                 from: routeAsset.address,
//                 to: addy1,
//                 stable: true
//               }],
//               routeAsset: routeAsset
//             }
//           ]
//         }).flat()
//       } 
      
//       amountOuts.push({
//         routes: [{
//           from: addy0,
//           to: addy1,
//           stable: true
//         }],
//         routeAsset: null
//       })
     
//       amountOuts.push({
//         routes: [{
//           from: addy0,
//           to: addy1,
//           stable: false
//         }],
//         routeAsset: null
//       })
//       console.log(amountOuts)
//       const receiveAmounts = await Promise.all(amountOuts.map(async (route: any) => {
//         try {
//             const amount = await getAmountsOut(BigInt(amountIn), route.routes as IPath[], contractList.ROUTER);
//             return amount;
//         } catch (error) {
//             console.log(error)
//             return [BigInt(0), BigInt(0), BigInt(0)]
//         }
//     }));
//       for(let i = 0; i < receiveAmounts.length; i++) {
//         amountOuts[i].receiveAmounts = receiveAmounts[i]
//         amountOuts[i].finalValue =new BigNumber(receiveAmounts[i][receiveAmounts[i].length-1]).div(10**tokenB.decimals).toFixed(tokenB.decimals)
//       }
//       const bestAmountOut = amountOuts.filter((ret: any) => {
//         return ret != null
//       }).reduce((best:any, current:any) => {
//         if(!best) {
//           return current
//         }
//         return (new BigNumber(best.finalValue).gt(current.finalValue) ? best : current)
//       }, 0)
//       console.log('bestAmountOut:', bestAmountOut )
//       if(!bestAmountOut) {
//         return null
//       }
//       let totalRatio = 1;

//       for (let i = 0; i < bestAmountOut.routes.length; i++) {
//           const amountIn = bestAmountOut.receiveAmounts[i];
//           const amountOut = bestAmountOut.receiveAmounts[i + 1];
      
//           const res = await getTradeDiff(
//               amountIn,
//               bestAmountOut.routes[i].from,
//               bestAmountOut.routes[i].to,
//               bestAmountOut.routes[i].stable,
//               contractList.ROUTER,
//               contractList.Echolibrary
//           );
//       console.log(res)
//           if (res ) {
//               const ratio = new BigNumber(res[1]).div(res[0]);
//               totalRatio = parseFloat(new BigNumber(totalRatio).times(ratio).toFixed(18));
//               console.log(totalRatio)
//           } else {
//               console.error('Unexpected result from getTradeDiff:', res);
//           }
//       }
//       console.log(totalRatio)
//       const priceImpact = new BigNumber(1).minus(totalRatio).times(100).toFixed(18)
      
//       const returnValue = {
//         inputs: {
//           fromAmount: amountIn,
//           fromAsset: tokenA,
//           toAsset: tokenB
//         },
//         output: bestAmountOut,
//         priceImpact: priceImpact
//       }
//         console.log(returnValue)
//         return {
//             minPriceImpact: returnValue
//         };
    
//     }
