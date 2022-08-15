import rightImg from "images/about-hero-right.png";
import React, { FC } from "react";
import SectionDashboard from "./SectionDashboard";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";

export interface PageDashboardsProps {
  className?: string;
}

const PageDashboards: FC<PageDashboardsProps> = ({ className = "" }) => {
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
        <SectionDashboard />
        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageDashboards;
