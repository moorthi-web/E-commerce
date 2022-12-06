import React, { useEffect, useState } from 'react';
import {Fileupload} from './Imageupload';
import Axios from 'axios';
import Navbar from '../Constent_compenet/Nav_bar';
import '.././cssFolder/audio.css';
import { event } from 'jquery';
import {Footer} from '../Constent_compenet/Footer';
import './audio.scss'
function Audio(){
  
    const [audiosrc, setAudiosrc] = useState([]);

  useEffect(()=>{
   const url = `http://192.168.5.47:4500`
   Axios.get(url+`/getaudio`).then(res=>{
    setAudiosrc(res.data);
   });

   var input = document.querySelectorAll('.volume');
   console.log(input);
   input.value = 90;

  },[])



  useEffect(()=>{
  console.log(audiosrc);
  },[audiosrc]);


  
   
  let loopturn = false;
  const [loopt, setLoop]=useState(true);

  const [durat, setDurat]=useState(0);
  const [curid, setCurid]=useState()
 const [sideCont,setSideCont]=useState()

const queryselector=(e,type)=>{
   let selectored=document.querySelectorAll("#"+e+type)
     let value
      selectored.forEach(values=>{
        value= values  
    })

    return value
}
const queryselector2=(e,type)=>{

  let selectedparentnode=document.querySelector('.controldiv')            
  let selectored=document.querySelector("#audio_divs"+e)
  let clone=selectored.cloneNode(true);
  let child=selectedparentnode.childNodes
  child.forEach(s=>{
    selectedparentnode.removeChild(s);
  })
  selectedparentnode.appendChild(clone)

  
  
}


 const Play=(e,map,index)=>{
   queryselector2(e,"play")
    let returnvalue=SideContent(map,index)
    setSideCont(returnvalue)
    loop(e)
    setLoop(true);
    let media = document.getElementById(e);
  
    let play = document.getElementById("play"+e);
    let pause = document.getElementById("pause"+e);
    console.log(media.play());
    play.style.display="none";
    pause.style.display="block";
    media.play();

    audiosrc.map(a=>{
      if(a.uuid !== e){
          
          let plays = document.getElementById(`loop${a.uuid}`);
          plays.style.animation=""
         
      }else if(loopturn!=false){
         let loopicons = document.getElementById(`loop${e}`);
        loopicons.style.animation="3s animation infinite"
      }
  }) 



    setInterval(()=>{
      change(e);
    },100);
    setInterval(()=>{

        volumechange(e);
    
        
        
      },100)
      
       
  

    

  
    audiosrc.map(a=>{
        if(a.uuid !== e){
            let audio = document.getElementById(a.uuid);
            audio.pause();
            let plays = document.getElementById("play"+a.uuid);
           let pauses = document.getElementById("pause"+a.uuid);
    
          plays.style.display="block";
          pauses.style.display="none";
        }
    })



  }




  const Pause=(e)=>{
    let media = document.getElementById(e);
    media.pause();

    setLoop(false);
 
    
    let play = document.getElementById("play"+e);
    let pause = document.getElementById("pause"+e);
    
    play.style.display="block";
    pause.style.display="none";
  }

  const Stop=(e)=>{
    let media = document.getElementById(e);
    
    media.currentTime=0;
    media.pause();
  }
 
 

  const loop = (e)=>{
    
    console.log(e)
let index = 0;

    for(var i = 0; i<audiosrc.length; i++){
   
      if(audiosrc[i].uuid === e ){
      
          index = i;
      
      
          }
    }
    
  
    console.log(index);
    let data;
    var find; 
  data = setInterval(()=>{
    let media = document.getElementById(audiosrc[index].uuid);
    let play = document.getElementById("play"+e);
    let pause = document.getElementById("pause"+e);
  
      
      if(media.currentTime === media.duration && loopt == true && loopturn == false){
            if(index == audiosrc.length-1){
              Play(audiosrc[0].uuid);
              console.log(index);
              media.currentTime=0;
            }else{

              Play(audiosrc[index+1]?.uuid);
                  media.currentTime=0;
            }
            
          }
        },100);
        
        
  }


  


  
  const duration =(e,a)=>{
      console.log(a);
      let media = document.getElementById(e);
      
      
      
      let progressbar = document.getElementById(e+"duration_span2");
      let pointer = document.getElementById(e+"span2");
      
      var post = progressbar.getBoundingClientRect();
      console.log(post);
      
      
    
      console.log(media.duration);
      console.log(a.target.value);
      console.log(pointer);
    let duration = media.duration * (a.target.value/100);
    
    media.currentTime = duration;
    
    
}
const[volumes, setVolume]=useState(0)
const volume = (e,a)=>{
  
    var high = document.getElementById("high"+e),
    medium= document.getElementById("medium"+e),
    low= document.getElementById("low"+e),
    mute = document.getElementById("noSound"+e);



    let currenttime = document.getElementById(e);
    currenttime.volume = a.target.value/100;
    setVolume(a.target.value);
    
    if(a.target.value > 80){
      high.style.display="block";   
      medium.style.display="none";
      low.style.display="none";
      // mute.style.displau="block ";
    }else if(a.target.value >50){
        high.style.display="none";   
      medium.style.display="none";
      low.style.display="block";
      // mute.style.displau="none";
    }else if(a.target.value>10){
        high.style.display="none";   
      medium.style.display="none";
      low.style.display="block";
      // mute.style.displau="none";
    }else if(a.target.value<10) {
        high.style.display="none";   
        medium.style.display="block";
        low.style.display="none";
        // mute.style.displau="block";
    }


   
}

const change = (e)=>{
    let duration = document.getElementById(`duration${e}`);
    let progressbar = document.getElementById(e+"duration_span2");
    let pointer = document.getElementById(e+"span2");
    let currenttime = document.getElementById(e);
    
   
    duration.value = (currenttime.currentTime/currenttime.duration)*100; 
    progressbar.style.width=`${200*duration.value/100}px` ;
    pointer.style.left=`${200*duration.value/100}px`;
   

  }
  
  const volumechange=(e)=>{
     
      let vol = document.getElementById(`Volume${e}`);
      
      
      
    }
    
  let Xvalue=0,Yvalue=0;

    document.addEventListener('mousemove',(event)=>{
    
 
      Xvalue=event.pageX;
      Yvalue=event.pageY;
    
    })
    const track = (e, a)=>{
      
        let media = document.getElementById(e);
        let progressbar1 = document.getElementById(e+"duration_span1");
        let progressbar2 = document.getElementById(e+"duration_span2");
        let pointer = document.getElementById(e+"span2");
        
        var post = progressbar1.getBoundingClientRect();
        var position = Xvalue - post.x;
        progressbar2.style.width=`${position}px`;
        pointer.style.left=`${position}px`;
        
        var length = (position/200)*100,
        mediacurentt = media.duration*length/100;

        media.currentTime=mediacurentt;
    }
    
    const sound = (e)=>{
        let vol = document.getElementById(`Volume${e}`);
        vol.style.opacity="1";
        let loophide = document.getElementById( `loop${e}`);
       loophide.style.opacity="0";

    }

    const mouseoutsound = (e)=>{
        let vol = document.getElementById(`Volume${e}`);
        vol.style.opacity="0";
        let loophide = document.getElementById( `loop${e}`);
        loophide.style.opacity="1";
 
    }

   
   
   
    const loopPlay=(e)=>{
      loopturn =!loopturn;
       let loopicon = document.getElementById(`loop${e}`);
       
       loopturn?   audiosrc.map(a=>{
        if(a.uuid !== e){
            
            let plays = document.getElementById(`loop${a.uuid}`);
            plays.style.animation=""
           
        }else{
          loopicon.style.animation="3s animation infinite"
        }
    }) 
       :loopicon.style.animation="";
       let media = document.getElementById(e);
      
       
       
    

         console.log(loopturn)
        var data;
       loopturn?  data = setInterval(()=>{
       if(media.currentTime == media.duration && loopturn == true){
        console.log("loop is working")
         media.currenttime=0;
         media.play()
       }
      },100) :clearInterval(data);
    
    
   
    function trydata(a){
    
        
        console.log("loop start")
      }
    } 
    useEffect(()=>{
console.log(loopturn);
    },[loopturn])

    const SideContent=(e,index)=>{
      console.log(e,index)
      return (
        <>
        {
        <div className='controldiv'>
            
        </div>
        }
        
        </>
      )
    }
    // setSideCont(SideContent())
    return(
        <>

        <Navbar tittle={"AUDIO"} />
        <div className='audio_content'>
        <div class="audio_box">
    { 
        
        audiosrc.map((e, index)=>{
            
            
            return(
                <>

        <div class="audio_divs" id={`audio_divs${e.uuid}`}>
            <div class="spandiv">
                <span>
                  <a> {e.imgname}</a>
                </span>
            </div>
         <img />
        <audio key={index} id={e.uuid}  src={e.imgsrc} type="audio/mp3"  ></audio>
         <div class="audio_button">
         {/* <FontAwesomeIcon icon="fa-solid fa-play" /> */}
        
      
          <i class="fa-solid fa-circle-play play" onClick={()=>{Play(e.uuid,e,index)}} id={"play"+e.uuid} href=""></i>
           <i class="fa-solid fa-circle-pause pause" onClick={()=>{Pause(e.uuid)}} id={"pause"+e.uuid} href=""></i>
            
            {/* <img src={"../.././imgfolder/play-buton-svgrepo-com.svg"}  /> */}
            {/* <img src={"../.././imgfolder/pause-button-svgrepo-com.svg"} class="pause" onClick={()=>{Pause(e.uuid)}} /> */}

            {/* <img src={"../.././imgfolder/stop-svgrepo-com.svg"} class="stop" onClick={()=>{Stop(e.uuid)}} /> */}
         </div>
         <div class="audio_input">
            <input type="range" min="0" max="100"  name="duration"  class="duration" onChange={(a)=>duration(e.uuid,a)} id={`duration${e.uuid}`} href=""></input>
           <div class="duration_cont">

            <div class="duration_span1" id={e.uuid+"duration_span1"} onClick={(a)=>track(e.uuid,a)} href=""></div>
            <div class="duration_span2" id={e.uuid+"duration_span2"} onClick={(a)=>track(e.uuid,a)}  href="">
                <div class="span2div" id={e.uuid+"span2"} onClick={(a)=>track(e.uuid,a)} href="">

                </div>
            </div>        
           </div>
         </div>
<div class="sound_icon"  onMouseLeave={()=>mouseoutsound(e.uuid)}>        
<i class="fa-solid fa-volume-high high" id={"high"+e.uuid} onMouseMove={()=>sound(e.uuid)}></i>
<i class="fa-solid fa-volume medium" id={12} onMouseMove={()=>sound(e.uuid)}></i>
<i class="fa-solid fa-volume-low low" id={"low"+e.uuid} onMouseMove={()=>sound(e.uuid)}></i>
<i class="fa-solid fa-volume-xmark non" id={"medium"+e.uuid} onMouseMove={()=>sound(e.uuid)}></i>

            <input type="range" min="0" max="100"  name="volume" class="volume" onChange={(a)=>volume(e.uuid,a)} id={`Volume${e.uuid}`} ></input>
            <i class="fa-solid fa-arrows-rotate loop"  onClick={()=>loopPlay(e.uuid)} id={`loop${e.uuid}`}></i>
            <i class="fa-solid fa-circle-stop stop" onClick={()=>{Stop(e.uuid)}} href=""></i>
            </div>
        </div>
        </>
            )
        })

        }
  
        </div>
       { sideCont ? sideCont : <SideContent /> } 
</div>
       
            <Fileupload />
            <Footer />
        </>
    )

}

export default Audio;
// 