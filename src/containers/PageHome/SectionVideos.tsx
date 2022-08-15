import Heading from "shared/Heading/Heading";
import NcImage from "shared/NcImage/NcImage";
import NcPlayIcon from "shared/NcPlayIcon/NcPlayIcon";
import React, { FC, useState } from "react";

export interface VideoType {
  id: string;
  title: string;
  thumbnail: string;
}

export interface SectionVideosProps {
  videos?: VideoType[];
  className?: string;
}

const VIDEOS_DEMO: VideoType[] = [
  {
    id: "5_atO1a0szA",
    title: "Introducing Bitfari",
    thumbnail:
      "https://bitfari.org/wp-content/uploads/2021/06/bitfarilogo-e1623067139914-1024x544.png",
  },
];

const SectionVideos: FC<SectionVideosProps> = ({
  videos = VIDEOS_DEMO,
  className = "",
}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [currentVideo] = useState(0);

  const renderMainVideo = () => {
    const video: VideoType = videos[currentVideo];
    return (
      <div
        className="group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px]"
        title={video.title}
      >
        {isPlay ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-3xl"
          ></iframe>
        ) : (
          <>
            <div
              onClick={() => setIsPlay(true)}
              className="cursor-pointer absolute inset-0 flex items-center justify-center z-10"
            >
              <NcPlayIcon />
            </div>
            <NcImage
              containerClassName="absolute inset-0 rounded-3xl overflow-hidden will-change-transform"
              className="object-cover w-full h-full transform transition-transform group-hover:scale-105 duration-300  will-change-transform"
              src={video.thumbnail}
              title={video.title}
              alt={video.title}
            />
          </>
        )}
      </div>
    );
  };

  return (
    <div className={`nc-SectionVideos ${className}`}>
      <Heading
        desc="Bitfari is a location-based communication network made possible by Bitcoin and blockchain technology.
          When you use Bitfari, you get paid for your attention. The system allows anyone to place ads in millions of real and virtual billboards
          across the globe. With Bitfari you can distribute digital flyers, classified ads, online ads, AR ads, smart-signage and programmatic ads for pennies!"
      >
        🎬 Bitfari Intro
      </Heading>

      <div className="flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row">
        <div className="absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl bg-primary-100 z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-7/12 dark:bg-neutral-800/80"></div>
        <div className="flex-grow relative  ">{renderMainVideo()}</div>
      </div>
    </div>
  );
};

export default SectionVideos;
