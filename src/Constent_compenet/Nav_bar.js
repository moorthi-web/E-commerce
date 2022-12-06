import React, { useContext, useEffect, useRef, useState } from "react";
import ".././cssFolder/navbar.css";
import Icons from '.././Assert/Icons.png' ;
// import {value} from '../features/addcartno/counterslice';
// import {useSelector} from 'react-redux';



function Navbar(props){

    // const values = useSelector(state => state.counter.count);
    // console.log(values);
    // const navredux = useSelector(value)
    // console.log(navredux);
    const [sethref,setSettHref] = useState({
        id:""
    })
    useEffect(()=>{
        var location = window.location.href;
        console.log(location);
        var slice = location.split("/"),
        leng = slice.length;
        console.log(leng);
    
        let data = {
            id:slice[leng-1]
        }
        setSettHref(data);
        
       
    },[])  

    // console.log(props);
    const [count,setCount]=useState(0);
    // const numcout = useRef(0)
useEffect(()=>{
    // let number = /[0-9]/g;
    // let value = props.name;
    console.log(props.name);     
         if(props.name){
            setCount(props.name);
            // console.log("undifind");
         }else if(props.name?.counts != null){
            setCount(props.name.counts);
         }else if(props.counts){
            setCount(props.counts);
          
         }
         console.log(props.counts);
      
            
            // console.log(count);
        
        
},[props.name,props.counts]);

const [tittle, setTittle]=useState("");
const [show, setShow]=useState(false);

useEffect(()=>{
console.log(props.tittle);
setTittle(props.tittle);
if(props.tittle === "AUDIO"){
        setShow(true);
}else if(props.tittle === "TINY"){
  setShow(false);
}
},[props.tittle]);


     var href = window.location.href,
     slice = href.split("/"),
     leng =slice.length;
    //  console.log(leng);
    //  console.log(slice[leng-1]);
   const profile = ()=>{
   window.location.href = `/Add_cart/${slice[leng-1]}`
   }

   const Logout=()=>{
    setInterval(()=>{
        window.location.href = '/'
    },500)
   
   }

   const home=()=>{
    window.location.href=`/home/${sethref.id}`;
   }

   var serviceItem = document.querySelector("#servicenav");
 
   const [conted, setConted] = useState(false);

//    const navecontent = ()=>{

//     serviceItem.classList="Show";
    

//    }

    return(
        <div class="main-div">

              <div class="main">
                 <h1 class="hi"><a>{tittle}</a> Basket</h1>
                 <div class="headerOption">
                    <span><button onClick={home}>Home</button></span>
                    <span><button onClick={()=>setConted(!conted)}>Service</button></span>
                    <span><button>Sales</button></span>
                    <span><button>Product</button></span>
                    <span><a class="navcout">{`${count}`}</a><button onClick={profile}>Add_cart</button></span>
                    <span><button onClick={Logout}>Logout</button></span>
                </div>      
                <div id="icon" onmouseenter="hovereffect()">
                {/* <img src= alt="food1" /> */}
                    <img class="iconimg" src={Icons}/>
                    <div id="menu">
                        <ul>
                            <a href="#">Home</a>
                            <a href="#">Service</a>
                            <a href="#product-content">Sales</a>
                            <a href="#product-detail">product</a>
                            <a href="#connect">Contact</a>
                            <a href="#connect">Logout</a>
                        </ul>
                    </div>
                </div>
            </div> 
         {conted && <div id="servicenav" >
               {show? <a href="/">Tiny Basket</a>:<a href="/music">Audio Basket</a>} 
                <a href="">Movie Basket</a>
                <a href="">Grocery Baket</a>
            </div> } 
      </div>
    
    )

};
export default Navbar;