import rightImg from "images/about-hero-right.png";
import React, { FC } from "react";
import { Helmet } from "react-helmet";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionHero from "./SectionHero";
 
export interface PageTermsProps {
  className?: string;
}

const PageAbout: FC<PageTermsProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >
      <Helmet>
        <title>FAQs - About the Digital Land and Web4</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-14">
        <SectionHero
          rightImg={rightImg}
          heading="👋 FAQs."
          btnText=""
          subHeading="About the Digital Land and Web4"
        />

        <div className="relative py-16">

        <h2><b>1. Is minting free?</b></h2>
        Club 100K NFT holders can mint for free and only pay transaction costs on most properties.
        <br/><br/>


        <h2><b>2. What is the average minting price?</b></h2>
        About $199 USD. Club NFT holders can mint for free and Fari holders save 50%.
        <br/><br/>


        <h2><b>3. What can this NFT do?</b></h2>
        Its a virtual billboard that projects ads on AR glasses, smart phones and computers. Since you will own the billboard
        you get payments everytime an ad is posted. Ads could be targeted by geofence, place, building walls, etc.
        <br/><br/>

        <h2><b>4. Can I buy the glasses now?</b></h2>
        Yes, you can buy nReal glasses and test them before installing the Bitfari app or any of the upcoming dozens of apps
        that will display this content. AR apps will come in late summer!
        <br/><br/>

        <h2><b>5. Do I own the place in real life?</b></h2>
        No. You own a digital projection of a canvas on top of the place and about 40 namespaces projected over it.
        <br/><br/>

        <h2><b>6. Do I own the pictures?</b></h2>
        No. You have a creative commons license over the pictures. You own a digital projection of a canvas on top of the place and about 40 namespaces projected over it. 
        <br/><br/>

        <h2><b>7. Can Children use this site?</b></h2>
        No. You have to be an adult to use this site.  
        <br/><br/>

        <h2><b>8. Can I resell my NFT?</b></h2>
        Yes. Using Gamma or Byzantion you can list your NFT and sell it. Please allow one week after minting before selling
        to give the team some time to crystallize your NFTs.  
        <br/><br/>

        <h2><b>9. What is NFT Crystallization or Decentralization?</b></h2>
        Crystallization or Decentralization is a process of generating NFT metadata and saving it on IPFS for decentralization.  
        <br/><br/>

        <h2><b>10. Can I register a relation or node?</b></h2>
        Since we are managing traffic and want to conduct an orderly minting process, first we are open to register OSM Ways, in a week, OSM 
        Relations and Nodes in two weeks. Please only mint OSM ways for now.  
        <br/><br/>

        </div>

         
      </div>
    </div>
  );
};

export default PageAbout;
