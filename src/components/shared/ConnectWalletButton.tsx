import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '@/assets/styles/css/modules/navbar.module.css'
import Image from "next/image";
const ConnectWalletButton = () => {
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
                                                className='animation flex flex-row items-center  className="btn btn-primary hover:bg-transparent shadow-3xl border border-primary rounded-none min-h-0 h-10 px-3 hover:bg-opacity-10 hover:shadow-none  md:w-full w-auto"'
                                                disabled={false}>


                                                <div className={'pb-1 hidden md:block'}>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                              d="M13.1451 1.69232C13.3391 1.74433 13.5046 1.87131 13.6051 2.04532L15.1358 4.69681H16.8181C17.22 4.69681 17.6054 4.85644 17.8895 5.14059C18.1737 5.42473 18.3333 5.81012 18.3333 6.21196V16.818C18.3333 17.2199 18.1737 17.6052 17.8895 17.8894C17.6054 18.1735 17.22 18.3332 16.8181 18.3332H3.18178C2.77994 18.3332 2.39455 18.1735 2.1104 17.8894C1.82626 17.6052 1.66663 17.2199 1.66663 16.818V6.21196C1.66663 5.81012 1.82626 5.42473 2.1104 5.14059C2.39455 4.85644 2.77993 4.69681 3.18178 4.69681H7.49724L12.5702 1.768C12.7442 1.66754 12.951 1.64032 13.1451 1.69232ZM16.8181 12.6514V10.3786H14.2613C13.5461 10.3786 13.0303 10.9219 13.0303 11.515C13.0303 12.1081 13.5461 12.6514 14.2613 12.6514H16.8181ZM16.8181 8.86347H14.2613C12.7796 8.86347 11.5151 10.0164 11.5151 11.515C11.5151 13.0135 12.7796 14.1665 14.2613 14.1665H16.8181V16.818H3.18178V6.21196H16.8181V8.86347ZM10.5426 4.68813L13.383 4.69122L12.6717 3.45896L10.5426 4.68813Z"
                                                              fill="#EAECEF"/>
                                                    </svg>
                                                </div>
                                                <span className={styles.nav_connect_wallet}>Connect Wallet</span>
                                            </button>
                                        );
                                    }

                                    if (chain.unsupported) {
                                        return (
                                            <button
                                                id="fade-button"
                                                onClick={openChainModal}
                                                className=" hover:bg-transparent shadow-3xl border border-primary rounded-none min-h-0 h-10 px-3.5 hover:bg-opacity-10 hover:shadow-none  md:w-full w-auto"
                                                disabled={false}
                                            >
                                                <span className={styles.nav_connect_wallet}>Unsupported network</span>
                                                 {/* <img alt='network icon' 
                                                            src={`/static/img/icon/reject.svg`}
                                                            className="mr-5" 
                                                        /> */}
                                            </button>
                                        );
                                    }

                                    return (
                                        <div className='flex space-x-2'> 
                                            
                                                    <button
                                                        id="chain-button"
                                                        onClick={openChainModal}
                                                        disabled={false}
                                                        className="md:inline-block hidden hover:bg-transparent  shadow-3xl border border-primary rounded-none min-h-0 h-10 hover:bg-opacity-10 hover:shadow-none  "
                                                    >
                                                        <Image loading='lazy'
                                                            data-src={`/static/img/icon/${chain.id === 280? 'zksync': 'opBNB'}.svg`}
                                                            className={'mx-2 lazyload'}
                                                            alt='network icon'
                                                            src={`/static/img/icon/${chain.id === 280? 'zksync': 'opBNB'}.svg`}
                                                            width={'20'}
                                                            height={'20'}
                                                        />
                                                        {/* <span
                                                            className={styles.nav_connect_wallet}>{chain.name}</span> */}
                                                    </button>
                                                
                                    
                                            <button
                                                id="fade-button"
                                                onClick={openAccountModal}
                                                className="btn btn-primary shadow-3xl bg-transparent hover:bg-primary border border-primary rounded-none px-3.5 hover:bg-opacity-10 hover:shadow-none min-h-0 h-10 "
                                                disabled={false}
                                            >
                                                <div className={'hidden md:block'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 29 29" fill="none">
                                                    <circle cx="14.5" cy="14.5" r="14" stroke="#1E69FF" fill={`#${account.address.slice(-6)}`} />
                                                </svg>
                                                </div>
                                                <span
                                                    className={styles.nav_connect_wallet}>{account.displayName}</span>
                                            </button>

                                        </div>
                                    );
                                })()}
                            </div>
                        );
                    }}
                </ConnectButton.Custom>
  );
};

export default ConnectWalletButton;
