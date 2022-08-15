import React, { FC } from "react";
import { Helmet } from "react-helmet";
import NcImage from "shared/NcImage/NcImage";
import authorBanner from "images/nfts/authorBanner.png";
import VerifyIcon from "components/VerifyIcon";
import ClubCash from './ClubCash';

export interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className = "" }) => {

  return (
    <div className={`nc-AuthorPage  ${className}`} data-nc-id="AuthorPage">
      <Helmet>
        <title>Digital Landlord + vBoard Operator</title>
      </Helmet>

      {/* HEADER */}
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
            <div className="w-32 lg:w-44 flex-shrink-0 mt-12 sm:mt-0">
              <NcImage
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                containerClassName="aspect-w-1 aspect-h-1 rounded-3xl overflow-hidden"
              />
            </div>
            <div className="pt-5 md:pt-1 md:ml-6 xl:ml-14 flex-grow">
              <div className="max-w-screen-sm ">
                <h2 className="inline-flex items-center text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  <span>My Profile</span>
                  <VerifyIcon
                    className="ml-2"
                    iconClass="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8"
                  />
                </h2>
                <div className="flex items-center text-sm font-medium space-x-2.5 mt-2.5 text-green-600 cursor-pointer">
                  <span className="text-neutral-700 dark:text-neutral-300">
                  Digital Landlord
                  </span>
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path
                      d="M18.05 9.19992L17.2333 12.6833C16.5333 15.6916 15.15 16.9083 12.55 16.6583C12.1333 16.6249 11.6833 16.5499 11.2 16.4333L9.79999 16.0999C6.32499 15.2749 5.24999 13.5583 6.06665 10.0749L6.88332 6.58326C7.04999 5.87492 7.24999 5.25826 7.49999 4.74992C8.47499 2.73326 10.1333 2.19159 12.9167 2.84993L14.3083 3.17493C17.8 3.99159 18.8667 5.71659 18.05 9.19992Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5498 16.6583C12.0331 17.0083 11.3831 17.3 10.5915 17.5583L9.2748 17.9917C5.96646 19.0583 4.2248 18.1667 3.1498 14.8583L2.08313 11.5667C1.01646 8.25833 1.8998 6.50833 5.20813 5.44167L6.5248 5.00833C6.86646 4.9 7.19146 4.80833 7.4998 4.75C7.2498 5.25833 7.0498 5.875 6.88313 6.58333L6.06646 10.075C5.2498 13.5583 6.3248 15.275 9.7998 16.1L11.1998 16.4333C11.6831 16.55 12.1331 16.625 12.5498 16.6583Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

              </div>
              <ClubCash /> 
            </div>
          </div>
        </div>
      </div>

      {/* ====================== END HEADER ====================== */}

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
            <div className="w-32 lg:w-44 flex-shrink-0 mt-12 sm:mt-0">
              <NcImage
                src="https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                containerClassName="aspect-w-1 aspect-h-1 rounded-3xl overflow-hidden"
              />
            </div>
            <div className="pt-5 md:pt-1 md:ml-6 xl:ml-14 flex-grow">
              <div className="max-w-screen-sm ">
                <div className="inline-flex items-center text-2xl sm:text-3xl lg:text-4xl font-semibold">
                <h1><a href="/portfolio">Digital Land Portfolio</a></h1> 
                  <VerifyIcon
                    className="ml-2"
                    iconClass="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8"
                  />
                </div>

              </div>
              <div className="mt-4 ">
              * <a style={{color:'blue'}} href="/portfolio">Go to my portfolio</a><br/>
              * <a style={{color:'blue'}} href="https://test.bitfari.com/pages/account-details/:?tabid=4">Check my earnings at the social connector</a><br/>
              * <a  style={{color:'blue'}} href="https://www.catamaranswaps.org/stx-nft">Sell my land on Catamaranswap.org</a><br/>
              * <a style={{color:'blue'}} href="/search">Search and buy more land!</a><br/>
              </div>
     
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default ProfilePage;
