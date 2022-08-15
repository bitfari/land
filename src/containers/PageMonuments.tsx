import React, { FC } from "react";
import { Helmet } from "react-helmet";
import MosaicIdApi from "containers/NftDetailPage/MosaicIdApi";
import Monuments from "containers/Collections/Monuments";

export interface PageMonumentsProps {
  className?: string;
}

const PageMonuments: FC<PageMonumentsProps> = ({ className = "" }) => {
  return (
    <div className={`nc-PageSearch  ${className}`} data-nc-id="PageSearch">
      <Helmet>
        <title>Famous Monuments | Digital Land</title>
      </Helmet>

      <div
        className={`nc-HeadBackgroundCommon h-24 2xl:h-28 top-0 left-0 right-0 w-full bg-primary-50 dark:bg-neutral-800/20 `}
        data-nc-id="HeadBackgroundCommon"
      />
      <div className="container">
        <Monuments/>
      </div>

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <main>
 
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 lg:mt-10">
          <a href="/nft-detail?type=way&id=32965412">{MosaicIdApi(32965412)}</a>
          <a href="/nft-detail?type=way&id=398769543">{MosaicIdApi(398769543)}</a>
          <a href="/nft-detail?type=way&id=66418767">{MosaicIdApi(66418767)}</a> 
          <a href="/nft-detail?type=way&id=398822975">{MosaicIdApi(398822975)}</a> 
          <a href="/nft-detail?type=way&id=129835611">{MosaicIdApi(129835611)}</a> 
          <a href="/nft-detail?type=way&id=165627403">{MosaicIdApi(165627403)}</a> 
          <a href="/nft-detail?type=way&id=132573655">{MosaicIdApi(132573655)}</a> 
          <a href="/nft-detail?type=way&id=37814132">{MosaicIdApi(37814132)}</a> 
          <a href="/nft-detail?type=way&id=46177152">{MosaicIdApi(46177152)}</a> 
          <a href="/nft-detail?type=way&id=370672707">{MosaicIdApi(370672707)}</a> 
          <a href="/nft-detail?type=way&id=49938932">{MosaicIdApi(49938932)}</a> 
          </div>

        </main>
    
      </div>
    </div>
  );
};

export default PageMonuments;
