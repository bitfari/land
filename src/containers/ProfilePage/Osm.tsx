import React, { Fragment, useEffect, useState } from "react";
import { userSession } from 'auth.js';
import { StacksMainnet } from '@stacks/network';
import { CONTRACT_ADDRESS, LAND_NFT_CONTRACT }  from 'Constants';
import { callReadOnlyFunction, uintCV, cvToString } from "@stacks/transactions";

export default function Osm(props) {

  let token_id = props.toString();
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
              <div><h1>Loading Digital Land...</h1></div>
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
        <br/><br/>OSM ID: { osm } 
     </div>
   </div>)}
      </section>)}
   </Fragment>
 
   )  
   
   )
}
