import React from "react";
import SectionSliderCategories from "components/SectionSliderCategories/SectionSliderCategories";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionVideos from "./SectionVideos";
import { Helmet } from "react-helmet";
import SectionLargeSlider from "./SectionLargeSlider";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionHero2 from "components/SectionHero/SectionHero2";

function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <Helmet>
        <title>Digital Land Marketplace | Bitfari</title>
      </Helmet>
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative mt-12 mb-20 sm:mb-24 sm:mt-20 lg:mb-32">
        {/* SECTION HERO */}
        <SectionHero2 />

        {/* SECTION 2 */}
        <SectionHowItWork className="mt-24 lg:mt-40 xl:mt-48" />
      </div>

      {/* SECTION LARGE SLIDER */}
      <div className="bg-neutral-100/70 dark:bg-black/20 py-20 lg:py-32">
        <div className="container">
          <SectionLargeSlider />
        </div>
      </div>

      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        {/* SECTION */}
        <SectionSubscribe2 />

        {/* SECTION 1 */}
        <SectionSliderCategories />

        {/* SECTION */}
        <div className="relative py-20 lg:py-24">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div>

        {/* SECTION */}
        <SectionVideos />
      </div>
    </div>
  );
}

export default PageHome;
