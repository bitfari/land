import React, { Fragment, useState, useEffect } from 'react';
import NcImage from "shared/NcImage/NcImage";
import { API_ROOT }  from 'Constants';

export default function PhotoNodeApi(props) { 
    useEffect(() => {
    const getAPI = () => {
        // Digital Land DB API Endpoint  
        const API = API_ROOT + 'catalogpoint/' + props.toString();
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
                        <h1>Loading Digital Land Photo...</h1>
                    </div>
                ) : (
            <section>
                {apiData.map((catalog) => {
 
            return (
            <Fragment>  
            
              <div>
                <NcImage
                src={String(catalog.photo)}
                containerClassName="aspect-w-11 aspect-h-12 rounded-3xl overflow-hidden"
              />
              </div>
              <br/>
            </Fragment>
                    );
                    })}
                    </section>
                    )}
                    </main>
                </Fragment>
                );
};
 