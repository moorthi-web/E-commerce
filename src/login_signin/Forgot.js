import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Axios from 'axios';
import '.././cssFolder/login.css'
import { data } from 'jquery';

function Forgot(){

   
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
    // emailjs.send("service_jdmy86q","TinyBasket_ggzw804",{
    //     to_name: "ganesamoorthi9912@gmail.com",
    //     message: "123564",
    //     reply_to: "ganesamoorthi9912@gmail.com",
    //     });

    const[store,SetStore]=useState({
        email:""
    });
    const [res,setRes]=useState({
        username:"",
        message:""
    })
   
   const [datas,setDatas]=useState("");
   const [times, setTimes]=useState("");
   const[counts, setCounts]=useState("");
   const[number,setNum]=useState(0);
   const[OTP, setOTP]=useState(0);
   const[otpGen, setOtpGen]=useState(0)
   const[password,setPassword] = useState({
    new:"",
    reenter:""
   })
   const[emaildatas,setEmaildatas]=useState({

   })
   const [count,setCount] = useState();
    const [countss,setCountss] = useState();
    const sendEmail=(e)=>{
        const data = {
            email:e.target.value
        }
        SetStore(data);
        console.log(store);
    }
    var otpreq = document.querySelector("#OTPreq"),
     otpbut = document.querySelector("#OTP"),
     otpspan = document.querySelector("#OTPspan"),
     newspan =document.querySelector("#newspan"),
     reenterspan = document.querySelector("#re-enterspan"),
     verifybutton = document.querySelector("#verify"),
     updatebutton = document.querySelector("#update"),
     counting= document.querySelector("#counting");
     
    const sendOTP =(e)=>{
        e.preventDefault();
        if(res.username ===""){
            console.log(1);
            Axios.post('http://192.168.5.47:4500/check',store).then((res)=>{
           
           
                var num;
            console.log(res.data.length)
            setRes(res.data);
            if(res.data.length==0){
                const data = {
                    username:"",
                    message:"Email is not registered"
                }
                setRes(data);
            }else if(res.data.length==1 && counts === "0:0"| counts === ""){
               
                 
                
                  
                otpreq.classList="sendOtphide";
                otpbut.classList="OTPinput"
                otpspan.classList="OTPinput"
                verifybutton.classList="verify";
    
               
                console.log(res.data[0].username);
                var ran = Math.random()*10000;
                var float = Math.round(ran);
                // console.log(ran);
                // console.log(float);
               const data = float;
                
               const datas = {
                    to_name:res.data[0].username,
                    message:float,
                    email:res.data[0].email,
                    
                }
                setEmaildatas(datas);
                setOtpGen(data);
                num = number+1; 
                setNum(num);
                var change = `send${num}`;
                setDatas(change);
                console.log(change)
                 setRes(res.data);
                
                       
            }
    
    
        });
        }
  

    }
    useEffect(()=>{
        
      
        if(res.username != ""){
            console.log(1)
            setTimes("Start")
              emailjs.send("service_jdmy86q","TinyBasket_ggzw804",{
            to_name:emaildatas.to_name,
            message:emaildatas.message,
            email: emaildatas.email
            },"04VpIxDymbK-088On");
            console.log(times)
            OTPinputt()

        }
        
    
       },[datas])

       function OTPinputt(){
        var Otp = document.querySelector("#OTP");
        Otp.classList="OTPinput";
       }

       let time;
       useEffect(()=>{

        if(counts === "0:0" | counts === "" && times != ""   ){
        var a = 120;
         time = setInterval(()=>{
         a = a-1
         // console.log(a) 
         var b = a;
         var c
         
          c = b - 60;
         
         
         if(a>=0 && a<60){
             console.log(0+":"+(b));
             setCounts(0+":"+(b))
             
         }else if(b>=0&& a>60){
             console.log(1+":"+(c));
             setCounts(1+":"+(c))
         }else if(a<0){
             clearInterval(time);
             setTimes("")
             
         console.log(a)
         
         }
     
        },1000);
    }
      
       },[times])
      
        function otp(e){
            setOTP(e.target.value);
            console.log(OTP);
            console.log(res.number);
          
        }
        
        function newpassword(e){
                console.log(e);
                console.log(e.target.id);
                let key= e.target.id;
                let data = {...password}
                if(key==="new"){
                

                  data.new = e.target.value;
                    console.log(data);
                    setPassword(data);
                    console.log(password.new);
                }else{
                    data.reenter = e.target.value;
                    setPassword(data);
                    
                    console.log(password.reenter );
                }
              console.log(password);

        }
        const verify=(e)=>{
            e.preventDefault();
            console.log(OTP);
            console.log(otpGen);
            if(OTP == otpGen){
               console.log(OTP,res.number)
                var newpass = document.querySelector("#new");
                var reenterpass= document.querySelector("#re-enter");
                otpbut.classList="OTPinputhide";
                otpspan.classList="OTPinputhide"
                newpass.classList="newpassword";
                newspan.classList="newpassword"
                reenterpass.classList="newpassword";
                reenterspan.classList="newpassword"
                updatebutton.classList="update";
                verifybutton.classList="verifyhide";
                counting.classList="countinghide";
                 clearInterval(time);
            }

        }
       
        const Update=(e)=>{
            const url=`http://192.168.5.47:4500/changepassword`

          e.preventDefault();
          let postdata = {...password};
          let postress = {...res};
          let datacom = {...postdata,...postress}
          console.log(datacom);
          
          if(datacom[0].idnum && count == 5 ){
            console.log(1)
          if(password.new === password.reenter){
            Axios.post(url,datacom)
        
            .then((res)=>{
                
                console.log(res)
                if(res.data==="success"){
                    setTimeout(()=>{
                        window.location.href="/";
                    },2000);
        
                }
                })
        }}else{
            console.log(0)
          }

        }

      const check=(e)=>{

    var Lover = document.querySelector("#lover"),
    Upper = document.querySelector("#upper"),
    Special= document.querySelector("#special"),
    Number = document.querySelector("#number"),
    Length = document.querySelector("#lenght"),
    PasswordValid= document.querySelector("#passwordValid");
    var a = 0;
   let lover=/[a-z]/g,
    upper=/[A-Z]/g, number = /[0-9]/g, minlimit=8, special=/^[a-zA-Z0-9-]+$/;
      let value = e.target.value;
 
        PasswordValid.classList="show";

        if(value.match(lover)){
            Lover.classList="success";
            a=a+1;
           
            setCount(a);
        }else{
            Lover.classList="faile";
            
         
        }
        if(value.match(upper) ){
            Upper.classList="success";
            a=a+1;
           
            setCount(a);
        }else{
            Upper.classList="faile";
        
        }
        
        if(value.match(number)){
            Number.classList="success";
            a=a+1;
          
            setCount(a);
        }else{
          
            Number.classList="faile";
        }
        
        if(e.target.value.length >= minlimit ){
            Length.classList="success";
            a=a+1;
           
            setCount(a);
        }else{
            
            Length.classList="faile";
        }
        if(e.target.value.match(special)){
            Special.classList="faile";
            
        }else{
            if(e.target.value != ""){
                Special.classList="success";
                a=a+1;
              
            setCount(a);
            }
            
        }
    
      }
    return(
        <>
            <div class="login-page" >
            <svg class="spin" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="18.5" stroke="black" stroke-width="3" stroke-dasharray="414 "/>
</svg>
        <img class="img1first" src={slace+"./Assert/pexels-pavel-danilyuk-7190888.jpg"}/>
         <div class="login-div1">
                  {/* <img class="img1" src={slace+"./Assert/Tiny basket.svg"}/> */}
            <h1>TINY Basket</h1>

                {/* <div class="login-para"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et 
ornare elit. Mauris vel nulla vel felis sagittis interdum. Fusce 
varius elementum ante nec porta.</p>
</div> */}
               
            </div>
            <div class="login-form-divs ">
        <form onSubmit={(e)=>console.log(1)} class="formdataup formsignup buttonform" >
        <span class="loginhd"><h1> Password</h1></span>
            <span><label>Email id</label></span> 
            <input type="email" name="to-email" placeholder='Enter Your email' onChange={(e)=>sendEmail(e)}></input>
            <span class="OTPinputhide" id="OTPspan"><label>OTP</label></span>
            <input type="number" placeholder="Plece enter OTP" onChange={(e)=>otp(e)} class="OTPinputhide" id="OTP"></input>
            <span class="newpasswordhide" id="newspan"><label>New Password</label></span>
            <input type="password" placeholde="Enter your new password" id="new" onChange={(e)=>newpassword(e)} onKeyUp={(e)=>check(e)} class="newpasswordhide"/>
            <span class="newpasswordhide " id="re-enterspan"><label>Old Password</label></span>
            <input type="password" placeholde="Re-enter Your new password" id="re-enter" onChange={(e)=>newpassword(e)} class="newpasswordhide "/>
            <div class="fotmdataupButton">
            <button type="submit" onClick={(e)=>sendOTP(e)} class="sendOtp" id="OTPreq">Sent OTP</button>
            <button type="submit" onClick={(e)=>verify(e)} class="verifyhide" id="verify">verify</button>
            <button type="submit" onClick={(e)=>Update(e)} class="updatehide" id="update">Update Password</button>
            </div>
        </form>
        <div class="hide" id="passwordValid">
                    <a id="upper" class="Invalid">A UpperCase letter</a>
                    <a id="lover" class="Invalid">A LoverCase letter</a>
                    <a id="special" class="Invalid">A Special Character</a>
                    <a id="number" class="Invalid">Must Contain Number</a>
                    <a id="lenght" class="Invalid">Length Must be min 8</a>
                </div>
        {/* <h1>{store.email}</h1> */}
        <h1>{res.message}</h1>
        <h1 class="" id="counting">{counts}</h1>
        </div>
        </div>
        </>
    )

}

export default Forgot;