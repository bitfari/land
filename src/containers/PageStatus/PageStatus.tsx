import rightImg from "images/about-hero-right.png";
import React, { FC } from "react";
import SectionPageStatus from "./SectionStatus";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";

export interface PagePageStatusProps {
  className?: string;
}

const PagePageStatus: FC<PagePageStatusProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >
      <Helmet>
        <title>Dashboard - Digital Land BFT Marketplace</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionPageStatus />
        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PagePageStatus;
