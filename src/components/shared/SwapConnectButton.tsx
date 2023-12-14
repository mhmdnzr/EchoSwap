import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '@/assets/styles/css/modules/navbar.module.css'
import Image from "next/image";
const SwapConnectButton = () => {
  return (
<ConnectButton.Custom>
                    {({
                          account,
                          chain,
                          openAccountModal,
                          openChainModal,
                          openConnectModal,
                          authenticationStatus,
                          mounted,
                      }) => {
                        // Note: If your app doesn't use authentication, you
                        // can remove all 'authenticationStatus' checks
                        const ready = mounted && authenticationStatus !== 'loading';
                        const connected =
                            ready &&
                            account &&
                            chain &&
                            (!authenticationStatus ||
                                authenticationStatus === 'authenticated');

                        return (
                            <div
                                {...(!ready && {
                                    'aria-hidden': true,
                                    'style': {
                                        opacity: 0,
                                        pointerEvents: 'none',
                                        userSelect: 'none',
                                    },
                                })}
                            >
                                {(() => {
                                    if (!connected) {
                                        return (

                                            <button
                                                onClick={openConnectModal}
                                                disabled={false}>


                                               
                                                <span className={styles.nav_connect_wallet}>Connect your Wallet to use ECHOSwap</span>
                                            </button>
                                        );
                                    }

                                    // if (chain.unsupported) {
                                    //     return (
                                    //         <button
                                    //             id="fade-button"
                                    //             onClick={openChainModal}
                                    //             className=" hover:bg-transparent shadow-3xl border border-primary rounded-none min-h-0 h-10 px-3.5 hover:bg-opacity-10 hover:shadow-none  md:w-full w-auto"
                                    //             disabled={false}
                                    //         >
                                    //             <span className={styles.nav_connect_wallet}>Unsupported network</span>
                                    //              {/* <img alt='network icon' 
                                    //                         src={`/static/img/icon/reject.svg`}
                                    //                         className="mr-5" 
                                    //                     /> */}
                                    //         </button>
                                    //     );
                                    // }

                                    // return (
                                    //     <div className='flex space-x-2'> 
                                            
                                    //                 <button
                                    //                     id="chain-button"
                                    //                     onClick={openChainModal}
                                    //                     disabled={false}
                                    //                     className="md:inline-block hidden hover:bg-transparent  shadow-3xl border border-primary rounded-none min-h-0 h-10 hover:bg-opacity-10 hover:shadow-none  "
                                    //                 >
                                    //                     <Image loading='lazy'
                                    //                         data-src={`/static/img/icon/${chain.id === 280? 'zksync': 'opBNB'}.svg`}
                                    //                         className={'mx-2 lazyload'}
                                    //                         alt='network icon'
                                    //                         src={`/static/img/icon/${chain.id === 280? 'zksync': 'opBNB'}.svg`}
                                    //                         width={'20'}
                                    //                         height={'20'}
                                    //                     />
                                    //                     {/* <span
                                    //                         className={styles.nav_connect_wallet}>{chain.name}</span> */}
                                    //                 </button>
                                                
                                    
                                    //         <button
                                    //             id="fade-button"
                                    //             onClick={openAccountModal}
                                    //             className="btn btn-primary shadow-3xl bg-transparent hover:bg-primary border border-primary rounded-none px-3.5 hover:bg-opacity-10 hover:shadow-none min-h-0 h-10 "
                                    //             disabled={false}
                                    //         >
                                    //             <div className={'hidden md:block'}>
                                    //             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 29 29" fill="none">
                                    //                 <circle cx="14.5" cy="14.5" r="14" stroke="#1E69FF" fill={`#${account.address.slice(-6)}`} />
                                    //             </svg>
                                    //             </div>
                                    //             <span
                                    //                 className={styles.nav_connect_wallet}>{account.displayName}</span>
                                    //         </button>

                                    //     </div>
                                    // );
                                })()}
                            </div>
                        );
                    }}
                </ConnectButton.Custom>
  );
};

export default SwapConnectButton;
