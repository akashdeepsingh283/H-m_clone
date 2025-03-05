import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const Collection = () => {
  const { products, favitems, currency,addtocart } = useContext(ShopContext);
  const [favdata, setFavdata] = useState([]);
  const [size, setsize] = useState('')

  // Function to fetch favourite items from the context
  const fetchFavData = () => {
    let data = [];
    for (const itemId in favitems) {
      if (favitems.hasOwnProperty(itemId)) {
        for (const size in favitems[itemId]) {
          if (
            favitems[itemId].hasOwnProperty(size) &&
            !isNaN(favitems[itemId][size])
          ) {
            let product = products.find((item) => item._id === itemId);
            if (product) {
              let productCopy = { ...product };
              productCopy.size = size;
              setsize(productCopy.size);
              productCopy.quantity = favitems[itemId][size];
              data.push(productCopy);
            }
          }
        }
      }
    }
    setFavdata(data);

  };

  // Call fetchFavData when the component mounts
  useEffect(() => {
    fetchFavData();
  }, [favitems, products]); // Dependency to re-fetch when favitems or products change

  return (
    <div className="orders-page">
      <h1>FAVOURITES</h1>
      {favdata.length === 0 ? (
        <p>No products in your wishlist</p>
      ) : (
        <div>
          {favdata.map((item, index) => (
            <div key={index} className="carttop">
              <div className="cartcard">
                <div className="overallcartcard cartitem">
                  <div className="leftcartcardinorders">
                    <div className="order-products">
                      <div
                        style={{ display: 'flex', gap: '6px' }}
                        key={item._id}
                      >
                        {/* Product Image */}
                        <div>
                          <img
                            className="cartimage"
                            src={item.image[0]}
                            alt={item.name}
                          />
                        </div>

                        {/* Product Details */}
                        <div>
                          <p style={{ fontSize: '13px' }}>{item.name}</p>
                          <p style={{ fontSize: '11px' }}>
                            Price: {currency}
                            {item.price}
                          </p>

                          <p style={{ fontSize: '10px' }}>
                            Size: {size} | Quantity: {item.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div className="rightcardcard">
                  <button onClick={()=>addtocart(item._id,size)} className='addtocart'>ADD TO CART</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
