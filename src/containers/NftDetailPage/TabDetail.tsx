import React, { Fragment, useEffect, useState } from "react";
import VerifyIcon from "components/VerifyIcon";
import { Buffer } from "@stacks/common";
import { StacksMainnet } from '@stacks/network';
import { CONTRACT_ADDRESS, LAND_NFT_CONTRACT }  from 'Constants';
import { callReadOnlyFunction, stringAsciiCV, uintCV, cvToString } from "@stacks/transactions";

export default function CurrentOwner() {

  global.Buffer = global.Buffer || Buffer;

  let detail = window.location.search;
  let params = new URLSearchParams(detail);
  let type = params.get('type');
  let osm_id = params.get('id');
  let landlord = CONTRACT_ADDRESS;
  
  const [ownership, setOwnership] = useState(' ');
  const [loading, setLoading] = useState(true);

  useEffect(() =>  {

        // Get the possible nft-id
        // only present if the land is already minted
        const getOwner = async () => {
          const contractAddress = CONTRACT_ADDRESS;
          const contractName = LAND_NFT_CONTRACT;
          const functionName = 'get-landlord';
          const network = new StacksMainnet();
          const senderAddress = landlord;
          
          const options = {
            contractAddress,
            contractName,
            functionName,
            functionArgs: [uintCV(parseInt(osm_id)), stringAsciiCV(type)],
            network,
            senderAddress,
          };
    
          const result = await callReadOnlyFunction(options);
          let stringResult = cvToString(result);

          console.log('Result: ' + stringResult);

          let matchNone = stringResult.match(/none/)?.toString()

          if (matchNone === 'none'){
            setOwnership('none');
            
             
          } else {
            let matchSome = stringResult;
            matchSome = matchSome.replace('some','').replace('(','').replace(')','').trim();
            setOwnership(matchSome);

          }

          setLoading(false);  
          console.log('Owner Address: ' + ownership);
        };

        getOwner ();
      
      }, [] );

return (
  <Fragment>
    {loading === true ? (
    <div><h1>Retrieving Owner ...</h1></div>
          ) : (
      <section>
    {ownership === 'none' ? (
   <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
     <div className="flex-1">
     <strong>This property is available for minting! </strong><br/><br/>
     </div>
   </div>
      ) : (
      <div className="flex items-center py-4">
      <VerifyIcon iconClass="w-4 h-4" />
        <span className="ml-2.5 text-neutral-500 dark:text-neutral-400 flex flex-col">
            <span className="text-neutral-900 dark:text-neutral-200 font-medium flex items-center">
            <span> The owner of this land is <br/><strong>{ ownership }</strong></span>
          </span>
        </span>
      </div>
        )}

    <div>
      <i><b>==== Corporate Affiliation Disclosure ====</b></i> <br/>
      Digital Land NFTs are NOT affiliated, endorsed, or approved by any governmental entity, corporation or real estate company. 
      The item offered in this page will not grant you rights in the real world over the advertised building. Especifically you will be 
      the landlord and sole owner of the digital land projected onto  the property. The Digital Land is the first metaverse finalized 
      on Bitcoin, an Internet of Places where people can automatically surf with their location and get compensated for their attention 
      thru the Bitfari Network.<br/><br/>

      <i><b>==== Ownership Disclosure ====</b></i> <br/>
      After minting, you will own the place in perpetuity. If the place gets demolished, altered of rezoned in the real world, only you 
      can burn the place, re-mint it or update it. You don't have to renew ownership of your digital land, since the network is not financed thru
      fees. On average, digital land NFTs contain about twenty channels and qualify for distribution in three Bitfari networks.<br/><br/>

      <i><b>==== Image Rights Disclosure ====</b></i> <br/>
      Photos are licensed thru Creative Commons (CC0) and generally come from Pexels or Wikidata. 
      While you can use the photos free in any social media profile, these photos do not imply affiliation with
      any government, corporation or building operator.
      </div>

      </section>)}

   </Fragment>)
}

 
