import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Productitem from './Productitem';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Relatedproducts = ({ category, subcategory }) => {
  const { products,currency } = useContext(ShopContext);
  const [relatedproducts, setRelatedproducts] = useState([]);

  const simi = () => {
    let productscopy = products.filter((item) => item.category === category);
    productscopy = productscopy.filter((item) => item.subCategory.includes(subcategory));
    setRelatedproducts(productscopy);
  };

  useEffect(() => {
    simi();
  }, [category, subcategory, products]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2
  };

  return (
    < div className='rpslidercontainer' >
    <Slider {...settings}>
    {relatedproducts.map((item) => {
        return (
        <div className='rpfile'>
            <Link style={{color:'black'}} to={`/product/${item._id}`}>
            <img className='cards' src={item.image[0]} alt="" />
            <p>{item.name}</p>
            <p>{currency}{item.price}</p>
            </Link>
        </div>
        )
    })}
  </Slider>
  </div>
  );
};

export default Relatedproducts;
