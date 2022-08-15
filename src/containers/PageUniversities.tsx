import React, { FC } from "react";
import { Helmet } from "react-helmet";
import MosaicIdApi from "containers/NftDetailPage/MosaicIdApi";
import Universities from "containers/Collections/Universities";

export interface PageUniversitiesProps {
  className?: string;
}

const PageUniversities: FC<PageUniversitiesProps> = ({ className = "" }) => {
  return (
    <div className={`nc-PageSearch  ${className}`} data-nc-id="PageSearch">
      <Helmet>
        <title>Famous Universities | Digital Land</title>
      </Helmet>

      <div
        className={`nc-HeadBackgroundCommon h-24 2xl:h-28 top-0 left-0 right-0 w-full bg-primary-50 dark:bg-neutral-800/20 `}
        data-nc-id="HeadBackgroundCommon"
      />
      <div className="container">
        <Universities/>
      </div>

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <main>
 
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 lg:mt-10">
          <a href="/nft-detail?type=way&id=732228095">{MosaicIdApi(732228095)}</a>
          <a href="/nft-detail?type=way&id=29111188">{MosaicIdApi(29111188)}</a>
          <a href="/nft-detail?type=way&id=29268613">{MosaicIdApi(29268613)}</a>
          <a href="/nft-detail?type=way&id=108156090">{MosaicIdApi(108156090)}</a>
          <a href="/nft-detail?type=way&id=15396822">{MosaicIdApi(15396822)}</a>
          <a href="/nft-detail?type=way&id=488114799">{MosaicIdApi(488114799)}</a>
          <a href="/nft-detail?type=way&id=25795401">{MosaicIdApi(25795401)}</a>
          <a href="/nft-detail?type=way&id=66678720">{MosaicIdApi(66678720)}</a>
          <a href="/nft-detail?type=way&id=27400683">{MosaicIdApi(27400683)}</a>
          <a href="/nft-detail?type=way&id=807458549">{MosaicIdApi(807458549)}</a>
          <a href="/nft-detail?type=way&id=61706395">{MosaicIdApi(61706395)}</a>
          <a href="/nft-detail?type=way&id=588785843">{MosaicIdApi(588785843)}</a>
          <a href="/nft-detail?type=way&id=301210399">{MosaicIdApi(301210399)}</a>
          <a href="/nft-detail?type=way&id=37329586">{MosaicIdApi(37329586)}</a>
          <a href="/nft-detail?type=way&id=141446677">{MosaicIdApi(141446677)}</a>
          <a href="/nft-detail?type=way&id=29650751">{MosaicIdApi(29650751)}</a>
          <a href="/nft-detail?type=way&id=475315620">{MosaicIdApi(475315620)}</a>
          <a href="/nft-detail?type=way&id=563157907">{MosaicIdApi(563157907)}</a>
          <a href="/nft-detail?type=way&id=958848088">{MosaicIdApi(958848088)}</a>
          <a href="/nft-detail?type=way&id=43330481">{MosaicIdApi(43330481)}</a>
          <a href="/nft-detail?type=way&id=238655718">{MosaicIdApi(238655718)}</a>
          <a href="/nft-detail?type=way&id=25822522">{MosaicIdApi(25822522)}</a>
          <a href="/nft-detail?type=way&id=278143425">{MosaicIdApi(278143425)}</a>
          <a href="/nft-detail?type=way&id=633960535">{MosaicIdApi(633960535)}</a>
          <a href="/nft-detail?type=way&id=108069461">{MosaicIdApi(108069461)}</a>
          </div>

        </main>
    
      </div>
    </div>
  );
};

export default PageUniversities;
