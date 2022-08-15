import React, { FC } from "react";
import { Helmet } from "react-helmet";
import MosaicIdApi from "containers/NftDetailPage/MosaicIdApi";
import Stadiums from "containers/Collections/Stadiums";

export interface PageStadiumsProps {
  className?: string;
}

const PageStadiums: FC<PageStadiumsProps> = ({ className = "" }) => {
  return (
    <div className={`nc-PageSearch  ${className}`} data-nc-id="PageSearch">
      <Helmet>
        <title>Famous Stadiums | Digital Land</title>
      </Helmet>

      <div
        className={`nc-HeadBackgroundCommon h-24 2xl:h-28 top-0 left-0 right-0 w-full bg-primary-50 dark:bg-neutral-800/20 `}
        data-nc-id="HeadBackgroundCommon"
      />
      <div className="container">
        <Stadiums />
      </div>

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <main>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 lg:mt-10">
          <a href="/nft-detail?type=way&id=138141251">{MosaicIdApi(138141251)}</a>
          <a href="/nft-detail?type=way&id=24801630">{MosaicIdApi(24801630)}</a>
          <a href="/nft-detail?type=way&id=108505523">{MosaicIdApi(108505523)}</a>     
          <a href="/nft-detail?type=way&id=7969701">{MosaicIdApi(7969701)}</a>
          <a href="/nft-detail?type=way&id=119153498">{MosaicIdApi(119153498)}</a>
          <a href="/nft-detail?type=way&id=5208863">{MosaicIdApi(5208863)}</a>
          <a href="/nft-detail?type=way&id=443675312">{MosaicIdApi(443675312)}</a>
          <a href="/nft-detail?type=way&id=24587933">{MosaicIdApi(24587933)}</a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PageStadiums;
