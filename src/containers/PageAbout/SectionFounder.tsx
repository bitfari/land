import Heading from "components/Heading/Heading";
import React from "react";
import NcImage from "shared/NcImage/NcImage";

export interface People {
  id: string;
  name: string;
  job: string;
  avatar: string;
}

const FOUNDER_DEMO: People[] = [
  {
    id: "1",
    name: `Jordhy Ledesma`,
    job: "Founder and CEO",
    avatar:
      "https://www.bitfari.org/wp-content/uploads/2022/05/jordhy-hs.jpg",
  },
  {
    id: "4",
    name: `Sheila Trucco`,
    job: "CMO",
    avatar:
      "https://www.bitfari.org/wp-content/uploads/2022/05/sheila-hs.jpg",
  },
  {
    id: "3",
    name: `Luis Acevedo`,
    job: "CTO",
    avatar:
      "https://www.bitfari.org/wp-content/uploads/2022/05/acevedo-hs.jpg",
  },
  {
    id: "2",
    name: `Tulio Suazo`,
    job: "Senior Engineer UI/UX",
    avatar:
      "https://www.bitfari.org/wp-content/uploads/2022/05/tulio-hs.jpg",
  },
];

const SectionFounder = () => {
  return (
    <div className="nc-SectionFounder relative">
      <Heading
        desc="We’re creating a new information layer that's relevant, accessible,
          respectful of privacy and valuable for all. We democratize advertising!"
      >
        ⛱ Bitfari Foundation Leaders
      </Heading>
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
        {FOUNDER_DEMO.map((item) => (
          <div key={item.id} className="max-w-sm">
            <NcImage
              containerClassName="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden"
              className="absolute inset-0 object-cover"
              src={item.avatar}
            />
            <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
              {item.name}
            </h3>
            <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              {item.job}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFounder;
