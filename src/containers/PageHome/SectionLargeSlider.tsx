import CardLarge1 from "components/CardLarge1/CardLarge1";
import { nftsLargeImgs, nftsLargeLinks } from "contains/uiData";
import React, { FC, useState } from "react";

export interface SectionLargeSliderProps {
  className?: string;
}

const SectionLargeSlider: FC<SectionLargeSliderProps> = ({
  className = "",
}) => {
  const [indexActive, setIndexActive] = useState(0);

  const handleClickNext = () => {
    setIndexActive((state) => {
      if (state >= 2) {
        return 0;
      }
      return state + 1;
    });
  };

  const handleClickPrev = () => {
    setIndexActive((state) => {
      if (state === 0) {
        return 2;
      }
      return state - 1;
    });
  };

  return (
    <div className={`nc-SectionLargeSlider relative ${className}`}>
      {[1, 1, 1].map((_, index) => (
        <CardLarge1
          key={index}
          isShowing={indexActive === index}
          featuredImgUrl={nftsLargeImgs[index]}
          landNftUrl= {nftsLargeLinks[index]}
          onClickNext={handleClickNext}
          onClickPrev={handleClickPrev}
        /> 
      ))}
    </div>
  );
};

export default SectionLargeSlider;
