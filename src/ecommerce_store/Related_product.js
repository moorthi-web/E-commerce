import React from "react"
import ".././cssFolder/Related_product.css"
import array from "./Mapcard"
import {Ret} from "./Mapcard";
import {Mapcard2} from "./Mapcard";

function relprod(){
 
//     var m = Ret();
//             var j=JSON.parse(m)
//     console.log(j);


return(

    
        <div class="prod_view">
            <h2>Recommended</h2>
                <div class="view" >
                  <Mapcard2/>
                </div>
        </div>

)

}
export default relprod;