import React from "react";
import { userSession } from 'auth.js';
import ButtonPrimary from 'shared/Button/ButtonPrimary';
import { useConnect } from "@stacks/connect-react";
import WalletIcon from "components/WalletIcon";
import USDWalletIcon from "components/USDWalletIcon";
import FARIWalletIcon from "components/FARIWalletIcon";

import { standardPrincipalCV, uintCV, stringAsciiCV,makeStandardSTXPostCondition
       , AnchorMode, FungibleConditionCode, createAssetInfo, makeStandardFungiblePostCondition }
        from '@stacks/transactions';

import { StacksMainnet } from '@stacks/network';

import { DL_NFT_ROOT, FEES, USD_PRICE, CRSD, CRFD, CONTRACT_ADDRESS, LAND_NFT_CONTRACT
        , FARI_TOKEN_ADDR, FARI_TOKEN_CONTRACT, FARI_TOKEN_ASSET_NAME } from 'Constants';
 
export default function Mint(props: Array<Int16Array>) {

  const { doContractCall } = useConnect();
  const network = new StacksMainnet();

  // querystring vars
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let osm_id = params.get('id');
  let type = params.get('type');
  let usd_price =  parseInt(props.at(0)?.toString().substring(1).replace(',','').replace('.00',''));
  let fees = FEES;

  if (usd_price === 0){
    usd_price = USD_PRICE; // default price
  }

  console.log('USD Price: ' + usd_price.toString());


  let collection_id = props.at(1);
  
  const stx_price = parseInt(usd_price/CRSD) * 1000000 ;
  const fari_price = parseInt(usd_price * 100000000/(2 * CRFD)) // Fari txs get a 50%  discount;
  const json = DL_NFT_ROOT + type + '/' + osm_id.toString() + '/';
  let landlord = userSession.loadUserData()?.profile?.stxAddress?.mainnet;
  let owner = ' ';
  
  const mintWithBalance = async () => {
    //contract details
    const contractAddress = CONTRACT_ADDRESS;
    const contractToCall = LAND_NFT_CONTRACT;
    const functionToCall = 'club-mint';

  // clarity values for minting 
  const args = [uintCV(osm_id), stringAsciiCV(type), standardPrincipalCV(landlord), stringAsciiCV(json)
                , stringAsciiCV(json + 'geo/'), stringAsciiCV(json + 'poly/' )
                , stringAsciiCV(json + 'cover/'), stringAsciiCV(json + 'dash/')
                , standardPrincipalCV(landlord), stringAsciiCV('none'), stringAsciiCV(json + 'direct/')
                , stringAsciiCV(json + 'apps/' ), stringAsciiCV(json + 'fari/')
                , stringAsciiCV(json + 'gov/' ), stringAsciiCV(json + 'mil/')
                , stringAsciiCV(json + 'pol/' ), stringAsciiCV(json + 'official/')
                , stringAsciiCV(json + 'channels'), stringAsciiCV(json + 'content/')
                , stringAsciiCV(json + 'itinerary/' ), stringAsciiCV(json + 'search/')
                , stringAsciiCV(json + 'web2/'  ), stringAsciiCV(json + 'social/' )
                , stringAsciiCV(json + 'stats/' ) //digital land nfts bundle all domain extensions in one geolocation
                  ];
  
  let postConditions: any[] = [];
  const postConditionMode = 0x02;
  
    postConditions = [
      makeStandardSTXPostCondition(landlord || '', FungibleConditionCode.Equal, fees),
    ];
   
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
        console.log('Club Mint tx submitted - check your explorer', data);
      },
      onCancel: () => {
        window.location.href = '#';
      },
      anchorMode: AnchorMode.Any,
    });
  };
 
  const mintWithSTX = async () => {
    //contract details
    const contractAddress = CONTRACT_ADDRESS;
    const contractToCall = LAND_NFT_CONTRACT;
    const functionToCall = 'stx-mint';

    // clarity values for minting 
    const args = [uintCV(osm_id), stringAsciiCV(type), standardPrincipalCV(landlord), uintCV(stx_price), stringAsciiCV(json)             
                                , stringAsciiCV(json + 'geo/'), stringAsciiCV(json + 'poly/' )
                                , stringAsciiCV(json + 'cover/'), stringAsciiCV(json + 'dash/')
                                , standardPrincipalCV(landlord), stringAsciiCV('none'), stringAsciiCV(json + 'direct/')
                                , stringAsciiCV(json + 'apps/' ), stringAsciiCV(json + 'fari/')
                                , stringAsciiCV(json + 'gov/' ), stringAsciiCV(json + 'mil/')
                                , stringAsciiCV(json + 'pol/' ), stringAsciiCV(json + 'official/')
                                , stringAsciiCV(json + 'channels'), stringAsciiCV(json + 'content/')
                                , stringAsciiCV(json + 'itinerary/' ), stringAsciiCV(json + 'search/')
                                , stringAsciiCV(json + 'web2/'  ), stringAsciiCV(json + 'social/' )
                                , stringAsciiCV(json + 'stats/' ) //digital land nfts bundle all domain extensions in one geolocation
                                  ];
              
    let postConditions: any[] = [];
    const postConditionMode = 0x02;
    
      postConditions = [
        makeStandardSTXPostCondition(landlord || '', FungibleConditionCode.Equal, stx_price),
      ];
     
      await doContractCall({
        contractAddress,
        stxAddress: landlord,
        contractName: contractToCall,
        functionName: functionToCall,
        functionArgs: args,
        validateWithAbi: true,
        network,
        postConditions,
        postConditionMode,
        onFinish: data => {
          console.log('Mint tx submitted - check your explorer', data);     
        },
        onCancel: () => {
          window.location.href = '#';
        },
        anchorMode: AnchorMode.Any,
      });
    };

    const mintWithFari = async () => {
      //contract details
      const contractAddress = CONTRACT_ADDRESS;
      const contractToCall = LAND_NFT_CONTRACT;
      const functionToCall = 'fari-mint';
  
      // clarity values for minting 
      const args = [uintCV(osm_id), stringAsciiCV(type), standardPrincipalCV(landlord), uintCV(fari_price), stringAsciiCV(json)
                                  , stringAsciiCV(json + 'geo/'), stringAsciiCV(json + 'poly/' )
                                  , stringAsciiCV(json + 'cover/'), stringAsciiCV(json + 'dash/')
                                  , standardPrincipalCV(landlord), stringAsciiCV('none'), stringAsciiCV(json + 'direct/')
                                  , stringAsciiCV(json + 'apps/' ), stringAsciiCV(json + 'fari/')
                                  , stringAsciiCV(json + 'gov/' ), stringAsciiCV(json + 'mil/')
                                  , stringAsciiCV(json + 'pol/' ), stringAsciiCV(json + 'official/')
                                  , stringAsciiCV(json + 'channels'), stringAsciiCV(json + 'content/')
                                  , stringAsciiCV(json + 'itinerary/' ), stringAsciiCV(json + 'search/')
                                  , stringAsciiCV(json + 'web2/'  ), stringAsciiCV(json + 'social/' )
                                  , stringAsciiCV(json + 'stats/' ) //digital land nfts bundle all domain extensions in one geolocation
                                    ];

      let postConditions: any[] = [];
      const postConditionMode = 0x02;

      // With a standard principal
      const postConditionAddress = landlord;
      const postConditionCode = FungibleConditionCode.GreaterEqual;
      const postConditionAmount = fari_price; 
      const assetAddress = FARI_TOKEN_ADDR;
      const assetContractName = FARI_TOKEN_CONTRACT;
      const fungibleAssetInfo = createAssetInfo(assetAddress, assetContractName, FARI_TOKEN_ASSET_NAME);

      const standardFungiblePostCondition = makeStandardFungiblePostCondition(
        postConditionAddress,
        postConditionCode,
        postConditionAmount,
        fungibleAssetInfo
      );

        postConditions = [ standardFungiblePostCondition ];

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
            console.log('Mint tx submitted - check your explorer', data);     
          },
          onCancel: () => {
            window.location.href = '#';
          },
          anchorMode: AnchorMode.Any,
        });
      };


      const mintNominal = async () => {
        //contract details
        const contractAddress = CONTRACT_ADDRESS;
        const contractToCall = LAND_NFT_CONTRACT;
        const functionToCall = 'fari-nominal-mint';
    
        // clarity values for minting 
        const args = [uintCV(osm_id), stringAsciiCV(type), standardPrincipalCV(landlord), uintCV(fari_price), stringAsciiCV(json)
                    , stringAsciiCV(json + 'geo/'), stringAsciiCV(json + 'poly/' )
                    , stringAsciiCV(json + 'cover/'), stringAsciiCV(json + 'dash/')
                    , standardPrincipalCV(landlord), stringAsciiCV('none'), stringAsciiCV(json + 'direct/')
                    , stringAsciiCV(json + 'apps/' ), stringAsciiCV(json + 'fari/')
                    , stringAsciiCV(json + 'gov/' ), stringAsciiCV(json + 'mil/')
                    , stringAsciiCV(json + 'pol/' ), stringAsciiCV(json + 'official/')
                    , stringAsciiCV(json + 'channels'), stringAsciiCV(json + 'content/')
                    , stringAsciiCV(json + 'itinerary/' ), stringAsciiCV(json + 'search/')
                    , stringAsciiCV(json + 'web2/'  ), stringAsciiCV(json + 'social/' )
                    , stringAsciiCV(json + 'stats/' ) //digital land nfts bundle all domain extensions in one geolocation
                      ];
                  
        let postConditions: any[] = [];
        const postConditionMode = 0x01;
  
        // With a standard principal
        const postConditionAddress = landlord;
        const postConditionCode = FungibleConditionCode.GreaterEqual;
        const postConditionAmount = fari_price; 
        const assetAddress = FARI_TOKEN_ADDR;
        const assetContractName = FARI_TOKEN_CONTRACT;
        const fungibleAssetInfo = createAssetInfo(assetAddress, assetContractName, FARI_TOKEN_ASSET_NAME);
  
        const standardFungiblePostCondition = makeStandardFungiblePostCondition(
          postConditionAddress,
          postConditionCode,
          postConditionAmount,
          fungibleAssetInfo
        );
  
          postConditions = [ standardFungiblePostCondition ];
  
           await doContractCall({
            contractAddress,
            stxAddress: landlord,
            contractName: contractToCall,
            functionName: functionToCall,
            functionArgs: args,
            network,
            //postConditions,
            postConditionMode,
            onFinish: data => {
              console.log('Mint tx submitted - check your explorer', data);     
            },
            onCancel: () => {
              window.location.href = '#';
            },
            anchorMode: AnchorMode.Any,
          });
        };


   if (owner ===' ' && !(osm_id==='0')){
    return (
      <>
    <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">

       <div className="flex-2">
        <ButtonPrimary onClick={ mintWithSTX } >
         <WalletIcon/>
         <span className="ml-1.5"><small>Mint-STX</small></span>
         </ButtonPrimary>
       </div>

       <div className="flex-2">
        <ButtonPrimary onClick={ mintWithFari }>
         <FARIWalletIcon/>
         <span className="ml-2"><small>Mint-FARI</small></span>
         </ButtonPrimary>
       </div>

    </div>

    {((collection_id === 10) || (collection_id === 0)) ? (
 
    <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
        <div className="flex-1">
             <ButtonPrimary onClick={ mintWithBalance }>
             <USDWalletIcon/>
              <span className="ml-2.5">Mint with Club Balance</span>
              </ButtonPrimary>
        </div>
    </div>
) : (" ")}

    </>
  );

} else {

  return (
    <>
  <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
     <div className="flex-1">
      Property already minted. The owner of this digital land is { owner }
     </div>
   </div>
  </>
);

}

};