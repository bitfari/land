import React, { FC } from "react";
import Heading from "components/Heading/Heading";

export interface Statistic {
  id: string;
  heading: string;
  subHeading: string;
}


export interface SectionStatisticProps {
  className?: string;
}

const SectionStatistic: FC<SectionStatisticProps> = ({ className = "" }) => {
  return (
 
   <iframe 
   src="https://stacksonchain.com/dashboards/Digital-Land/162" 
   width={'100%'} height={'1000px'}/>
 
  );
};

export default SectionStatistic;
