import React, { FC } from "react";
import { Helmet } from "react-helmet";
import MosaicIdApi from "containers/NftDetailPage/MosaicIdApi";
import Wonders from "containers/Collections/Wonders";

export interface PageWondersProps {
  className?: string;
}

const PageWonders: FC<PageWondersProps> = ({ className = "" }) => {
  return (
    <div className={`nc-PageSearch  ${className}`} data-nc-id="PageSearch">
      <Helmet>
        <title>Wonders of the World | Digital Land</title>
      </Helmet>

      <div
        className={`nc-HeadBackgroundCommon h-24 2xl:h-28 top-0 left-0 right-0 w-full bg-primary-50 dark:bg-neutral-800/20 `}
        data-nc-id="HeadBackgroundCommon"
      />
      <div className="container">
        <Wonders/>
      </div>

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <main>
 
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 lg:mt-10">
          <a href="/nft-detail?type=way&id=49475802">{MosaicIdApi(49475802)}</a>
          <a href="/nft-detail?type=way&id=56539663">{MosaicIdApi(56539663)}</a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PageWonders;
