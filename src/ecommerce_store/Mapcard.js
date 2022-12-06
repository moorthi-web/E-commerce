import React, { Component, useEffect, useState } from "react";
// import Card from "./Cardview";
import Product from "../jsonFolder/Product.json"
import dis from "../jsonFolder/product_list.json";


let k;
var a = 0, arr = [], index = [], array = [], place = [], co = [], newprod = [];
Product.map((e) => {
    var name = e.name
    // console.log(name);
    a = a + 1;

})
for (var i = 0; i < Product.length; i++) {

    arr.push(Product[i].name);

    index.push(arr.indexOf(Product[i].name));
    // arr[i]?arr[i].push(name):arr[i]=[name];



}

index.map((e) => {
    var pr = Product[e].name;
    array[e] ? array[e] = pr : array[e] = pr;
});
// console.log(array)


for (var g = 0; g < 6; g++) {
    if (array[g]) {
        // console.log("product" + " " + array[g]);
        // console.log(g);
        // newprod.push(g)

       
            place.push(g);

        

    }

}

// console.log(place);

// console.log(arr.length);

array.map((e) => {
    if (e) {
        // console.log(e);

    }

})


export function Ret(a) {
    console.log(a)
    return a;
}
// console.log(a);
// console.log(index);
// console.log(array.keys);
// console.log(array);
// console.log(a);
// console.log(arr);
// console.log(a);





function Mapcard() {
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



var cardlen=0;

    return (

        <>{
            place.map(e => {
                return (<div class="cardsTime">

                    <div class={`card${cardlen = cardlen+1}  card`} >
                        <img  src={slace+Product[e].img} />
                        {/* <h4>{Product[e].name}</h4> */}
                        <h5>UPTO-{Product[e].dis}% Off</h5>
                        {/* <button >Next</button>
                            <button >Pre</button> */}

                    </div>
                </div>)
            }
            )
        }
        </>

    )

}


// console.log(k);

Product.map((e) => {
    if (e.name === "headset") {
        if (co.length < 3) {
            co.push(e);
        }
    }
})
// console.log(co);
// console.log(newprod);
export function Mapcard2() {

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
       
    const Bynow =(e)=>{
        e.preventDefault()
        console.log()
    } 

    const AddtoCart = (e)=>{
        e.preventDefault()
    }

//    console.log(slace);

var data = {}
    return (
        <>
            {co.map((e) => {


                if (e.name === "headset") {



                    return (
                        <div class="recommend">
                            <img src={slace+e.img} />
                            <span class="recspan">
                            <a>{e.name}</a>
                            <a>{e.brand} {e.name}</a>
                            <span class="recspan2"><b><a>${" "+e.price}</a></b></span>
                            <div class="button">
                            <button id="button1" onClick={(e)=>{
                                data = e;
                                console.log(data);
                                Bynow(e)
                                
                                }}>Buy Now</button>
                            <button id="button2" onClick={(e)=>AddtoCart(e)}>Add to Cart</button>
                            </div>
                            </span>
                        </div>
                    )
                }


            })}


        </>
    )
}

export default Mapcard;