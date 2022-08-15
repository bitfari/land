import React, { FC, useState } from "react";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import ButtonCircle from "shared/Button/ButtonCircle";
import FSResultsApi from "containers/FilteredSearchResults";

export interface FilteredSearchProps {
  className?: string;
}

const FilteredSearch: FC<FilteredSearchProps> = ({ className = "" }) => {

const renderResults = () => {
  return (
    FSResultsApi()
  )
};

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
        <title>Search with Filters | Digital Land</title>
      </Helmet>
 
         {/* SEARCH RESULTS ITEMS */}
         <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">

          {renderResults()}

          </div>

       {/* OPEN SEARCH BOXES */}
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

      <center>
      This is our multimodal search facility, where you search for digital land in two steps. 
      First search on OSM for a land code on box 1, and then just input your code on box 2 and go to your chosen land!!
      </center>
      </div>
    </div>
  );
};

export default FilteredSearch;
