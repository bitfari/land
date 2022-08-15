import React, { FC } from "react";
import { Helmet } from "react-helmet";
import NcImage from "shared/NcImage/NcImage";
import authorBanner from "images/nfts/authorBanner.png";
import VerifyIcon from "components/VerifyIcon";
import Land from './Land';

export interface PortfolioPageProps {
  className?: string;
}

const PortfolioPage: FC<PortfolioPageProps> = ({ className = "" }) => {

  return (
    <div className={`nc-AuthorPage  ${className}`} data-nc-id="AuthorPage">
      <Helmet>
        <title>Digital Landlord Portfolio</title>
      </Helmet>
      <div className="container -mt-5 lg:-mt-4">

     
</div>

          <div className="w-full">
        <div className="relative w-full h-40 md:h-60 2xl:h-72">
          <NcImage
            containerClassName="absolute inset-0"
            src={authorBanner}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="container -mt-10 lg:-mt-16">
          <div className="relative bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-8 rounded-3xl md:rounded-[40px] shadow-xl flex flex-col md:flex-row">
            
            <div className="pt-5 md:pt-1 md:ml-6 xl:ml-14 flex-grow">
              <div className="max-w-screen-sm ">
                <div className="inline-flex items-center text-2xl sm:text-3xl lg:text-4xl font-semibold">
                <h1>Digital Land Portfolio</h1> 
                  <VerifyIcon
                    className="ml-2"
                    iconClass="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8"
                  />
                </div>
  
              </div>
              <div className="mt-4">
              <Land/>
              </div>     
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default PortfolioPage;
