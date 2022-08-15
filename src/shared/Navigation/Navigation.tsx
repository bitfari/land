import React, { Fragment } from "react";
import NavigationItem from "./NavigationItem";
import { NAVIGATION_DATA } from "data/navigation";

function Navigation() {
  return (
    <Fragment>
    <ul className="nc-Navigation lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative">
      {NAVIGATION_DATA.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>

    </Fragment>
  );
}

export default Navigation;
