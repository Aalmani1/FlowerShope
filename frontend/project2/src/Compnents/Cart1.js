import Footer from "./Footer";
import React, {useEffect, useState, useRef} from "react";
import img5 from "./img/img5.jpg";
import Carousel from "react-bootstrap/carousel";
import { useDispatch, useSelector, totalcart} from "react-redux";
import { removecart } from "./redux/cart/cartitem";
import HighlightOffIcon from "@material-ui/icons/HighlightOff"


export default function Cart1() {
  const quantity = useRef()
  const [total, setTotal] =useState([])
  const [total2, setTotal2] =useState([])

 const dispatch = useDispatch()
  const cartt = useSelector(state => state.cartitem.cart );
 

//------------------------------------------------------------------------------------------
  // useEffect(()=>{
  //  cartt.map((a)=>setTotal(a =>{
  //   return  ( total+total2)
  //  }) )
  // },[])
// console.log("value carttttt"+cartt[0][0])
//-----------------------------------------------------------------------------------------
 function handelCalc(t) {

  let data = (total2.include(undefined))&&t.reduce((a,b)=>a+b,0)

   setTotal(data)
   console.log(data);



 }



 
  useEffect(()=>{
     
    const sumValues = obj => Object.values(obj).reduce((a, b) => a + b,0);


   console.log(total2);
    console.log(sumValues(total2));
    setTotal(sumValues(total2))

 
  
    

   },[total2])
//------------------------------------------------------------------------------------------
  return (
    <div className="mother-cart">
      <div className="imgcart">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-blocK"
              width="100%"
              height="600px"
              src={img5}
            ></img>
            <Carousel.Caption>
              <h1 className="cart">
                <b>CART</b>
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* ----------------------------------------------------------------------------------------- */}
      <div className="bill">
        <div className="titles">
          <h3>Product</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Total</h3>
        </div>

        <div className="cartmap">
     {cartt.map((item,index) =>{
  return (
    <div> { console.log(index) }
          <HighlightOffIcon className="delet" onClick={() => {dispatch(removecart(item))}}/>
            {/* <button className="delet" onClick={() => {dispatch(removecart(item))}} > Remove </button> */}
           {/* <img className="imgcart" src={item.img} class="card-img-top" alt="..." /> */}
          <h3 className="namecart">{item.name}</h3>
          <div> ${item.price} </div>
          <input ref={quantity} onChange={(e)=>
         { 

           setTotal2({...total2, [index]: item.price * e.target.value})

           

          }
          
    
        }
         
         type="number" id="quantity" name="quantity" />
        
          <div> {total2[index]} </div>
    </div> 

  )
})}

         
         
         <h1>{total}</h1>
      </div>

      </div>
      <Footer />
    </div>
  );
}
