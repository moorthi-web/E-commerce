

export function Addcart(e, a,img) {
    console.log(e);
    let datas = {}
    img.map((img) => {
        if (img.id == e) {
            const data = {
                id: img.id,
                product_name: img.name,
                price: img.price,
                brand: img.brand,
                imgurl: img.img,
                user_id: a

            }

            datas = { ...data }

        } else {
            console.log(e)
        }
    }
    )

    return datas;
}

export const Delete = (e,a,img) =>{
    

    let datas = {}
        img.map((img) => {
    
    
        if (img.id == e) {
            const data = {
                id: img.id,
                product_name: img.name,
                price: img.price,
                brand: img.brand,
                imgurl: img.img,
                user_id: a
    
            }
    
    
            datas={...data};
            console.log(data);
    
    
    
        } else {
            console.log(1)
        }
    })
    return datas
}

        //     console.log(e);
        //    img.map((img)=>{
        //    if(img.id==e){
        //     const data = {
        //         id:img.id,
        //         product_name:img.name,
        //         price:img.price,
        //         brand:img.brand,
        //         imgurl:img.img,
        // user_id:userid

        //     }


        //     setDatas(data);
        //     console.log(data);



        // }    else{
        // console.log(1)
        // }
        //    }
        //    )
