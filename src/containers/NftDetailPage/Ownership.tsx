import React, { Fragment, useEffect, useState } from "react";
import { userSession } from 'auth.js';
import { StacksMainnet } from '@stacks/network';
import { CONTRACT_ADDRESS, LAND_NFT_CONTRACT }  from 'Constants';
import { callReadOnlyFunction, stringAsciiCV, uintCV, cvToString } from "@stacks/transactions";

export default function Owner() {

  let detail = window.location.search;
  let params = new URLSearchParams(detail);
  let osm_id = params.get('id');
  let type = params.get('type');
  
  let landlord = userSession.loadUserData()?.profile?.stxAddress?.mainnet;
  
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

        getOwner();
      
      }, [] );

return (

  (landlord ===' ') ? (
     " "

    ) : (
  <Fragment>
    {loading === true ? (
              <div><h1>Loading Ownership...</h1></div>
          ) : (
      <section>
    {ownership === 'none' ? (
   <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
     <div className="flex-1">
     <strong>This property is available for minting. You can mint this property now!</strong>
     </div>
   </div>
      ) : ( 
     <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
     <div className="flex-1">
        <strong>Do not try to mint. This property is already minted.
        <br/><br/>The owner of this digital land is { ownership }</strong>
     </div>
   </div>)}
      </section>)}
   </Fragment>
 
   )  
   
   )
}
