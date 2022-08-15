import React from "react";
import NcImage from "shared/NcImage/NcImage";
import collectionBanner from "images/nfts/collectionBanner.png";
import ButtonDropDownShare from "components/ButtonDropDownShare";

const Epic = ({ className = "" }) => {

  return (
    <div
      className={`nc-PageCollection  ${className}`}
      data-nc-id="PageCollection"
    >

      {/* HEADER */}
      <div className="w-full">
        <div className="relative w-full h-40 md:h-60 2xl:h-72">
          <NcImage
            containerClassName="absolute inset-0"
            src={collectionBanner}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative container -mt-14 lg:-mt-20">
          <div className=" bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-8 rounded-3xl md:rounded-[40px] shadow-xl flex flex-col md:flex-row lg:items-center">
            <div className="flex flex-col sm:flex-row md:block sm:items-start sm:justify-between">
              <div className="w-40 sm:w-48 md:w-56 xl:w-60">
                <NcImage 
                  src="https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  containerClassName="aspect-w-1 aspect-h-1 rounded-3xl overflow-hidden"
                />
              </div>
              <div className="mt-4 flex items-center sm:justify-center space-x-3">
                <div className="h-5 border-l border-neutral-200 dark:border-neutral-700"></div>
                <div className="flex space-x-1.5">
                  <ButtonDropDownShare
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:bg-neutral-800 cursor-pointer "
                    panelMenusClass="origin-top-right !-right-5 !w-40 sm:!w-52"
                  />
      
                </div>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:ml-8 xl:ml-14 flex-grow">
              <div className="max-w-screen-sm ">
                <h2 className="inline-block text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  {"Epic Places"}
                </h2>
                <span className="block mt-4 text-sm text-neutral-500 dark:text-neutral-400">
                 A Collection of Epic Places
                </span>
              </div>
              <div className="mt-6 xl:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 xl:gap-6">
                {/* ----- 1 ----- */}
                <div className="rounded-2xl flex flex-col items-center justify-center shadow-md border border-neutral-50 dark:border-neutral-800 p-5 lg:p-6">
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    Floor Price
                  </span>
                  <span className="font-medium text-base mt-4 sm:text-xl sm:mt-6">
                    $199.99
                  </span>
                  <span className="text-xs text-green-500 mt-1">+0.00%</span>
                </div>

                {/* ----- Volume ----- */}
                <div className="rounded-2xl flex flex-col items-center justify-center shadow-md border border-neutral-50 dark:border-neutral-800 p-5 lg:p-6">
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    Volume
                  </span>
                  <span className="font-medium text-base mt-4 sm:text-xl sm:mt-6">
                    $199.99
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    total
                  </span>
                </div>
                {/* ----- Latest Price ----- */}
                <div className="rounded-2xl flex flex-col items-center justify-center shadow-md border border-neutral-50 dark:border-neutral-800 p-5 lg:p-6">
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    Latest Price
                  </span>
                  <span className="font-medium text-base mt-4 sm:text-xl sm:mt-6">
                    $199.99
                  </span>
                  <span className="text-xs text-green-500 mt-1"> --</span>
                </div>

                {/* -----Items ----- */}
                <div className="rounded-2xl flex flex-col items-center justify-center shadow-md border border-neutral-50 dark:border-neutral-800 p-5 lg:p-6">
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    Items
                  </span>
                  <span className="font-medium text-base mt-4 sm:text-xl sm:mt-6">
                    5
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    total
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}
    </div>
  );
};

export default Epic;
