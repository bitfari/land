import React, { FC, Fragment } from "react";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSliderCategories from "components/SectionSliderCategories/SectionSliderCategories";
import TabDetail from "./TabDetail";
import PhotoIdApi from "./PhotoIdApi";
import PhotoRelApi from "./PhotoRelApi";
import OsmRelApi from "./OsmRel";
import PhotoNodeApi from "./PhotoNodeApi";
import OsmNodeApi from "./OsmNode";
import OsmIdApi from "./OsmId";

export interface NftDetailPageProps {
  className?: string;
  isPreviewMode?: boolean;
}

let search = window.location.search;
let params = new URLSearchParams(search);
let type = params.get('type');

if (type===''){
  type ='way';
} 

let wayId = params.get('id');
let relId = params.get('id');
let nodeId = params.get('id');

const NftDetailPage: FC<NftDetailPageProps> = ({
  className = "",
  isPreviewMode,
}) => {

  const renderSection1 = () => {
    return (        
      (type==='relation') ? (OsmRelApi(relId)) : ( 
        (type==='node') ? (OsmNodeApi(nodeId)) : ( OsmIdApi(wayId))  
      )
    )
  };

  const renderSection2 = () => {
    return (
      (type==='relation') ? (PhotoRelApi(relId)) : ( 
        (type==='node') ? (PhotoNodeApi(nodeId)) : ( PhotoIdApi(wayId))        
      )
    )
  };

  return (
    <Fragment>
    <div
      className={`nc-NftDetailPage  ${className}`}
      data-nc-id="NftDetailPage"
    >
      {/* Main */}

    {((type==='relation') || (type==='node')) ? (" ") : ( 
     <center> You searched for a <b>WAY</b>, did you mean to look for a 
      <a  style={{color:'blue'}} href={"/nft-detail?type=relation&id=" + relId}> <b>RELATION</b></a> 
       &nbsp; or  <a  style={{color:'blue'}} href={"/nft-detail?type=node&id=" + nodeId}> <b>NODE</b></a> associated to this ID?? </center>
     )}
      <main className="container mt-11 flex ">
      
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
          {/* CONTENT */}
          <div className="space-y-8 lg:space-y-10">
            {/* HEADING */}
            <div className="relative">
            {renderSection2()}
            </div>
            <TabDetail />
          </div>

          {/* SIDEBAR */}
          <div className="pt-10 lg:pt-0 xl:pl-10 border-t-2 border-neutral-200 dark:border-neutral-700 lg:border-t-0">
            {renderSection1()}
          </div>
        </div>
      </main>

      {/* OTHER SECTION */}
      {!isPreviewMode && (
        <div className="container py-24 lg:py-32">
          {/* SECTION 1 */}
          <div className="relative py-24 lg:py-28">
            <BackgroundSection />
            <SectionSliderCategories />
          </div>

        </div>
      )}
    </div>
    </Fragment>
  );
};

export default NftDetailPage;