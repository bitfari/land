import React, { FC } from "react";
import  { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import NcImage from "shared/NcImage/NcImage";
import authorBanner from "images/nfts/authorBanner.png";
import { userSession } from 'auth.js';

export interface SignOffProps {
  className?: string;
}

const SignOffPage: FC<SignOffProps> = ({ className = "" }) => {

  return (
    <div className={`nc-AuthorPage  ${className}`} data-nc-id="AuthorPage">
      <Helmet>
        <title>Sign Out from the Marketplace</title>
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
                <span className="block mt-4 text-sm text-neutral-500 dark:text-neutral-400">
                Sign Out 
                </span>
              </div>
              <h2 className="inline-flex items-center text-1xl sm:text-2xl lg:text-2xl font-semibold">
              <div className="mt-4 ">
               <Link
               to="#"
                onClick={() => { userSession.signUserOut(); window.location.replace('/') }}
                >=-- Click here to Sign Out --=</Link>

              </div>
              </h2>
            </div>
          </div>
        </div>
      </div>
 
 
    </div>
  );

};

export default SignOffPage;
