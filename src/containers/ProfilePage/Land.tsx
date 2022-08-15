import Osm from "./Osm";
import axios from 'axios';
import React,  { Fragment, useState, useEffect } from "react";
import { Buffer } from "@stacks/common";
import { userSession } from 'auth.js';
import { LAND_ASSET } from 'Constants';


export default function Land() {

global.Buffer = global.Buffer || Buffer;

let landlord = ' ';
const landAPI = 'https://stacks-node-api.mainnet.stacks.co/extended/v1/tokens/nft/holdings?principal=';
const theAsset = LAND_ASSET;

// get the landlord STX address
if (userSession.isUserSignedIn())
  { landlord = userSession.loadUserData()?.profile?.stxAddress?.mainnet }
let nftAPIAddress = landAPI + landlord + '&limit=200&asset_identifiers=' + theAsset;

  class NftList extends React.Component {
    state = {
      nfts: []
    }
    
  // get and list all the clubcash nfts
  componentDidMount() {
    axios.get(nftAPIAddress)
      .then(res => {
        const nfts = res.data.results;
        this.setState({ nfts });
      })
  }

  render() {
    return (
      <>
        {
          this.state.nfts
            .map(nft =>
              { return (
                <>
                <a style={{color:"blue"}} href={'/dash?tid=' + nft.value.repr.substring(1)}>==- DL: Token ID {nft.value.repr.substring(1)} -==</a><br/>
                </>
                );}             
            )
        }
      </>
    )
  }
  }

  return (
    <>   
    {(landlord ===' ') ? (
      <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <div className="flex-1">
           <span className="mt-4">Please connect your wallet to see your digital land portfolio!</span>           
          </div>
          </div>
        
    ) : ( <Fragment>
      
            <div className="mt-4">
            <h2><b>Click a property ID to see all the details</b></h2><br/><hr/>
            <NftList/>    
            <hr/>             
            </div>        
  
      </Fragment>
    ) }
     </>
  );
}
 