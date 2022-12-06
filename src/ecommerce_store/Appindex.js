import React, { useEffect, useState ,useContext, createContext} from 'react';
// import logo from './logo.svg';
import '.././cssFolder/App.css';
import Navbar from "../Constent_compenet/Nav_bar";
import Intro from "./Intro";
import Product from "./Product"
import View from "./Related_product"
import Login from "../login_signin/Login.js";
import WelcomeCard from "./WelcomeCard"
import {Productlist} from "./Productlist";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Axios  from 'axios';
import {Footer} from '../Constent_compenet/Footer';

// export const Data = createContext();
function Appindex(){
 var href = window.location.href,
     split = href.split("/"),
     idnum = split[4];
    
    const [data,setData]=useState([]) 
    
    const url=`http://localhost:4500/userid`;
    
    const body = {idnum:idnum};

    useEffect(()=>{
      Axiosfetch()
},[]);

window.addEventListener("load",(e)=>{

  

})

const [countdata, setCountdata] = useState(0)


    const Axiosfetch = ()=>{
      Axios.post(url,body)
       .then((res)=>{
        const data = [...res.data];
         setData(data);
        //  console.log(data);
       })
      //  const axios = require("axios");

      //  const options = {
      //    method: 'GET',
      //    url: 'https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-lookup-product',
      //    params: {url: 'https://www.walmart.com/ip/Media-Remote-for-PlayStation-5/381848762'},
      //    headers: {
      //      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      //      'X-RapidAPI-Host': 'axesso-walmart-data-service.p.rapidapi.com'
      //    }
      //  };
       
      //  axios.request(options).then(function (response) {
      //    console.log(response.data);
      //  }).catch(function (error) {
      //    console.error(error);
      //  });

    }
    //
    
      const finded=(e)=>{
        setCountdata(e);
       } 
            
     useEffect(()=>{
        // console.log(countdata);
     },[countdata])
  
  return (
    <>  
   
   {/* <Data.Provider > */}
        <Navbar name={countdata} tittle={"TINY"} />
        <Intro />
        <WelcomeCard />
        <Product />
        <View/>
        <Productlist getdata={finded} />
        <Footer />
    {/* </Data.Provider> */}
        </>    
    
  

    
    );
}

export default Appindex;
