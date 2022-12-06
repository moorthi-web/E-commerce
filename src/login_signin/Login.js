import Axios  from 'axios';
import { data } from 'jquery';
import React, {useState,useEffect, Component} from 'react';
import '.././cssFolder/login.css'
import App from "../ecommerce_store/Appindex";

import {jsx , css } from '@emotion/react';
function Login() {
    Axios.get("http://192.168.5.22:3000/api/test").then((e)=>{
        console.log(e)
    })
    
       
    
    var split = window.location.href.split("/");
    const [slace,setSlace] = useState(`b`);
    
    console.log(split.length)
    
    var a="../";
    
    for(var i=3;i<split.length-1;i++){
        console.log(split[i]);
          a = a+"../"
    }

    useEffect(()=>{

        setSlace(a);
    },[a]);
       

   console.log(slace);




const [Value,setValue]=useState({
       
        email:"",
        password:""
    });
    const[rec,setRec]=useState([]);
    const[res,setRes]=useState({
        message:""
    });
    
  
    function button(e){
        var spin = document.querySelector(".spin"),
        email= document.querySelector("#email");
        
       

        const url=`http://192.168.5.47:4500/signin`
        
        e.preventDefault();
        console.log(e.target[0].value);
        
        const data={
            email:Value.email,
            password:Value.password
        }
        console.log(data);
        
        if(Value.email!='' && Value.password!=''){
      
        Axios.post(url, data)
        .then((res)=>{
           
            if(res.data[1].message === "password is correct"){
                const data = {message:res.data[1].message};
                setRes(data); 
                console.log(res.data[0]);
                console.log(data);
                setRec(res.data[0]);
                spin.classList = "blockspin";
                    setInterval(()=>{
                        window.location.href=`/home/${res.data[0].idnum}`;
                        spin.classList = "spin";
                        email.value="";
                    },1000);
          
 
            }else{
                const data = {message : res.data};
                setRes(data);
                console.log(data);
                console.log(res.data);
                var password = document.querySelector("#password");
                password.className='password';
                    alert(res.data);
            
            } 
            
            // if(res.data[1]==="password is correct"){
            //     // setInterval(()=>{
            //     //     window.location.href="/home";
            //     // },1000);
                
            // }else if(res.data==="email is not registered"){
                   
            // }
        })      }else{
          
            var email = document.querySelector('#email')
            console.log(email);
            email.className='Email'
           
        }
     
        // Axios.post(url,data)
        // .then(res=>{
        //    if(res.data==="Your have successfully registered"){
        //     setRes("Your have successfully registered");
        //    setInterval(()=>{
        //     window.location.href="./home";
        //    },1000)
           
        //    }else{
        //     setRes("Email has already taken")
        // } 
           
        // }).catch(err => console.log(err));

        // console.log(data);

    
    
    }

//     const name ="ABADABAD";
//     let add =0;
//     for(var i=name.length; i >= 0 ; i--){
//         var first = name[i],
//         second = name[i+1],
//         third = name[i+2];

//         if(third+second+first == "BAD"){
//             add = add+1;
//         }

//     }
// console.log(add);



    const handler=(e)=>{
        console.log(e.target.name);
        const newData={...Value}
        newData[e.target.name] = e.target.value;
        
        console.log(newData[0]);
        setValue(newData);
        console.log(newData);
        let value = e.target.value;
        



        if(value.indexOf("@") > 0 && e.target.name==="email"){
            console.log(value.indexOf("@"))
            
            e.target.className="Emailsus"
             
        }else if(e.target.name==="email"){
            e.target.className="Email";
        }

        if(e.target.name==="password"){
            var password = document.querySelector("#password");
            password.className='passtype';
        }
        


    //     var Lover = document.querySelector("#lover"),
    //     Upper = document.querySelector("#upper"),
    //     Special= document.querySelector("#special"),
    //     Number = document.querySelector("#number"),
    //     Length = document.querySelector("#lenght"),
    //     PasswordValid= document.querySelector("#passwordValid");

    //    let lover=/[a-z]/g,
    //     upper=/[A-Z]/g, number = /[0-9]/g, minlimit=8, special=/^[a-zA-Z0-9-]+$/;
    //     if(e.target.name==="password"){

    //         PasswordValid.classList="show";

    //         if(value.match(lover)  ){
    //             Lover.classList="success";
    //         }else{
    //             Lover.classList="faile";
    //         }
    //         if(value.match(upper) ){
    //             Upper.classList="success";
    //         }else{
    //             Upper.classList="faile";
    //         }
            
    //         if(value.match(number)){
    //             Number.classList="success";
    //         }else{
    //             Number.classList="faile";
    //         }
            
    //         if(e.target.value.length >= minlimit ){
    //             Length.classList="success";
    //         }else{
    //             Length.classList="faile";
    //         }
    //         if(e.target.value.match(special)){
    //             Special.classList="faile";
    //         }else{
                
    //             Special.classList="success";
    //         }
    //     }
       
        
    // }
}
    console.log(Value);
    const login=()=>{
      
            window.location.href="/register";

    }
const input=()=>{

   var data= {outline:"red",
   color:"black"}

         return data 

        }
    
       


    return ( 
        <div class="login-page" >

            
           <svg class="spin" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="18.5" stroke="black" stroke-width="3" stroke-dasharray="414 "/>
</svg>
           <img class="img1first" src={slace+"./Assert/pexels-pavel-danilyuk-7190888.jpg"}/>
            <div class="login-div1">
                   {/* <img class="img1" src={slace+"./Assert/Tiny basket.svg"}/> */}
            <h1>TINY Basket</h1>
{/* 
                <div class="login-para"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et 
ornare elit. Mauris vel nulla vel felis sagittis interdum. Fusce 
varius elementum ante nec porta.</p> 
 </div> */}

    {/* <div class="imgdiv"><img class="img2" src={slace+"./Assert/loginimg.jpg"}/></div> */}
           
            </div>
            <div class="login-form-div">
                <form class="formdata" onSubmit={(e) => button(e)}>
                    <span class="loginhd"><h1>LOGIN</h1></span>
                    <span><label>Email id</label></span>    
                
                    <input type="email" name="email" placeholder='Enter your email' onChange={(e) => handler(e)} className='' id="email"/>
                    <span><label>Password</label></span>
                    <input type="password" name="password" placeholder="Enter your password" onChange={(e) => handler(e)} className='' id="password"/>
                    <a class="forgot" href='/Forgot'>Forgot password</a>
                    <button type="submit">Submit</button>
                </form>
                
                <div onClick={login} class="nav-signup">
                <a href="/register">Don't have an account</a>
                <a href="/register">  SignUp</a>
                
                
                </div>
                 {/* <div class="message-div">
                <h3>{res.message}</h3>
                
                </div> */}
                 
            </div>

            {/* <table>
                <tr><th>First Name</th></tr>
                {rec.map((e) => {
                    return (
                        <tr><td>{e.email}</td></tr>
                    )
                })}
            </table> */}
        </div>);
}

export default Login;