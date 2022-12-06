import React from "react";
import Mapcard from "./Mapcard.js";
// import img from "./Assert/headset1.png"
import ".././cssFolder/Product.css";


function Productlist(){
    return(
        <>
            <div class="product">
                <div class="heading">
                    <h3>Today's Deals</h3>
                    <span>See All</span>
                </div>
                <div class="cardmain">
                  
                        <Mapcard />
                
                    {/* <Card /> */}
                </div>
            </div>
        </>
    )
}
export default Productlist;