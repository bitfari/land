import React, { FC } from "react";
import { Helmet } from "react-helmet";
import MosaicIdApi from "containers/NftDetailPage/MosaicIdApi";
import Epic from "containers/Collections/Epic";

export interface PageEpicProps {
  className?: string;
}

const PageEpic: FC<PageEpicProps> = ({ className = "" }) => {
  return (
    <div className={`nc-PageSearch  ${className}`} data-nc-id="PageSearch">
      <Helmet>
        <title>Simply Epic Places | Digital Land</title>
      </Helmet>

      <div
        className={`nc-HeadBackgroundCommon h-24 2xl:h-28 top-0 left-0 right-0 w-full bg-primary-50 dark:bg-neutral-800/20 `}
        data-nc-id="HeadBackgroundCommon"
      />
      <div className="container">
        <Epic/>
      </div>

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <main>
 
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 lg:mt-10">
          <a href="/nft-detail?type=way&id=702540318">{MosaicIdApi(702540318)}</a>
          <a href="/nft-detail?type=way&id=11199999999">{MosaicIdApi(11199999999)}</a>
          <a href="/nft-detail?type=way&id=238241022">{MosaicIdApi(238241022)}</a>
          <a href="/nft-detail?type=way&id=805298160">{MosaicIdApi(805298160)}</a>
          <a href="/nft-detail?type=way&id=40088363">{MosaicIdApi(40088363)}</a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PageEpic;
