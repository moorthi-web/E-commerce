import React from "react";
import appleimg from '.././Assert/Untitled-1.png';
import introimg from '.././Assert/intro-img.jpg';
import ".././cssFolder/intro.css";
function Intro(){
    return(


        <>
        <div class="intro">
         
                       <h1 class="quotes1">Fashion Up Your Look</h1>        
                        <a class="quotes2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, enim ac faucibus pulvinar, est.</a>   
                        <img class="imgintro" src={introimg}/>  
        </div>
</>

    )
}
export default Intro;