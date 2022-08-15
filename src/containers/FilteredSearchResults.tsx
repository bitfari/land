import React, { Fragment, useState, useEffect } from 'react';

export default function FSResultsApi() { 
let search = window.location.search;
let params = new URLSearchParams(search);
let tags = params.get('tags');
let type = params.get('type');
let low = params.get('low');
let high = params.get('high');

    useEffect(() => {
      
    const getAPI = () => {
        // Digital Land DB API Endpoint
        const API = 'https://api.bitfari.com/f/' + tags + '/' + type + '/' + low + '/' + high; 
       
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


    return (
      <Fragment>
          <main>
              {loading === true ? (
                  <div>
                      <h1>Loading Your Digital Land...</h1>
                  </div>
              ) : (
          <section>
              {apiData.map((catalog) => {

          // Format STX Price accordingly
          let price = String(catalog.usd_price)
          price = price.replace(/\,/g,'');

          let stxPrice = parseFloat(price.substring(1))
          stxPrice = stxPrice/0.58

          // Extract Name from the Tags 
          var theTags = catalog.tags
          var i=0; var j=0;
          var hasName = false;
          var name='';
          var housenumber = false;
          var housetag = '';
          var street = false;
          var streetname = '';

          for(i=0; i < theTags.length; i++){
              if (theTags[i] ==='name') {
                j=i;
                hasName= true; }

                if (theTags[i] ==='addr:housenumber') {
                  housenumber = true; 
                  housetag = theTags[i+1];
                }
                
                if (theTags[i] ==='addr:street') {
                  street = true; 
                  streetname = theTags[i+1];
                }
          }
          
          if (hasName) {
              name = theTags[j+1];
          }

          if (hasName == false){
            if ((housenumber == true) &&  (street == true) )
               var name = housetag + ' ' +  streetname;
          }
      

          return (
            
            <Fragment>     
            
              <div className="space-x-100">
              {/* ---------- 1 ----------  */}
              <div>
                <div className="text-1xl sm:text-1xl lg:text-2xl font-semibold">
                <a href={'/nft-detail?type=way&id=' + catalog.id }>{name}</a>
                </div>
                {/* ---------- 4 ----------  */}
                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
                  <div>
                    <span className="ml-2.5 text-neutral-500 dark:text-neutral-400 flex flex-col">
                      <span className="text-sm">OSM ID#</span>
                      <span className="text-neutral-900 dark:text-neutral-200 font-medium flex items-center">
                        <span><b><a href={'/nft-detail?type=way&id=' + catalog.id }>{catalog.id.toString()}</a></b></span>
                      </span>
                    </span>
                  </div>

                  <div>
                    <span className="ml-2.5 text-neutral-500 dark:text-neutral-400 flex flex-col">
                      <span className="text-sm">Collection</span>
                      <span className="text-neutral-900 dark:text-neutral-200 font-medium flex items-center">
                        <span>           
                            {(catalog.collection_id===1) ? (<b> Wonders of the World </b>) : (" ")}
                            {(catalog.collection_id===2) ? (<b> Famous Monuments </b>) : (" ")}
                            {(catalog.collection_id===3) ? (<b> Entire Islands </b>) : (" ")}
                            {(catalog.collection_id===4) ? (<b> Famous Buildings </b>) : (" ")}
                            {(catalog.collection_id===5) ? (<b> Famous Stadiums </b>) : (" ")}
                            {(catalog.collection_id===6) ? (<b> Famous Universities </b>) : (" ")}
                            {(catalog.collection_id===7) ? (<b> Entire Cities </b>) : (" ")}
                            {(catalog.collection_id===8) ? (<b> Epic Areas </b>) : (" ")}
                            {(catalog.collection_id===9) ? (<b> Entire Countries </b>) : (" ")}
                            {(catalog.collection_id===10) ? (<b> General Collection </b>) : (" ")}
                        </span>
                    </span>
                    </span>
                  </div>
                </div>
              </div>
              </div>
              <br/>
              <hr/>
              </Fragment>
                  );
                  })}
                  </section>
                  )}
                  </main>
              </Fragment>
              );
};
