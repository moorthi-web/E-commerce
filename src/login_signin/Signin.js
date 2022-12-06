import Axios  from 'axios';
import { data } from 'jquery';
import React, {useState, useEffect} from 'react';
import '.././cssFolder/login.css';
import emailjs from '@emailjs/browser';

function Signin() {
   
    const [count,setCount] = useState();
    const [counts,setCounts] = useState();
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

   const url1=`http://192.168.5.47:4500/getuser`;

   useEffect(()=>{
    Axios.get(url1)
    .then((res)=>{
        setRec(res.data);
        console.log(res.data);
        console.log(rec);
    })
   },[])


    const [Value,setValue]=useState({
        username:"",
        email:"",
        password:""
    });
    const[rec,setRec]=useState([]);
    const[res,setRes]=useState("");
    const[OTPdata,setOTPdata]=useState(0);
    const[emaildatas,setEmaildatas]=useState({
            to_name:"",
            message:"",
            email:""
    })
    const[senddata, setSenddata] = useState({

    })



    var userspan = document.querySelector("#userspan"),
username = document.querySelector("#username"),
emailspan = document.querySelector("#emailspan"),
email = document.querySelector("#email"),
passwordspan = document.querySelector("#passwordspan"),
password = document.querySelector("#password"),
submitbutton = document.querySelector("#submitbutton"),
otpspan = document.querySelector("#Otpspan"),
otpinpu = document.querySelector("#otpinput"),
verifybutton = document.querySelector("#verifybutton"),
PasswordValid= document.querySelector("#passwordValid");

    
    function button(e){
        var usernameremove = document.querySelector("#username");
        var emailremove = document.querySelector("#email");
        var passwordremove = document.querySelector("#password");
       
        
        e.preventDefault();
        // console.log(e.target[0].value);
        
        const data={
            username:Value.username,
            email:Value.email,
            password:Value.password
        }
   
        setSenddata(data);
        
      
        console.log(count);
        var ln = data.username.length;
        if(ln > 0 && count == 5){
            
            
       

         var num = 0;
         console.log(rec)
         rec.map((rec)=>{
            console.log(rec)
             if(rec.email === Value.email){
                 num = num + 1;
                 alert("Email id is already taken");

             }
         })
         if(num == 0){

     
            
            var ran = Math.random()*10000;
            var float = Math.round(ran);
            // console.log(ran);
            // console.log(float);
            const datas = float;
            const emaildata = {
               to_name:data.username,
               message:datas,
               email:data.email
            }

            setEmaildatas(emaildata);
            userspan.classList="hide";
            username.classList="hide";
            passwordspan.classList="hide";
            password.classList="hide";
            submitbutton.classList="hide";
            otpspan.classList="";
            otpinpu.classList="";
            verifybutton.classList="";
            PasswordValid.classList="hide";

         }
      

       
        }else if(count <=6){
            alert("Pleace Fill The Email And Password")
            emailremove.value ="";
            passwordremove.value =""; 
            console.log(emailremove.value);



        }else{
            alert("Pleace Fill The Username")
        }

    
    }


    useEffect(()=>{
        console.log(1);
        console.log(emaildatas);
        emailjs.send("service_jdmy86q","TinyBasket_ggzw804",{
            to_name:emaildatas.to_name,
            message:emaildatas.message,
            email: emaildatas.email
            },"04VpIxDymbK-088On");
    },[emaildatas])

    const handler=(e)=>{
        var a = 0;
        console.log(e.target.name);
        const newData={...Value}
        newData[e.target.name] = e.target.value;
        console.log(newData[0]);
        setValue(newData);
        console.log(newData);
    
     
        let value = e.target.value;

    if(e.target.name==="username" && e.target.value===""){
        e.target.className="Email";
    }

    if(value.indexOf("@") > 0 && e.target.name==="email"){
        console.log(value.indexOf("@"))
        
        e.target.className="Emailsus";
        a=a+1;
        setCount(a);
         
    }else if(e.target.name==="email"){
        e.target.className="Email";
    }
    


    var Lover = document.querySelector("#lover"),
    Upper = document.querySelector("#upper"),
    Special= document.querySelector("#special"),
    Number = document.querySelector("#number"),
    Length = document.querySelector("#lenght");
  

    var c = 0;
   let lover=/[a-z]/g,
    upper=/[A-Z]/g, number = /[0-9]/g, minlimit=8, special=/^[a-zA-Z0-9-]+$/;
    if(e.target.name==="password"){
 
        PasswordValid.classList="show";

        if(value.match(lover)){
            Lover.classList="success";
            a=a+1;
            c = c+1;
            setCounts(c);
            setCount(a);
        }else{
            Lover.classList="faile";
            
         
        }
        if(value.match(upper) ){
            Upper.classList="success";
            a=a+1;
            c = c+1;
            setCounts(c);
            setCount(a);
        }else{
            Upper.classList="faile";
        
        }
        
        if(value.match(number)){
            Number.classList="success";
            a=a+1;
            c = c+1;
            setCounts(c);
            setCount(a);
        }else{
          
            Number.classList="faile";
        }
        
        if(e.target.value.length >= minlimit ){
            Length.classList="success";
            a=a+1;
            c = c+1;
            setCounts(c);
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
                c = c+1;
                setCounts(c);
            setCount(a);
            }
            
        }
          console.log(c)
       

    }
   

    // if(Values==0 && e.target.name==="password" ){
    //     c = 0;
    //  setInterval(()=>{
    //      PasswordValid.classList="hide";
    //     },1000)
       
    
    
      
    //   }

     

 }


    console.log(Value);
   const signin = ()=>{
    window.location.href="/"
   }

 function OTP(e){
    setOTPdata(e.target.value);
    
 }  

   function OTPVerification(e){
    const url=`http://192.168.5.47:4500/User`
   e.preventDefault();
   console.log(emaildatas.message,OTPdata)
   if(emaildatas.message == OTPdata){
    Axios.post(url,senddata)
    .then(res=>{
        if(res.data[1].message === "Your have successfully registered"){
            const data = {message:res.data[1].message};
            setRes(data); 
            console.log(res.data[0]);
            console.log(data);
            setRec(res.data[0]);
            var spin = document.querySelector(".spin");
            spin.classList="blockspin";
           setInterval(()=>{
                window.location.href=`/home/${res.data[0].idnum}`;
                spin.classList="spin";
            },1000);
        
    }else{
            const data = {message : res.data};
            setRes(data);
            console.log(data);
            console.log(res.data);
          
                alert(res.data);
           
          
        } 
       
       
       
    }).catch(err => console.log(err));

    console.log(data);
   }
   
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
                {/* <div class="login-para"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et 
ornare elit. Mauris vel nulla vel felis sagittis interdum. Fusce 
varius elementum ante nec porta.</p>
</div> */}
               
            </div>
            <div class="login-form-div">
                <form class="formdata formsignup" >
                    <span class="loginhd"><h1>SignUP</h1></span>
                    <span class="" id="userspan"><label>Username</label></span>    
                    <input type="text" name="username" class="usernameinput" placeholder='Enter your name' onChange={(e) => handler(e)}   className='' id="username"/>
                    <span class="" id="emailspan" ><label>Email id</label></span> 
                    <input type="email" name="email" class="" placeholder='Enter your email' onChange={(e) => handler(e)} className='' id="email"/>
                    <span class="" id="passwordspan"><label>Password</label></span>
                    <input type="password" name="password"  class="" placeholder="Enter your password" onChange={(e) => handler(e)}  className='' id="password" />
                    <button type="submit" id="submitbutton" onClick={(e) => button(e)} class="">Submit</button>
                    <span class="hide" id="Otpspan"><label>OTP</label></span>
                    <input type="number" placeholder='Enter OTP' id="otpinput" class="hide" onChange={(e)=>OTP(e)}/>
                    <button type="submit" class="hide" id="verifybutton" onClick={(e) => OTPVerification(e)}>Verify</button>
                </form>
                <div class="hide" id="passwordValid">
                    <a id="upper" class="Invalid">A UpperCase letter</a>
                    <a id="lover" class="Invalid">A LoverCase letter</a>
                    <a id="special" class="Invalid">A Special Character</a>
                    <a id="number" class="Invalid">Must Contain Number</a>
                    <a id="lenght" class="Invalid">Length Must be min 8</a>
                </div>
                <div onClick={signin} class="nav-signup">
                <a href='/' >Already have an account</a>
                <a href='/'>SignIn </a>
                </div>
               
                {/* <h3>{res}</h3> */}
            </div>

            {/* <table>
                <tr><th>First Name</th></tr>
                {rec.map((e) => {
                    return (
                        <tr><td>{e.email}</td></tr>
                    )
                })}
            </table> */}
        </div>
        );
}

export default Signin;