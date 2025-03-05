import React from 'react'
import { Link } from 'react-router-dom'
import {useLocation} from 'react-router-dom'

const Carttotal = ({currency,subtotalprice,totalprice,deliveryCharge}) => {
    const location = useLocation();
  return (
    <div>
      <div className='totalpart'>
      
      <h1 >CART TOTALS</h1>
      <div className='totalcart'>
        <p>Subtotal</p>
        <p>{currency}{subtotalprice}</p>
        
      </div>
      <div className='totalcart'>
        <p>Delivery Charges</p>
        <p>{deliveryCharge}</p>
        
      </div>
      <div className='totalcart'>
        <p>Total</p>
        <p>{currency}{totalprice}</p>
      </div>
      <div>
        {location.pathname==='/cart' && <Link to='/place-order'>
            <button  className='addtocart1 '>CHECKOUT</button>
      </Link>
            }
      </div>
      
    </div>
    </div>
  )
}

export default Carttotal
