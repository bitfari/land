import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/#"?: {};
  "/home2"?: {};
  "/nft-detail"?: {};
  "/collection"?: {};
  "/search"?: {};
  "/fsearch"?: {};
  "/wonders"?: {};
  "/monuments"?: {};
  "/buildings"?: {};
  "/stadiums"?: {};
  "/islands"?: {};
  "/universities"?: {};
  "/cities"?: {};
  "/epic"?: {};
  "/profile"?: {};
  "/portfolio"?: {};
  "/dash"?: {};
  "/leaderboard"?: {};
  "/status"?: {};
  "/signoff"?: {};
  "/author"?: {};
  "/home-header-2"?: {};
  "/connect-wallet"?: {};
  "/about"?: {};
  "/terms"?: {};
  "/privacy"?: {};
  "/faq"?: {};
  "/tutorials"?: {};
  "/club"?: {};
  "/contact"?: {};
  "/404"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<Object>;
}
