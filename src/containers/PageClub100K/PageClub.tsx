import rightImg from "images/about-hero-right.png";
import React, { FC } from "react";
import SectionStatistic from "./SectionStatistic";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionHero from "./SectionHero";

export interface PageAboutProps {
  className?: string;
}

const PageClub: FC<PageAboutProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >
      <Helmet>
        <title>Club100K at the Digital Land</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-2 lg:py-2 space-y-2 lg:space-y-2">
        <SectionHero
          rightImg={rightImg}
          heading="👋 Club100K is The Best NFT Ever."
          btnText=""
          subHeading="Join the Digital Landlords Club and get credits for 100K USD to mint digital land, boss style."
        />

        <div className="relative py-2">
        <SectionHero
          rightImg={rightImg}
          heading="Pay 75K, Get 150K"
          btnText=""
          subHeading="Buy a coupon to mint for free hundreds of properties, then 
          enjoy a 50% gift on us!! Click the image to get your NFT!!"
        />
        </div>
        
        <SectionStatistic />

        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageClub;
