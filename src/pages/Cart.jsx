import React from 'react'
import {useContext} from 'react'
import { ShopContext } from '../context/ShopContext';
import {useState} from 'react'
import { useEffect } from 'react';
import {assets} from '../assets/assets';
import Carttotal from '../components/Carttotal';

import { Link } from 'react-router-dom';


const Cart = () => {
  const {cartitems,products,currency,deliveryCharge,getcartcount,setcounter,setsubtotalprice,settotalprice,subtotalprice,totalprice,updateQuantity}=useContext(ShopContext);
  const [cartdata, setcartdata] = useState([]);

  const fetchcartdata=()=>{
    let data=[];
    for (const itemId in cartitems) {
      if (cartitems.hasOwnProperty(itemId)) {
          for (const size in cartitems[itemId]) {
              if (cartitems[itemId].hasOwnProperty(size) && !isNaN(cartitems[itemId][size])) {
                  let product=products.find((item)=>item._id===itemId);
                  if (product) {
                    let productCopy = { ...product };  
                    productCopy.size = size;
                    productCopy.quantity = cartitems[itemId][size];
      
                    data.push(productCopy);
                  }
              }
          }
      }
  }
  setcartdata(data);
  }
  const pricecounter=()=>{
    let total=0;
    let subtotal=0;
    let deliveryCharge=50;
    cartdata.map((item)=>{
      subtotal+=item.price*item.quantity;
      total=subtotal+deliveryCharge;
    })
    settotalprice(total);
    setsubtotalprice(subtotal);
  }
  
  
  useEffect(() => {
    fetchcartdata();
  }, [cartitems])
  useEffect(() => {
    pricecounter();
  }, [cartdata]); 
  if(cartdata.length===0){
    return(
      <div >
        <div className='emptycart'>
          <img className='emptycartimage' src={'https://constant.myntassets.com/checkout/assets/img/empty-bag.webp'} alt="" />
          <p className='emptycartheading'>Hey,it feels so light!</p>
          <p className='emptycartline'>There is nothing in your bag.Let's add some items.</p>
          <Link to='/collection'>
          <button className='emptyaddtocart'>ADD ITEMS FROM WHISHLIST</button>
          </Link>
        </div>
      </div>
    )
  }
  return (
    <div className='leader'>
      <div className='carttop' >
      <h1 >YOUR CART </h1>
      <div className='cartcard'>
        {
          cartdata.map((item)=>{
            return(
              <div className="overallcartcard cartitem">
                <div className="leftcartcard">
              <div className='cartitemleft'>
                <img className='cartimage' src={item.image[0]} alt="" />
                <div className='cartcardleft'>
                <p>{item.name}</p>
                
                <div style={{display:'flex',gap:'25px'}}>
                <p>{currency}{item.price}</p>
                <p className='sizeboxincart'>{item.size}</p>
                </div>
                </div>
              </div>
              </div>
              <div className="midcartcard">
                <div className='cartcardright'>
                  <p >Qty: {item.quantity}</p>
                </div>
              </div>
              <div className="rightcardcard">
                <div className='cartcardright'>
                  <img className='cartlogo' onClick={()=>updateQuantity(item._id,item.size,0)} src={assets.bin_icon} alt="" />
                </div>
              </div>
              </div>
            )
          })
        }
        </div>
        </div>
        <Carttotal currency={currency} subtotalprice={subtotalprice} totalprice={totalprice} deliveryCharge={deliveryCharge}/>
      
    </div>
  )
}
export default Cart
