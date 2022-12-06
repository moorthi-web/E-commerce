import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '.././cssFolder/Add_cart.css';
import product from '../jsonFolder/Product.json';
import img from '../jsonFolder/img.json';
import e from 'cors';
import Navbar from '../Constent_compenet/Nav_bar';
import { Footer } from '../Constent_compenet/Footer';
import { Addcart } from '../function/addcount';
import {Delete} from '../function/addcount';


function Add_cart(props) {
    const [ifend, setIfend] = useState(0);
    const [userid, setUserid] = useState("");
    var split = window.location.href.split("/");
    const [slace, setSlace] = useState(`b`);

    console.log(split.length)

    var a = "../";

    for (var i = 3; i < split.length - 1; i++) {
        console.log(split[i]);
        a = a + "../"
    }

    useEffect(() => {

        setSlace(a);
    }, [a]);




    // console.log(split.length)
    useEffect(() => {
        var splitnum = split.length;
        // console.log(split[splitnum-1]); 
        setUserid(split[splitnum - 1]);


    }, [])

    //    console.log(slace);


    const [count, setCount] = useState(0);



    const [href, setHref] = useState({
        id: ""
    })

    const [data, setData] = useState([

    ]);

    Axios.defaults.baseURL = `http://192.168.5.47:4500`



    useEffect(() => {
        var location = window.location.href;
        console.log(location);
        var slice = location.split("/"),
            leng = slice.length;
        console.log(leng);

        let data = {
            id: slice[leng - 1]
        }
        setHref(data);


    }, [])

    const [add_cart, setAddcart] = useState([

    ]);

    useEffect(() => {
        Axios.post(`/getaddcart`, href)
            .then((res) => {


                setCount(res?.data[0]?.counts);


                if (res?.data[0] && res.data[0]?.product_list) {

                    let jsndata = JSON.parse(res.data[0].product_list);

                    let second_data = [],
                        third_data = []

                    console.log(jsndata);


                    img.map((d) => {

                        jsndata.map((c) => {

                            if (c[d.id]) {


                                let data = {
                                    id: d.id,
                                    count: c[d.id]
                                }
                                second_data.push(data);


                                setAddcart(second_data);



                            }


                        })


                    })


                    second_data.map((c) => {

                        img.map((e) => {

                            if (c.id === e.id) {
                                const idvalue = {
                                    id: e.id,
                                    count: c.count
                                }





                            }
                        })
                    })


                    console.log(third_data);



                }





            })
    }, [href, count, ifend])
    const [filter, setFilter] = ([



    ])
    useEffect(() => {

        console.log(data);
        console.log(add_cart);




    }, [add_cart]);


    const [datacom, setDatacom] = useState([]);
    var match = {
        id: "",
        count: 0,
    }






    var detail = 0;
    const [num, setNum] = useState(0);



    const [datas, setDatas] = useState({
        id: 0
    })
    useEffect(() => {

        setNum(count);
        console.log(count);

    }, [count]);
    function Addcarts(e) {

        const data = Addcart(e, userid,img);
        setDatas(data);

    }

    useEffect(() => {
        const url1 = `http://192.168.5.47:4500/Addcart`
        // console.log(data.id);
        if (datas.id != 0) {
            console.log(1)
            Axios.post(url1, datas).then(res => {
                setCount(res.data[0][0]?.counts);


            })



        }



    }, [datas]);

    const [delet, setDelete] = useState();

    const Deletes = (e) => {
   
        const data = Delete(e,userid,img);
        setDelete(data)
    }

    useEffect(() => {
        const url1 = `http://192.168.5.47:4500/Delete`
        // console.log(data.id);
        if (delet) {
            if (delet.id != 0) {
                console.log(1)
                Axios.post(url1, delet).then(res => {

                    console.log(res);
                    if (res.data[2][0].counts == 1) {
                        setIfend(0);
                        window.location.reload();
                        console.log(res.data[0][0])
                    }
                    setCount(res.data[0][0]?.counts)

                });

            }
        }




    }, [delet]);


    return (
        <>

            <Navbar counts={num} tittle={"TINY"} />
            <div class="cart-div">
                {img.map(e => {

                    var a = add_cart.map(b => {

                        if (e.id == b.id) {
                            return (
                                <div key={e.id} class="productlist">
                                    <span class="firstSpanprod">

                                        <h1>{e.name}</h1>
                                        <a>{b.count}</a>
                                    </span>
                                    <div class="productImgdiv">
                                        <img src={slace + e.img} style={{

                                        }}></img></div>
                                    <div class="bellow_content">
                                        <span class="brandpricepara">
                                            <a>Brand: {e.brand}</a>
                                            <a>Price: ${e.price}</a>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </span>
                                        <span class="buttonspan">
                                            <button class="" onClick={() => Addcarts(e.id)} onKeyDown={(e) => e.target.classList = "addCart"} onKeyUp={(e) => e.target.classList = ""}>+</button>
                                            <button class="" onClick={() => Deletes(e.id)}>-</button>
                                        </span>
                                    </div>
                                </div>
                            )
                        }


                    })

                    return a;

                })}
            </div>
            <Footer />
        </>
    )

}
export default Add_cart;