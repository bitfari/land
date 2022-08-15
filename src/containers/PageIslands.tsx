import React, { FC } from "react";
import { Helmet } from "react-helmet";
import MosaicIdApi from "containers/NftDetailPage/MosaicIdApi";
import Islands from "containers/Collections/Islands";

export interface PageIslandsProps {
  className?: string;
}

const PageIslands: FC<PageIslandsProps> = ({ className = "" }) => {
  return (
    <div className={`nc-PageSearch  ${className}`} data-nc-id="PageSearch">
      <Helmet>
        <title>Entire Islands | Digital Land</title>
      </Helmet>

      <div
        className={`nc-HeadBackgroundCommon h-24 2xl:h-28 top-0 left-0 right-0 w-full bg-primary-50 dark:bg-neutral-800/20 `}
        data-nc-id="HeadBackgroundCommon"
      />
      <div className="container">
        <Islands/>
      </div>

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <main>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 lg:mt-10">
          <a href="/nft-detail?type=way&id=236335677">{MosaicIdApi(236335677)}</a>
          <a href="/nft-detail?type=way&id=29691408">{MosaicIdApi(29691408)}</a>
          <a href="/nft-detail?type=way&id=476248583">{MosaicIdApi(476248583)}</a>
          <a href="/nft-detail?type=way&id=38319691">{MosaicIdApi(38319691)}</a>
          <a href="/nft-detail?type=way&id=49576828">{MosaicIdApi(49576828)}</a>
          <a href="/nft-detail?type=way&id=44119879">{MosaicIdApi(44119879)}</a>
          <a href="/nft-detail?type=way&id=2968190">{MosaicIdApi(2968190)}</a>
          <a href="/nft-detail?type=way&id=3403603">{MosaicIdApi(3403603)}</a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PageIslands;
