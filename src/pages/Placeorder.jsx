import React, { useContext } from 'react';
import Cart from './Cart';
import Carttotal from '../components/Carttotal';
import { ShopContext } from '../context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const PlaceOrder = () => {
  const location = useLocation();
  const navigate = useNavigate(); // To navigate after placing order
  const { currency, subtotalprice, totalprice, deliveryCharge, placeOrder } = useContext(ShopContext);

  const handlePlaceOrder = () => {
    placeOrder(); // Call placeOrder function
    navigate('/orders'); // Navigate to the orders page after placing the order
  };

  return (
    <div className="place-order-container">
      <div className="poleftside">
        <h1>DELIVERY INFORMATION</h1>
        <form className="place-order-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="Your Full Name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="youremail@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" required placeholder="Street address" />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" required placeholder="City" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input type="text" id="state" name="state" required placeholder="State" />
            </div>
            <div className="form-group">
              <label htmlFor="zip">Zip</label>
              <input type="text" id="zip" name="zip" required placeholder="Postal Code" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" required placeholder="Phone number" />
          </div>
        </form>
      </div>

      <div className="porightside">
        <div className="cart-total-container">
          <div className="cart-total-part">
            <h1>CART TOTALS</h1>
            <div className="cart-total-item">
              <p>Subtotal</p>
              <p>{currency}{subtotalprice}</p>
            </div>
            <div className="cart-total-item">
              <p>Delivery Charges</p>
              <p>{deliveryCharge}</p>
            </div>
            <div className="cart-total-item">
              <p>Total</p>
              <p>{currency}{totalprice}</p>
            </div>

            {location.pathname === '/cart' && (
              <Link to="/place-order">
                <button className="checkout-btn">CHECKOUT</button>
              </Link>
            )}
          </div>
        </div>
        <div className="payment-methods">
          <h2>Payment Methods</h2>
          <div className="payment-images">
            <img src={'https://i.pinimg.com/564x/e9/9c/11/e99c1127e426501bddeb9968ffa99223.jpg'} alt="paytm" />
            <img src={'https://i.pinimg.com/564x/b1/44/1e/b1441e095df7499ec801d255aaa8f5e6.jpg'} alt="phonepay" />
            <img src={'https://i.pinimg.com/564x/f4/8f/68/f48f68cc9b2f5ba4bb37ed82485e1e3c.jpg'} alt="googlepay" />
          </div>
          <button className="addtocart" onClick={handlePlaceOrder}>
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
