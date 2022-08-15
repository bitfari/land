import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Footer from "shared/Footer/Footer";
import PageHome from "containers/PageHome/PageHome";
import Page404 from "containers/Page404/Page404";
import ProfilePage from "containers/ProfilePage/ProfilePage";
import PortfolioPage from "containers/ProfilePage/PortfolioPage";
import DashboardPage from "containers/ProfilePage/DashboardPage";
import SignOffPage from "containers/ProfilePage/SignoffPage";
import PageContact from "containers/PageContact/PageContact";
import PageAbout from "containers/PageAbout/PageAbout";
import PageLeaderboard from "containers/PageDashboard/PageDashboard";
import PageStatus from "containers/PageStatus/PageStatus";
import PageTerms from "containers/PageTerms/PageTerms";
import PageFAQ from "containers/PageFAQ/PageFAQ";
import PagePrivacy from "containers/PagePrivacy/PagePrivacy";
import PageTutorials from "containers/PageTutorials/PageTutorials";
import PageClub from "containers/PageClub100K/PageClub";
import SiteHeader from "containers/SiteHeader";
import SiteHeaderSTX from "containers/SiteHeaderSTX";
import NftDetailPage from "containers/NftDetailPage/NftDetailPage";
import PageCollection from "containers/PageCollection";
import PageSearch from "containers/PageSearch";
import FilteredSearch from "containers/FilteredSearch";
import PageWonders from "containers/PageWonders";
import PageMonuments from "containers/PageMonuments";
import PageIslands from "containers/PageIslands";
import PageStadiums from "containers/PageStadiums";
import PageBuildings from "containers/PageBuildings";
import PageUniversities from "containers/PageUniversities";
import PageCities from "containers/PageCities";
import PageEpic from "containers/PageEpic";
import PageConnectWallet from "containers/PageConnectWallet";
import PageHome2 from "containers/PageHome/PageHome2";
import { userSession } from '../auth'
import { Connect } from "@stacks/connect-react";
import { StacksMainnet } from "@stacks/network";

export const pages: Page[] = [
  { path: "/", exact: true, component: PageHome2 },
  { path: "/#", exact: true, component: PageHome2 },
  { path: "/home2", exact: true, component: PageHome },
  { path: "/home-header-2", exact: true, component: PageHome },
  { path: "/nft-detail", component: NftDetailPage },
  { path: "/collection", component: PageCollection },
  { path: "/search", component: PageSearch },
  { path: "/fsearch", component: FilteredSearch },
  { path: "/wonders", component: PageWonders },
  { path: "/buildings", component: PageBuildings },
  { path: "/monuments", component: PageMonuments },
  { path: "/islands", component: PageIslands },
  { path: "/stadiums", component: PageStadiums },
  { path: "/universities", component: PageUniversities },
  { path: "/cities", component: PageCities },
  { path: "/epic", component: PageEpic },
  { path: "/profile", component: ProfilePage },
  { path: "/portfolio", component: PortfolioPage },
  { path: "/dash", component: DashboardPage },
  { path: "/leaderboard", component: PageLeaderboard },
  { path: "/status", component: PageStatus },
  { path: "/signoff", component: SignOffPage },
  { path: "/connect-wallet", component: PageConnectWallet },
  { path: "/contact", component: PageContact },
  { path: "/about", component: PageAbout },
  { path: "/terms", component: PageTerms },
  { path: "/privacy", component: PagePrivacy },
  { path: "/faq", component: PageFAQ },
  { path: "/tutorials", component: PageTutorials },
  { path: "/club", component: PageClub }
];

function Display(props: typeof userSession) {
  const isLoggedIn = props.isUserSignedIn()
  if (isLoggedIn) {
   return <SiteHeader />
  } else {
   return <SiteHeaderSTX /> }
}

const authOption = {
  appDetails: {
    name: 'Digital Land Catalog',
    icon: window.location.origin + '/logo.svg',
  },
  redirectTo: '/',
  userSession: userSession,
}

const Routes = () => {
  return (
    <Connect authOptions={authOption}  >
      <BrowserRouter basename="/">
      <ScrollToTop />
    { Display(userSession) }
      <Switch>
        {pages.map(({ component, path, exact }) => {
          return (
            <Route
              key={path}
              component={component}
              exact={!!exact}
              path={path}
            />
          );
        })}
        <Route component={Page404} />
      </Switch>
      <Footer />
    </BrowserRouter>
    </Connect>
  );
};

export default Routes;
