import React ,{useMemo}from "react";

// import { GoogleMap, useLoadScript } from "@react-google-maps/api";
// import {Loader} from '@googlemaps/js-api-loader'; 


// const loader = new Loader({
//     apiKey:process.env.REACT_APP_GOOGLE_KEY,
//     version:"weekly",
    
// });


// loader.load().then((res)=>{new res.maps.Map(document.getElementById("map"),{
// center:{lat:-34.397, lng:150.644},
// Zoom:8
// })});
//  map = new google.maps.Map(document.getElementById("map"),{
//         center:{lat: -34.397, lng: 150.644},
//         zoom:8,
//     });
// });

export function Map(){



console.log(process.env.REACT_APP_GOOGLE_KEY)


return(
    <>
    <div id="map" style={{width:"100%",height:"100%"}}></div>
    </>
)

}

