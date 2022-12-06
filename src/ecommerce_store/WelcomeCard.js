import React,{useState, useEffect} from "react";
import '.././cssFolder/welcard.css'
function WelcomeCard(){
    var split = window.location.href.split("/");
    const [slace,setSlace] = useState(`b`);
    
    // console.log(split.length)
    
    var a="../";
    
    for(var i=3;i<split.length-1;i++){
        // console.log(split[i]);
          a = a+"../"
    }

    useEffect(()=>{

        setSlace(a);
    },[a]);
       

//    console.log(slace);
    return(
        <>
            <div class="Welcomecard">
                <div class="cards">
                    <div>
                    <img src={slace + "./Assert/truck-2007.svg"} />
                    <h2>Free Shipping</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et 
ornare elit.</p>
                    </div>
                    
                </div>
                <div class="cards">
                    <div>
                    <img src={slace + "./Assert/credit-card-2015.svg"} />
                    <h2>Safe Shopping</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et 
ornare elit.</p>
                    </div>
                   
                </div>
                <div class="cards">
                    <div>
                    <img src={slace + "./Assert/tax-bag-9267.svg"} />
                    <h2>Free Return</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et 
ornare elit.</p>
                    </div>
                  
                </div>
                
            </div>

        </>
    )

}

export default WelcomeCard;