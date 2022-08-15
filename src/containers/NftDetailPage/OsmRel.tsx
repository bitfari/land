import React, { Fragment, useState, useEffect } from 'react';
import VerifyIcon from "components/VerifyIcon";
import Badge from "shared/Badge/Badge";
import { Helmet } from "react-helmet";
import Mint from './mint-helper';
import Owner from './Ownership';
import { userSession } from "../../auth";
import { CRSD, API_ROOT }  from 'Constants';
import alertImg from "images/alert-icon.png";
 
export default function OsmRelApi(props) { 

let ownership = ' ';

useEffect(() => {
    const getAPI = () => {
        // Digital Land DB API Endpoint  
        const API = API_ROOT + 'catalogrel/' + props.toString();
        fetch(API)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setLoading(false);
                setApiData(data);
            });
    };
  
    getAPI();
 
    }, []);
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);


function errMsg(){

   if (!apiData.length){
    return (
      
      <Fragment>
        <div>
        <center><img src={alertImg} width ='425' height ='425'/></center><br/>
        <span className="text-neutral-900 dark:text-neutral-400 font-medium flex items-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold"> 
        The Property You Search For Can Be Minted Later but not Today.
        </h2> 
        <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold"> 
        Available Properties are in North America (USA, Mexico and Canada).
        </h3> 
        <br/><br/>   
        </span>    
        </div>
        <br/><br/>
        <p>Either the property you requested is outside of North America or the id is invalid.
        Please go back to Open Street Map, zoom out and check the country where this property
        is listed. Thank you!</p>
        <br/>
        <p>We upload new properties every month so check back soon. And good luck next time! </p>
      </Fragment>
    )
   }
  }


    return (
        <Fragment>
            <main>
                {loading === true ? (
                    <div>
                        <h1>Loading Your Digital Land...</h1>
                    </div>
                ) : (
    <section>
    {errMsg()}
    {apiData.map((catalog) => { 
    // Format Description accordingly
    let descSwitch = "No description available."
    if (catalog.description){
        descSwitch = String(catalog.description)
        }  

     // Format STX Price accordingly
     let price = String(catalog.usd_price)
     price = price.replace(/,/g,'');

     let stxPrice = parseFloat(price.substring(1))
     stxPrice = stxPrice/CRSD

     // Extract Name from the Tags 
     var theTags = catalog.tags
     var i=0; var j=0;
     var hasName = false;
     var name='';

     for(i=0; i < theTags.length; i++){
         if (theTags[i] === 'name') {
           j=i;
           hasName= true; }
     }
    
    if (hasName) {
        name = theTags[j+1];
    }

    // Extract Wikipedia Links 
    i=0; j=0;
    var hasWikipedia = false;
    var wikipedia='';

    for(i=0; i < theTags.length; i++){
        if (theTags[i] === 'wikipedia') {
          j=i;
          hasWikipedia= true; }
    }
   
   if (hasWikipedia) {
      wikipedia = theTags[j+1];
   }

    // Extract Wikidata Links 
    i=0; j=0;
    var hasWikidata = false;
    var wikidata='';
   
    for(i=0; i < theTags.length; i++){
       if (theTags[i] === 'wikidata') {
       j=i;
       hasWikidata= true; }
      }
      
    if (hasWikidata) {
      wikidata = theTags[j+1];
    }

    // Extract Tags 
    i=0; j=0;
    var tourism = false;
    var attraction = false;
    var office = false;
    var monument = false;
    var statue = false;
    var landmark = false;
    var historic = false;
    var highway = false;
    var brand = false;
    var residential = false;
    var natural = false;
    var amenity = false;
    var building = false;
    var water = false;
    var forest = false;
    var leisure = false;
    var sport = false;
    var bridge = false;
    var retail = false;
    var shop = false;
    var convenience = false;
    var farmland = false;
    
    for(i=0; i < theTags.length; i++){
        if (theTags[i] ==='tourism') tourism = true; 
        if (theTags[i] ==='attraction') attraction = true; 
        if (theTags[i] ==='office') office = true; 
        if (theTags[i] ==='monument') monument = true; 
        if (theTags[i] ==='statue') statue = true; 
        if (theTags[i] ==='landmark') landmark = true; 
        if (theTags[i] ==='historic') historic = true; 
        if (theTags[i] ==='highway') highway = true; 
        if (theTags[i] ==='brand') brand = true; 
        if (theTags[i] ==='residential') residential = true; 
        if (theTags[i] ==='natural') natural = true; 
        if (theTags[i] ==='amenity') amenity = true; 
        if (theTags[i] ==='building') building = true; 
        if (theTags[i] ==='water') water = true; 
        if (theTags[i] ==='forest') forest = true; 
        if (theTags[i] ==='leisure') leisure = true; 
        if (theTags[i] ==='sport') sport = true; 
        if (theTags[i] ==='bridge') bridge = true; 
        if (theTags[i] ==='retail ') retail  = true; 
        if (theTags[i] ==='shop') shop = true; 
        if (theTags[i] ==='convenience') convenience = true; 
        if (theTags[i] ==='farmland') farmland = true; 
    }

    return (
      <Fragment>  

      <Helmet>
        <title>DL: {name} | OSM {catalog.id.toString()} | Digital Land</title>
      </Helmet>
  
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
        {/* ---------- 1 ----------  */}
        <div className="pb-9 space-y-5">
          <div className="flex justify-between items-center">
            <Badge name="Digital Land NFT" color="green" />
          </div>
    
          <a href={'https://www.openstreetmap.org/relation/' + catalog.id.toString()}> 
          <h3 className="text-1xl sm:text-1l lg:text-2l font-semibold"> 
          Bitfari Virtual Billboard Spanning Over
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold"> 
          {name} 
          </h2>
          </a>
          <span className="text-sm">{wikidata}</span> 
          &nbsp;<span className="text-sm">osm.btc</span> . <span className="text-sm">geofence.btc</span> . <span className="text-sm">panorama.btc</span>         
          {/* ---------- 4 ----------  */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
            <div className="flex items-center ">
              <span className="ml-2.5 text-neutral-500 dark:text-neutral-400 flex flex-col">
                <span className="text-sm">OSM REL#</span>
                <span className="text-neutral-900 dark:text-neutral-200 font-medium flex items-center">
                  <span><b><a href={'https://www.openstreetmap.org/relation/' + catalog.id.toString()}>{catalog.id.toString()}</a></b></span>
                  <VerifyIcon iconClass="w-4 h-4" />
                </span>
              </span>
            </div>
            <div className="hidden sm:block h-6 border-l border-neutral-200 dark:border-neutral-700"></div>
            <div className="flex items-center">
              <span className="ml-2.5 text-neutral-500 dark:text-neutral-400 flex flex-col">
                <span className="text-sm">Collection</span>
                <span className="text-neutral-900 dark:text-neutral-200 font-medium flex items-center">
                  <span>           
                      {(catalog.collection_id===1) ? (<b> Wonders of the World </b>) : (" ")}
                      {(catalog.collection_id===2) ? (<b> Famous Monuments </b>) : (" ")}
                      {(catalog.collection_id===3) ? (<b> Islands </b>) : (" ")}
                      {(catalog.collection_id===4) ? (<b> Famous Buildings </b>) : (" ")}
                      {(catalog.collection_id===5) ? (<b> Famous Stadiums </b>) : (" ")}
                      {(catalog.collection_id===6) ? (<b> Famous Universities </b>) : (" ")}
                      {(catalog.collection_id===7) ? (<b> Cities </b>) : (" ")}
                      {(catalog.collection_id===8) ? (<b> Epic Areas </b>) : (" ")}
                      {(catalog.collection_id===9) ? (<b> Countries </b>) : (" ")}
                      {(catalog.collection_id===10) ? (<b> General Collection </b>) : (" ")}
                      {(catalog.collection_id===0) ? (<b> General Collection </b>) : (" ")}
                  </span>

                  <VerifyIcon iconClass="w-4 h-4" />
                </span>
              </span>
            </div>
          </div>
        </div>
        </div>
        
        <div><strong><a href={'https://www.openstreetmap.org/relation/' + catalog.id.toString()} 
        target='_blank'>Click Here and See the Area Highlighted on a Map!</a></strong></div>

        {/* ---------- 7 ----------  */}
        {/* PRICE */}
        <div className="pb-9 pt-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
            <div className="flex-1 flex flex-col sm:flex-row items-baseline p-6 border-2 border-green-500 rounded-xl relative">
              <span className="absolute bottom-full translate-y-1 py-1 px-1.5 bg-white dark:bg-neutral-900 text-sm text-neutral-500 dark:text-neutral-400">
                Mint it now for
              </span>
              <span className="text-3xl xl:text-4xl font-semibold text-green-500"> 
                { stxPrice.toFixed(2)} STX
              </span>
              <span className="text-lg text-neutral-400 sm:ml-5">
                ( ≈ USD {(catalog.usd_price)})
              </span>
            </div>
            <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-5 mt-2 sm:mt-0 sm:ml-10">
             {"[Unique]"}
            </span>
          </div>

          {(!userSession.isUserSignedIn()) ? 
                      ( ' ' ) : (<>
                        <br/>
                        <Owner/> 
                        </>)}

        {/* ---------- Mint Buttons ---------  */}
     
        <span className="text-neutral-900 dark:text-ne  utral-200 font-medium flex items-center">
                  <span>           
                      {(userSession.isUserSignedIn()) ? 
                      ( Mint([catalog.usd_price, catalog.collection_id]) ) : (<>
                        <br/>
                        <b>===== Attention: Please Connect Your STX Wallet to Mint! =====</b>
                        </>)}
                  </span>
        </span>
            

        </div>
        {/* ---------- 9 ----------  */}
        <hr/>  
        <h2><b>Description</b></h2>
        <hr/> 

        <div className="pt-9">
          { catalog.description }
        <div>   
        <i><b>==== About the Digital Land ====</b></i> <br/>
        The Digital Land is the collection of Bitfari virtual screens. Virtual screens 
        are used as placeholders for AR-style billboards, reachable thru, smart phones, computers,
        smart glasses or augmented reality windshields connected to the Bitfari network. The digital land 
        is a new Internet, the Internet of Places. <br/> <br/>

        <i><b>==== dNFT Functionality ====</b></i> <br/>
        You're minting a dynamic NFT! You can later change photos, plus distribute ads, content and apps. Earn commissions 
        on ad and content distribution, broadcast ads in your location for free and join several digital landlord clubs! 
        Additionally, you can resell, transfer or auction your property here or in any Stacks NFT marketplace!
          <br/><br/>
        </div>
             
        <hr/>
        <h2><b>Tags</b></h2>
        <hr/> 

    <div>
      {tourism ? (<b> tourism <br/></b>) : (" ")}
      {attraction ? (<b> attraction <br/></b>) : (" ")}
      {monument ? (<b> monument <br/></b>) : (" ")}
      {office ? (<b> office <br/></b>) : (" ")}
      {historic ? (<b> historic <br/></b>) : (" ")}
      {landmark ? (<b> landmark <br/></b>) : (" ")}
      {statue ? (<b> statue <br/></b>) : (" ")}
      {highway ? (<b> highway <br/></b>) : (" ")}
      {brand ? (<b> brand <br/></b>) : (" ")}
      {residential ? (<b> residential <br/></b>) : (" ")}
      {natural ? (<b> natural <br/></b>) : (" ")}
      {amenity ? (<b> amenity <br/></b>) : (" ")}
      {building ? (<b> building <br/></b>) : (" ")}
      {water ? (<b> water <br/></b>) : (" ")}
      {forest ? (<b> forest <br/></b>) : (" ")}
      {leisure ? (<b> leisure <br/></b>) : (" ")}
      {sport ? (<b> sport <br/></b>) : (" ")}
      {bridge ? (<b> bridge <br/></b>) : (" ")}
      {retail ? (<b> retail <br/></b>) : (" ")}
      {shop ? (<b> shop <br/></b>) : (" ")}
      {convenience ? (<b> convenience <br/></b>) : (" ")}
      {farmland ? (<b> farmland <br/></b>) : (" ")}
    </div>
    <br/>

  <div>
    { wikipedia ? (<small><b> Wikipedia </b> </small>) : (" ")} <br/>
     <a href={'https://en.wikipedia.org/wiki/' + wikipedia} target="_blank" rel="noreferrer">{wikipedia}</a>
     </div>
    <br/>
 
     <div>
     { wikidata ? (<small><b> Wikidata </b> </small>) : (" ")} <br/>
     <a href={'https://www.wikidata.org/wiki/' + wikidata} target="_blank" rel="noreferrer">{wikidata}</a>
     </div>
        <br/><br/><hr/>
        <h2><b>Foot Traffic</b></h2>
        <hr/> 
        {String(catalog.traffic)}
        </div>

        </Fragment>
            );
            })}
            </section>
            )}
            </main>
        </Fragment>
        );
};