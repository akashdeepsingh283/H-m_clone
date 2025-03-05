import React, { useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import {useContext} from 'react'
import {useState} from 'react'
import Productitem from './Productitem';
const Latestcollection = () => {

    const {products}=useContext(ShopContext);
    const [latestproducts, setlatestproducts] = useState([]);
    
    useEffect(() => {
        setlatestproducts(products.slice(0,10));
    }, [products])
  return (
    <div>
      {
        latestproducts.map((item,index)=>(
            <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))
      }
    </div>
  )
}

export default Latestcollection
