import React, { FC } from "react";
import { Helmet } from "react-helmet";
import MosaicIdApi from "containers/NftDetailPage/MosaicIdApi";
import Buildings from "containers/Collections/Buildings";

export interface PageBuildingsProps {
  className?: string;
}

const PageBuildings: FC<PageBuildingsProps> = ({ className = "" }) => {
  return (
    <div className={`nc-PageSearch  ${className}`} data-nc-id="PageSearch">
      <Helmet>
        <title>Famous Buildings | Digital Land</title>
      </Helmet>

      <div
        className={`nc-HeadBackgroundCommon h-24 2xl:h-28 top-0 left-0 right-0 w-full bg-primary-50 dark:bg-neutral-800/20 `}
        data-nc-id="HeadBackgroundCommon"
      />
      <div className="container">
        <Buildings/>
      </div>

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <main>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 lg:mt-10">
          <a href="/nft-detail?type=way&id=34633854">{MosaicIdApi(34633854)}</a>
          <a href="/nft-detail?type=way&id=66418809">{MosaicIdApi(66418809)}</a>
          <a href="/nft-detail?type=way&id=32742038">{MosaicIdApi(32742038)}</a>
          <a href="/nft-detail?type=way&id=58528804">{MosaicIdApi(58528804)}</a>
          <a href="/nft-detail?type=way&id=26929904">{MosaicIdApi(26929904)}</a>
          <a href="/nft-detail?type=way&id=264768896">{MosaicIdApi(264768896)}</a>
          <a href="/nft-detail?type=way&id=266034080">{MosaicIdApi(266034080)}</a>
          <a href="/nft-detail?type=way&id=85393997">{MosaicIdApi(85393997)}</a>
          <a href="/nft-detail?type=way&id=42500770">{MosaicIdApi(42500770)}</a>
          <a href="/nft-detail?type=way&id=766761337">{MosaicIdApi(766761337)}</a>
          <a href="/nft-detail?type=way&id=92060042">{MosaicIdApi(92060042)}</a>
          <a href="/nft-detail?type=way&id=96930225">{MosaicIdApi(96930225)}</a>
          <a href="/nft-detail?type=way&id=12903132">{MosaicIdApi(12903132)}</a>
          <a href="/nft-detail?type=way&id=157016756">{MosaicIdApi(157016756)}</a>
          <a href="/nft-detail?type=way&id=170149134">{MosaicIdApi(170149134)}</a>
          <a href="/nft-detail?type=way&id=263592326">{MosaicIdApi(263592326)}</a>
          <a href="/nft-detail?type=way&id=35091113">{MosaicIdApi(35091113)}</a>
          <a href="/nft-detail?type=way&id=45530842">{MosaicIdApi(45530842)}</a>
          <a href="/nft-detail?type=way&id=713565776">{MosaicIdApi(713565776)}</a>
          <a href="/nft-detail?type=way&id=278093229">{MosaicIdApi(278093229)}</a>
          </div>

        </main>
    
      </div>
    </div>
  );
};

export default PageBuildings;
