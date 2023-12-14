import {useNetwork, useToken} from "wagmi";
import {CONTRACT_ADDRESSES} from "@/constants";

interface IWrappedNative {
    address: `0x${string}`
    decimals: number
    name: string
    symbol: string
    totalSupply: {
        formatted: string
        value: bigint
    }
}

const useWrappedNative = () => {
    const {chain} = useNetwork();
    const contractList = CONTRACT_ADDRESSES[chain!.id as number]
    const {data, isError, isLoading} = useToken({
        address: contractList.WRAPPED_ETH as `0x${string}`
    })

    return data as IWrappedNative;
};

export default useWrappedNative;