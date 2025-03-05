import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useState} from 'react'
import {useContext} from 'react';
import {ShopContext} from '../context/ShopContext';
import { DarkModeContext } from '../context/DarkModeContext';
import {Link} from 'react-router-dom';


const Cards = () => {
  const {products}=useContext(ShopContext);
  const {currency}=useContext(ShopContext);
  const {isDarkMode}=useContext(DarkModeContext);
  const [data, setdata] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const bestdata = products.filter(item => item.bestseller === true ); 
      setdata(bestdata.slice(0, 6)); 
    }
  }, [products]);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2
      };
  return (
    <>
      
      < div className='slidercontainer' >
        <Slider {...settings}>
        {data.map((item) => {
            return (
            <div className='file'>
                <Link className={isDarkMode ? 'link-dark' : 'link-light'} to={`/product/${item._id}`}>
                <img className='cards' src={item.image[0]} alt="" />
                <p>{item.name}</p>
                <p>{currency}{item.price}</p>
                </Link>
            </div>
            )
        })}
      </Slider>
      </div>
      </>
  )
}

export default Cards