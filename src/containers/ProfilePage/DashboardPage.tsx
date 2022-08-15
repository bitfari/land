import React, { FC, Fragment, useEffect, useState} from "react";
import { Helmet } from "react-helmet";
import { userSession } from 'auth.js';
import { StacksMainnet } from '@stacks/network';
import { useConnect } from "@stacks/connect-react";
import NcImage from "shared/NcImage/NcImage";
import authorBanner from "images/nfts/authorBanner.png";
import VerifyIcon from "components/VerifyIcon";
import { CONTRACT_ADDRESS, LAND_NFT_CONTRACT }  from 'Constants';
import {  NonFungibleConditionCode, createAssetInfo, stringAsciiCV, callReadOnlyFunction, uintCV
  , makeContractNonFungiblePostCondition, makeStandardNonFungiblePostCondition
  , standardPrincipalCV, cvToString, bufferCVFromString, AnchorMode, cvToJSON } from "@stacks/transactions";

import ButtonPrimary from 'shared/Button/ButtonPrimary';
 
export interface DashboardPageProps {
  className?: string;

}

let search = window.location.search;
let params = new URLSearchParams(search);
let token_id = params.get('tid');

function Osm() {

  let landlord = userSession.loadUserData()?.profile?.stxAddress?.mainnet;
  
  const [osm, setOsm] = useState(' ');
  const [loading, setLoading] = useState(true);

  useEffect(() =>  {

        // Get the possible nft-id
        // only present if the land is already minted
      async function getOsm() {
      const contractAddress = CONTRACT_ADDRESS;
      const contractName = LAND_NFT_CONTRACT;
      const functionName = 'get-osm';
      const network = new StacksMainnet();
      const senderAddress = landlord;

      const options = {
        contractAddress,
        contractName,
        functionName,
        functionArgs: [uintCV(parseInt(token_id))],
        network,
        senderAddress,
      };

      const result = await callReadOnlyFunction(options);
      let stringResult = cvToString(result);
      setOsm(stringResult.substring(1));
      setLoading(false);
      console.log('OSM Result: ' + stringResult);
    }

        getOsm();
      
      }, [] );

return (

  (osm ===' ') ? (
     " "

    ) : (
  <Fragment>
    {loading === true ? (
              <div><h1>Loading land data...</h1></div>
          ) : (
      <section>
    {osm ===' ' ? (
   <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
     <div className="flex-1">
     <strong>N/A</strong>
     </div>
   </div>
      ) : ( 
     <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
     <div className="flex-1">
 
     <a style={{color:'blue'}} href={'/nft-detail?type=way&id=' + osm}> See my property!! </a>
      <br/>OSM ID: { osm } / Type: WAY / Token ID: {token_id}
      <br/><a style={{color:'blue'}} href={'https://api.bitfari.com/way/' + osm }>See Way Metadata</a> 
      <br/><a style={{color:'blue'}} href={'https://api.bitfari.com/relation/' + osm }>See Relation Metadata</a> 
     </div>
   </div>)}
      </section>)}
   </Fragment>
   ) )}

const DashboardPage: FC<DashboardPageProps> = ({ className = "" }) => {

  global.Buffer = global.Buffer || Buffer;
  const { doContractCall } = useConnect();

  return (
    <div className={`nc-AuthorPage  ${className}`} data-nc-id="AuthorPage">
      <Helmet>
        <title>Dashboard - Digital Landlord Portfolio</title>
      </Helmet>
      <div className="container -mt-5 lg:-mt-4">

      </div>

        <div className="w-full">
        <div className="relative w-full h-40 md:h-60 2xl:h-72">
          <NcImage
            containerClassName="absolute inset-0"
            src={authorBanner}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="container -mt-10 lg:-mt-16">
          <div className="relative bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-8 rounded-3xl md:rounded-[40px] shadow-xl flex flex-col md:flex-row">
            
            <div className="pt-5 md:pt-1 md:ml-6 xl:ml-14 flex-grow">
              <div className="max-w-screen-sm ">
                <div className="inline-flex items-center text-2xl sm:text-3xl lg:text-4xl font-semibold">     
                <h1>Digital Land Dashboard</h1> 
                  <VerifyIcon
                    className="ml-2"
                    iconClass="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8"
                  />
                </div>
                {Osm()}
              
              </div>
              <div className="mt-4 ">
              <h2><b>Earnings</b></h2>
              * <a href="#">Ads Pending Approval</a><br/>
              * <a href="#">Hosting Requests</a><br/>
              * <a href="#">Location Itinerary</a><br/>
              <br/><br/>
              <h2><b>Place Settings</b></h2>
              <hr/>
              * <a href="#">Change Photos</a><br/> 
              * Transfer to:  <br/> 
              * <a href="#">Burn this NFT (use with caution)</a><br/> 
             
              <br/><br/>
              <h2><b>Ads</b></h2>
              <hr/>
              * <a style={{color:'blue'}} href="https://test.bitfari.com/apps/book">Place ads</a><br/>
              * <a style={{color:'blue'}} href="https://www.bitfari.com/audit/">Audit Ads</a><br/>
              * <a href="#">Promote My Land!</a><br/>
              <br/><br/>
              <h2><b>Prices</b></h2>
              <hr/>
              * <a style={{color:'blue'}} href="https://test.bitfari.com/pages/account-details/:?tabid=4">Earnings Report</a><br/>
              * <a href="#">Set direct prices</a><br/>
              * <a href="#">Set rent prices</a><br/>
              * <a href="#">Set a Legacy BTC Payment Address</a><br/>
              <br/><br/>
              <h2><b>Place Connections</b></h2>
              <hr/>
              * <a href="#">Manage Hooks</a><br/>
              * <a href="#">Delegate Management</a><br/>
              * <a href="#">Set a Legacy BTC Payment Address</a><br/>
              * <a style={{color:'blue'}} href="https://gamma.io/">Sell this land (Gamma)</a><br/>
              * <a style={{color:'blue'}} href="https://byzantion.xyz/collection/club-100k">Buy A Club 100K (Byzantion)</a><br/>             
              * <a style={{color:'blue'}} href="https://www.catamaranswaps.org/atomic">Do an asset swap (CatamaranSwaps)</a><br/>
              * <a href="#">911/Emergency/Gov/Hooks</a><br/>
              * <a href="#">Connect to Other Services</a><br/>
              </div>     
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default DashboardPage;
