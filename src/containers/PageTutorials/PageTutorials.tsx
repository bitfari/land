import rightImg from "images/about-hero-right.png";
import React, { FC } from "react";
import { Helmet } from "react-helmet";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionHero from "./SectionHero";
 
export interface PageTutotialsProps {
  className?: string;
}

const PageTutotials: FC<PageTutotialsProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >
      <Helmet>
        <title>Learn About Digital Land and Web4</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 Learn."
          btnText=""
          subHeading="What is the Digital Land?"
        />
         
        <div className="relative py-16">

        <iframe width="560" height="315" src="https://www.youtube.com/embed/8c3v7xP52zI" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
        <br/><br/>

        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/ryECCSIGdv8" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen></iframe>
         <br/><br/>

         <iframe width="560" height="315" src="https://www.youtube.com/embed/_-OZMAzhRfI" 
         title="YouTube video player" frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
         allowfullscreen></iframe>
         <br/><br/>


        </div>

         
      </div>
    </div>
  );
};

export default PageTutotials;
