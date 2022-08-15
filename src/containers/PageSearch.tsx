import React, { FC, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import ButtonCircle from "shared/Button/ButtonCircle";
import MosaicIdApi from "containers/NftDetailPage/MosaicIdApi";
 
export interface PageSearchProps {
  className?: string;
}

const PageSearch: FC<PageSearchProps> = ({ className = "" }) => {

const [width, setWidth] = useState<number>(window.innerWidth);

function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}

useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

const isMobile = width <= 768;

const [query, setQuery] = useState(" ");
const handleInput = event => {
    event.preventDefault();
    setQuery(event.target.value);
};

const [code, setCode] = useState(" ");
const handleInputCode = event => {
    event.preventDefault();
    setCode(event.target.value);
};

const showLand = event => {
  event.preventDefault();
  window.location.replace("/nft-detail?type=way&id=" + code)
  setCode(event.target.value);
};
 
  return (
    <div className={`nc-PageSearch ${className}`} data-nc-id="PageSearch">
      <Helmet>
        <title>Search | Digital Land</title>
      </Helmet>
      <div className="container">
      <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
        Search digital land and mint your NFTs! 🖼 
      </h2>
      </div>
      <div
        className={`nc-HeadBackgroundCommon h-24 2xl:h-28 top-0 left-0 right-0 w-full bg-primary-50 dark:bg-neutral-800/20 `}
        data-nc-id="HeadBackgroundCommon"
      />  
      <div className="container">
        
      <form className="relative w-full" target="_blank" 
            method="post"
            action="#">           
            <label
              htmlFor="search-input"
              className="text-neutral-500 dark:text-neutral-300"
            >
              <span className="sr-only">Step 2: Go directly to your chosen land!</span>
              <Input
                className="shadow-lg border-0 dark:border"
                id="code-input"
                type="search"
                placeholder="Step 2: Input the OSM Code"
                sizeClass="pl-14 py-5 pr-5 md:pl-16"
                rounded="rounded-full"
                onChange={handleInputCode}
              />
              <ButtonCircle
                className="absolute right-2.5 top-1/2 transform -translate-y-1/2"
                size=" w-11 h-11"
                type="submit"
                onClick={showLand}
              >
                <i className="las la-arrow-right text-xl"></i>
              </ButtonCircle>
              <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl md:left-6">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 22L20 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </label>
          </form>
          
          {(isMobile) ? (<b> <br/><br/> <br/><br/></b>) : (" ")}

        <header className="max-w-2xl mx-auto -mt-10 flex flex-col lg:-mt-7">
          <form className="relative w-full " target="_blank" 
            method="post"
            action={`https://openstreetmap.org?query=${query}`}>           
            <label
              htmlFor="search-input"
              className="text-neutral-500 dark:text-neutral-300"
            >
              <span className="sr-only">Search all places using OSM</span>
              <Input
                className="shadow-lg border-0 dark:border"
                id="search-input"
                type="search"
                placeholder="Step 1: Search in OSM to get the code"
                sizeClass="pl-14 py-5 pr-5 md:pl-16"
                rounded="rounded-full"
                onChange={handleInput}
              />
              <ButtonCircle
                className="absolute right-2.5 top-1/2 transform -translate-y-1/2"
                size=" w-11 h-11"
                type="submit"
              >
                <i className="las la-arrow-right text-xl"></i>
              </ButtonCircle>
              <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl md:left-6">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 22L20 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </label>
          </form>
        </header>
      </div>

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">

      <center>Welcome to our multimodal search facility. First search on OSM for a land code, 
      then input your code and go to your chosen land!!</center>
        <main>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 lg:mt-10">
    
          <a href="/wonders">{MosaicIdApi(49475802)}</a>
          <a href="/buildings">{MosaicIdApi(34633854)}</a>
          <a href="/stadiums">{MosaicIdApi(24801630)}</a>
          <a href="/monuments">{MosaicIdApi(398769543)}</a>
          <a href="/islands">{MosaicIdApi(29691408)}</a>
          <a href="/universities">{MosaicIdApi(732228095)}</a>
          <a href="/cities">{MosaicIdApi(46177152)}</a>
          <a href="/epic">{MosaicIdApi(702540318)}</a>

          </div>
        </main>
      </div>
    </div>
  );
};

export default PageSearch;
