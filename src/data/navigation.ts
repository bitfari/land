import { NavItemType } from "shared/Navigation/NavigationItem";
import NcDropDown from "shared/NcDropDown/NcDropDown";
import ncNanoId from "utils/ncNanoId";

export const NAVIGATION_DATA: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/connect-wallet",
    name: "Connect STX Wallet",
  },
  {
    id: ncNanoId(),
    href: "/collection",
    name: "Collections",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/collection",
        name: "All Collections",
      },
      {
        id: ncNanoId(),
        href: "/wonders",
        name: "Wonders of the World",
      },
      {
        id: ncNanoId(),
        href: "/monuments",
        name: "Famous Monuments",
      },
      {
        id: ncNanoId(),
        href: "/islands",
        name: "Entire Islands",
      },
      {
        id: ncNanoId(),
        href: "/buildings",
        name: "Famous Buildings",
      },
      {
        id: ncNanoId(),
        href: "/stadiums",
        name: "Famous Stadiums",
      },
      {
        id: ncNanoId(),
        href: "/universities",
        name: "Famous Universities",
      },
      {
        id: ncNanoId(),
        href: "/epic",
        name: "Simply Epic Places",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/search",
    name: "Search",
  },
  {
    id: ncNanoId(),
    href: "/leaderboard",
    name: "Boards",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/leaderboard",
        name: "Leaderboard",
      },
      {
        id: ncNanoId(),
        href: "/status",
        name: "Network Status",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "About",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/about",
        name: "About",
      },
      {
        id: ncNanoId(),
        href: "/faq",
        name: "FAQs",
      },
      {
        id: ncNanoId(),
        href: "/tutorials",
        name: "Tutorials",
      },
      {
        id: ncNanoId(),
        href: "/club",
        name: "Club100K",
      },
      {
        id: ncNanoId(),
        href: "/contact",
        name: "Contact us",
      },

      {
        id: ncNanoId(),
        href: "/privacy",
        name: "Privacy Policy",
      },
      {
        id: ncNanoId(),
        href: "/terms",
        name: "Terms of Service",
      },
    ],
  },
];
