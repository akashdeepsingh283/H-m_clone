import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Orders = () => {
  const { orders, currency, products } = useContext(ShopContext);

  return (
    <div className="orders-page">
      <h1>Your Orders</h1>  
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div key={index} className="carttop">
              <h3>Order {index + 1}</h3>
              <div className="cartcard">
                <div className="overallcartcard cartitem">
                  <div className="leftcartcardinorders">
                    <div className="order-products">
                      {Object.keys(order.items).map((itemId) => {
                        const proddata = products.find(
                          (item) => item._id === itemId
                        ); // Find product data for this itemId

                        return (
                          <div
                            style={{ display: "flex", gap: "6px" }}
                            key={itemId}
                          >
                            {/* Product Image */}
                            <div>
                              <img
                                className="cartimage"
                                src={proddata?.image[0]}
                                alt={proddata?.name}
                              />
                            </div>

                            {/* Product Details */}
                            <div>
                              <p style={{ fontSize: "13px" }}>{proddata?.name}</p>
                              <p style={{ fontSize: "12px" }}>Date: {order.date}</p>
                              <p style={{ fontSize: "11px" }}>
                                Price: {currency}
                                {proddata?.price}
                              </p>

                              {/* Size and Quantity */}
                              <div>
                                {Object.keys(order.items[itemId]).map((size) => (
                                  <p style={{ fontSize: "10px" }} key={size}>
                                    Size: {size} | Quantity: {order.items[itemId][size]}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}} className="midcartcard">
                    <div className="greencircle"></div>
                    <p>Ready to ship</p>
                  </div>

                  <div className="rightcardcard">
                    <button className="track-order-but">Track Order</button>
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

export default Orders;
