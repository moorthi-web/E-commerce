import React, { Component, useState,useEffect, createContext } from 'react';
import img from "../jsonFolder/img.json"
import ".././cssFolder/prolist.css"
import $, { event, map } from 'jquery'
import Add_cart from './Addcart';
import Axios  from 'axios';
// import { countes } from '../features/addcartno/counterslice';
// import { useDispatch } from 'react-redux';


// export const Counting = createContext();

export const Productlist = (props) => {
    
    // const dispatch = useDispatch();    
    const [slace,setSlace] = useState(`b`);
    const [userid,setUserid]=useState("");
    const [cout, setCout] = useState(0)

    var value, round, divide, count = [], e, result1 = [], result2 = [], result3 = [];

    class databasse extends Component {

        data;
        constructor() {
            super();
            this.data = {
                image: []
            }
        }
        //    componentDid(){

        //     fetch('http://localhost:5000/api/img')
        //     .then(res=>res.json())
        //     .then(images => {
        //         this.data = {
        //           image: images
        //         }


        //     })

        //    }

    }
    const clas = new databasse;


    // clas.componentDid();
    // console.log(clas.data);

    if (img.length) {

        divide = img.length / 3;

        round = Math.round(divide);
        // value = Math.round(divide);
        value = 6;
        for (var o = 0; o < 3; o++) {

            count.push(round);


            round = round + round;
        }

    }




    //   .then(customer => this.setState({customer}))
    //   .catch(err => console.log(err))



    class fine {
        constructor(e) {

            this.e = e;



        }
        listOne(a) {


            for (var i = 0; i < value; i++) {

                var m = a[i];

                result1.push(a[i]);
            }

            return a;
        }
        listScond(a) {


            for (var i = 0; i < (value + value); i++) {
                if (i >= value) {

                    var m = a[i];

                    result2.push(a[i])
                }
            }

            return a;
        }
        listThird(a) {


            for (var i = 0; i < (value + value + value); i++) {
                if (i >= (value + value)) {

                    var m = a[i];

                    if (a[i] != null) {
                        result3.push(a[i]);
                    }
                }
            }

            return a;
        }

    }

    const li = new fine(10);
    li.listOne(img);
    li.listScond(img);
    li.listThird(img);




    var load = document.querySelector('.imglist1');

    var position = $('.content');

    const mousemove = (a) => {
        var positions = document.querySelector('.content').getBoundingClientRect();
        var e = positions.bottom - a.clientY;

        console.log(e);

    }
    // console.log(position);
    window.addEventListener("load", () => {

        load.style.display = "none";
        console.log(true);

    });


    var split = window.location.href.split("/");
  
    // console.log(split.length)
  useEffect(()=>{
    var splitnum = split.length;
    // console.log(split[splitnum-1]); 
    setUserid(split[splitnum-1]);

  
  },[])
   useEffect(()=>{
    const id = {
        id:userid
    }

    // console.log(id);
    
 Axios.post(`http://192.168.5.47:4500/count`,id).then(res=>setCout(res.data[0]?.counts));
    
    
    
   },[userid])
 


  


    var a="../";
    
    for(var i=3;i<split.length-1;i++){
        // console.log(split[i]);
          a = a+"../"
    }

    useEffect(()=>{

        setSlace(a);
    },[a]);
       

//    console.log(slace);
   
   var imgarray = [];

   for(var i=0;i<14;i++){
    imgarray.push(img[i]);
   
}
const [data,setData]=useState({
id:0
})
function Addcart(e){
    
    console.log(e);
   img.map((img)=>{
   if(img.id==e){
    const datas = {
        id:img.id,
        product_name:img.name,
        price:img.price,
        brand:img.brand,
        imgurl:img.img,
        user_id:userid

    }


    setData(datas);
    console.log(data);

    // dispatch(countes("redux is working")); 

}    else{
console.log(1)
}
   }
   )
}



useEffect(()=>{
    const url1 = `http://192.168.5.47:4500/Addcart`
    // console.log(data.id);
    if(data.id != 0){
        console.log(1)
        Axios.post(url1,data).then(res => setCout(res.data[0][0]?.counts));
          

    }
    
   

},[data])


//   dispatch(countes(cout))




useEffect(()=>{
    
    props.getdata(cout); 
    // console.log(cout);
},[cout]);


// console.log(cout.counts);

    return (
<>
    {/* <Counting.Provider value={cout.counts}/> */}
    
<div class="content" >
<div class="fav-div"><h3 class="favourite">Favourite</h3></div>
              <div class="div-cont1">
                       {imgarray.map((e)=>{
                        return(
                            <div class="imglist1" >
                            <img src={slace+ e.img} />
                                <div class="Contbutton">
                                     <button>Buy Now</button>
                                     <button key={e.id} onClick={(c)=>Addcart(e.id)} onMouseDown={(e)=>e.target.classList = "addCart"} onMouseUp={(e)=> e.target.classList = "" } class="" >Add to Cart</button>                                  
                                </div>
                            </div>

                           
                        )
                       })} 
                      
            </div>

            {/* <div class="div-cont1" onMouseMove={(e) => {
                mousemove(e);
            }}> {result1.map((e) => {

                return (
                    <div class="imglist1">
                        <img src={slace+ e.img} />
                    </div>)
            })
                }
            </div>
            <div class="div-cont2" onMouseMove={(e) => {
                mousemove(e);
            }}>   {result2.map((e) => {

                return (
                    <div class="imglist2">
                        <img src={slace+e.img} />
                    </div>)
            })
                }
            </div>
            <div class="div-cont3" onMouseMove={(e) => {
                mousemove(e);
            }}>{result3.map((e) => {

                return (
                    <div class="imglist3">
                        <img src={slace+e.img} />
                    </div>)
            })
                }</div> */}

        </div>


</>

    )


} 

// export const {Cout} = Counting;