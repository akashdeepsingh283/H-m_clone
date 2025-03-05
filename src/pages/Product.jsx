import React from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { useEffect } from 'react';
import { useState } from 'react';
import {assets} from '../assets/assets';
import Relatedproducts from '../components/Relatedproducts';
import heart from '/heart.svg';

const Product = () => {
  const {productId}= useParams();
  const {products,currency,addtocart,addtofav}= useContext(ShopContext);
  const [productdata, setproductdata] = useState(false);
  const [image, setimage] = useState('');
  const [size, setsize] = useState('');

  const fetchproduct=()=>{
    products.map((item)=>{
      if(item._id===productId){
        setproductdata(item);
        setimage(item.image[0]);
        return null;

      }
    })
  }
  useEffect(() => {
    fetchproduct();
  }, [productId,products])
  return (
    <div>
    <div className='prodimagecontainer'>
      <div className='prodcards'>
        {productdata && productdata.image.map((item,index)=>{
          return(
            <img onClick={()=>setimage(item)} src={item} key={index} alt={productdata.name}/>
          )
        })}
      </div>
      <div>
        {
           <img className='prodbigimage' src={image} alt={productdata.name}/>
        }
      </div>
      <div className='prodrightside'>
        
          <p className='prodheading'>{productdata.name}</p>
          <div className='starline'>
            <img src={assets.star_icon} alt="" className='starlogo' />
            <img src={assets.star_icon} alt="" className='starlogo'/>
            <img src={assets.star_icon} alt="" className='starlogo'/>
            <img src={assets.star_icon} alt="" className='starlogo'/>
            <img src={assets.star_dull_icon} alt="" className='starlogo'/>
            <p>(122)</p>
          </div>
          <p className='prodprice'>{currency}{productdata.price}</p>
          <p className='proddescription'>{productdata.description}</p>
          <p className='prodsize'>Select Size</p>
          <div className='prodsizecontainer'>
            {
              productdata.sizes && productdata.sizes.map((item,index)=>{
                return(
                  <p key={index} onClick={
                    ()=>setsize(item)
                  } 
                  className={`sizebox ${size === item ? 'selected-size' : ''}`}>{item}</p>
                )
              })
            }
            </div>
            <div className='prodbutlist'>
            <button onClick={()=>addtocart(productdata._id,size)} className='addtocart'>ADD TO CART</button>
            <button onClick={()=>addtofav(productdata._id,size)} className='whishlistbut'>
            
           <img  src={heart} alt="" className='heartsidelogo'/>  
       
      <p>WHISHLIST</p>
            </button>
            </div>
            <div className='line'></div>
            <div className='proddescription'>
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          
        
      </div>
      </div>
      <div className='prodbottom'>
        <div style={{display:'flex'}}>
          <p className='prodtransbut'>Description</p>
          <p className='prodtransbut1'>Reviews(122)</p>
        </div>
        <div className='prodtransbut2'>
          <p>An e-commerce website displays products with essential details like images, prices, and descriptions. Customers can search, browse categories, and apply filters to find what they need quickly.</p>
          <p>Users can add products to a cart and proceed to a secure checkout process, providing shipping information and paying through integrated payment gateways, ensuring a smooth and safe transaction.</p>
        </div>
      </div>
      <div>
        <h1>Related products:</h1>
        <Relatedproducts category={productdata.category} subcategory={productdata.subCategory}/>
      </div>
      
    </div>
  )
}

export default Product
