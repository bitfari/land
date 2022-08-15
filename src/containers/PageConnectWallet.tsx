import React, { FC } from "react";
import { Helmet } from "react-helmet";
import Signin from "../components/Signin.jsx";
import { userSession } from 'auth.js';

export interface PageConnectWalletProps {
  className?: string;
}

const PageConnectWallet: FC<PageConnectWalletProps> = ({ className = "" }) => {
  if (userSession.isUserSignedIn()) {
    return (   
      <div
      className={`nc-PageConnectWallet ${className}`}
      data-nc-id="PageConnectWallet"
    >
      <Helmet>
        <title>Connect Wallet | Bitfari Digital Land</title>
      </Helmet>
      <div className="container">
        <div className="my-12 sm:lg:my-16 lg:my-24 max-w-3xl mx-auto space-y-8 sm:space-y-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold">
           <img width="64" height="64" alt="Stacks" src="https://s2.coinmarketcap.com/static/img/coins/64x64/4847.png"></img> 
             You are Connected to Bitfari and the Stacks Blockchain !!
            </h2>
            <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
              Enjoy your digital land portfolio!
            </span>
          </div>
      </div>
    </div>
    </div>
    )
  } else {  
  return (
    <div
      className={`nc-PageConnectWallet ${className}`}
      data-nc-id="PageConnectWallet"
    >
      <Helmet>
        <title>Connect Wallet | Bitfari Digital Land</title>
      </Helmet>
      <div className="container">
        <div className="my-12 sm:lg:my-16 lg:my-24 max-w-3xl mx-auto space-y-8 sm:space-y-10">
          {/* HEADING */}
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold">
           <img width="64" height="64" alt="Stacks" src="https://s2.coinmarketcap.com/static/img/coins/64x64/4847.png"></img> 
             Connect Your Stacks Wallet.
            </h2>
            <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
              Connect your STX wallet and enter the digital land!
            </span>
          </div>
          <div className="w-full border-b-2 border-neutral-100 dark:border-neutral-700"></div>
          <div className="mt-10 md:mt-0 space-y-5 sm:space-y-6 md:sm:space-y-8">
            <div className="space-y-3">     
                <Signin/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

}

export default PageConnectWallet;
