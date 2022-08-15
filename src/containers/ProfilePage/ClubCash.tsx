import axios from 'axios';
import { Buffer } from "@stacks/common";
import React,  { useState, useEffect, Fragment } from "react";
import ButtonPrimary from 'shared/Button/ButtonPrimary';
import { useConnect } from "@stacks/connect-react";
import WalletIcon from "components/WalletIcon";
import USDWalletIcon from "components/USDWalletIcon";
import CurrencyFormat from 'react-currency-format';
import { userSession } from 'auth.js';
import { StacksMainnet } from '@stacks/network';
import {  NonFungibleConditionCode, createAssetInfo, stringAsciiCV, callReadOnlyFunction, uintCV
        , makeContractNonFungiblePostCondition, makeStandardNonFungiblePostCondition
        , bufferCVFromString, AnchorMode, cvToJSON } from "@stacks/transactions";

import { NFT_HOLDINGS_API, CLUB10K_ASSET, CLUB100K_ASSET, CONTRACT_ADDRESS, LAND_NFT_CONTRACT }  from 'Constants';
 
export default function ClubCash() {

global.Buffer = global.Buffer || Buffer;
const { doContractCall } = useConnect();

let token100K_id = 0;
let token10K_id = 0;
let landlord =' ';
let usdBalance ='???';
let floatUsdBalance = 0.00;

const nftAPI = NFT_HOLDINGS_API;
const theAsset10K = CLUB10K_ASSET;
const theAsset100K = CLUB100K_ASSET;
const network = new StacksMainnet();

var CurrencyFormat = require('react-currency-format');

// get the landlord STX address
if (userSession.isUserSignedIn())
{ 
    landlord = userSession.loadUserData()?.profile?.stxAddress?.mainnet  
}

let nftAPIAddress10K = nftAPI + landlord + '&asset_identifiers=' + theAsset10K;
let nftAPIAddress100K = nftAPI + landlord + '&asset_identifiers=' + theAsset100K;

//do a balance check - read only fn
const getBalance = async () => {
  const contractAddress = CONTRACT_ADDRESS;
  const contractName = LAND_NFT_CONTRACT;
  const functionName = 'get-usd-balance';
  
  const senderAddress = landlord;
  
  const options = {
    contractAddress,
    contractName,
    functionName,
    functionArgs: [],
    network,
    senderAddress,
  };
  
  const result = await callReadOnlyFunction(options);

  usdBalance = cvToJSON(result).value.toString();
  floatUsdBalance = parseFloat(usdBalance, 10);
  console.log('Balance: ', usdBalance);
  
  window.alert("Your latest balance is: " + usdBalance + " USD");
  };

class NftList100K extends React.Component {
    state = {
      nfts: []
    }
    
  // get and list all the clubcash nfts
  componentDidMount() {
    axios.get(nftAPIAddress100K)
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
              { token100K_id = nft.value.repr.substring(1);}             
            )
        }
      </>
    )
  }
  }

  class NftList10K extends React.Component {
    state = {
      nfts: []
    }
    
  // get and list all the clubcash nfts
  componentDidMount() {
    axios.get(nftAPIAddress10K)
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
              { token10K_id = nft.value.repr.substring(1);}             
            )
        }
      </>
    )
  }
  }

  const redeem100K = async () => {
    //contract details
    const contractAddress = CONTRACT_ADDRESS;
    const contractToCall = LAND_NFT_CONTRACT;
    const functionToCall = 'redeem-100K';

    if (token100K_id==0){ 
      window.alert("Alert:You don't have any Club100K Tokens. If you post this tx it will fail!");
   }

    // clarity values for minting 
    const args = [uintCV(token100K_id)];

    // Create an NFT Post-condition
    // With a standard principal
    const postConditionAddress = landlord;
    const postConditionCode = NonFungibleConditionCode.DoesNotOwn;
    const assetAddress = CONTRACT_ADDRESS;
    const assetContractName = 'club-100k';
    const assetName = 'club-100k';
    const tokenAssetName = uintCV(token100K_id);
    const nonFungibleAssetInfo = createAssetInfo(assetAddress, assetContractName, assetName);

    const standardNonFungiblePostCondition = makeStandardNonFungiblePostCondition(
      postConditionAddress,
      postConditionCode,
      nonFungibleAssetInfo,
      tokenAssetName
    );
 
      let postConditions: any[] = [ standardNonFungiblePostCondition ];
      const postConditionMode = 0x02;

      await doContractCall({
        contractAddress,
        stxAddress: landlord,
        contractName: contractToCall,
        functionName: functionToCall,
        functionArgs: args,
        network,
        postConditions,
        postConditionMode,
        onFinish: data => {
          console.log('Club 100K NFT tx submitted - check your explorer', data);
        },
        onCancel: () => {
          window.location.href = '#';
        },
        anchorMode: AnchorMode.Any,
      });
    };

    const redeem10K = async () => {
      //contract details
      const contractAddress = CONTRACT_ADDRESS;
      const contractToCall = LAND_NFT_CONTRACT;
      const functionToCall = 'redeem-10K';
  
      if (token10K_id==0){ 
        window.alert("Alert: You don't have any Club10K Tokens. If you post this tx it will fail!");
     }
  
      // clarity values for minting 
      const args = [uintCV(token10K_id)];
  
      // Create an NFT Post-condition
      // With a standard principal
      const postConditionAddress = landlord;
      const postConditionCode = NonFungibleConditionCode.DoesNotOwn;
      const assetAddress = CONTRACT_ADDRESS;
      const assetContractName = 'club-10k';
      const assetName = 'club-10k';
      const tokenAssetName = uintCV(token10K_id);
      const nonFungibleAssetInfo = createAssetInfo(assetAddress, assetContractName, assetName);
  
      const standardNonFungiblePostCondition = makeStandardNonFungiblePostCondition(
        postConditionAddress,
        postConditionCode,
        nonFungibleAssetInfo,
        tokenAssetName
      );
   
        let postConditions: any[] = [ standardNonFungiblePostCondition ];
        const postConditionMode = 0x02;
  
        await doContractCall({
          contractAddress,
          stxAddress: landlord,
          contractName: contractToCall,
          functionName: functionToCall,
          functionArgs: args,
          network,
          postConditions,
          postConditionMode,
          onFinish: data => {
            console.log('Club 10K NFT tx submitted - check your explorer', data);
          },
          onCancel: () => {
            window.location.href = '#';
          },
          anchorMode: AnchorMode.Any,
        });
      };

  return (
    <>   

    {(landlord ===' ') ? (
      <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <div className="flex-1">
           <span className="mt-4">Please connect your wallet to see your personalized profile page!
           Once you log-in, you will be able to cash your coupons, see your minted properties and access your NFT dashboard. 
           </span>           
          </div>
          </div>
        
    ) : ( <Fragment>
      <div className="mt-4 ">
       <ButtonPrimary onClick={ getBalance }>
       <span className="ml-2.5"><small> Show my Latest Balance </small></span>
       </ButtonPrimary>
       </div>

   <h2 className="inline-flex items-center text-1xl sm:text-2xl lg:text-2xl font-semibold">
            <div className="mt-4">

            <NftList100K/>       
            <NftList10K/>    
              <div>
              <br/>
              <small>** Redeem a Club 100K or 10K NFT Coupon to fill your balance! ** </small><br/>
              <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="flex-1">
                <ButtonPrimary onClick={ redeem100K }>
                <WalletIcon/>
                <span className="ml-2.5">Redeem Club100K</span>
                </ButtonPrimary>
                &nbsp; &nbsp; &nbsp;
                <ButtonPrimary onClick={ redeem10K }>
                <WalletIcon/>
                <span className="ml-2.5">Redeem Club10K</span>
                </ButtonPrimary>
              </div>
              </div>
              </div>

        </div>        
      </h2>  

      </Fragment>
    
    ) }

     </>
  );
};