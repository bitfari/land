import React, { FC } from "react";
import { Helmet } from "react-helmet";
import Wonders from "containers/Collections/Wonders";
import Monuments from "containers/Collections/Monuments";
import Islands from "containers/Collections/Islands";
import Buildings from "containers/Collections/Buildings";
import Stadiums from "containers/Collections/Stadiums";
import Universities from "containers/Collections/Universities";
import Epic from "containers/Collections/Epic";

export interface PageCollectionProps {
  className?: string;
}

const PageCollection: FC<PageCollectionProps> = ({ className = "" }) => {

  return (
    <div
      className={`nc-PageCollection  ${className}`}
      data-nc-id="PageCollection"
    >
      <Helmet>
        <title>Digital Land Collections</title>
      </Helmet>
      <a href="/wonders"><Wonders/></a>
      <a href="/monuments"><Monuments/></a>
      <a href="/islands"><Islands/></a>
      <a href="/buildings"><Buildings/></a>
      <a href="/stadiums"><Stadiums/></a>
      <a href="/universities"><Universities/></a>
      <a href="/epic"><Epic/></a>
    </div>

  );
};

export default PageCollection;
