import React, { useEffect } from "react";
import { createContext } from "react";
import products from "../assets/assets";
import { useState } from "react";


import { toast } from "react-toastify";
export const ShopContext = React.createContext();

const ShopContextProvider=(props)=>{

    const currency='₹';
    const deliveryCharge=50;
    const [search, setsearch] = useState('');
    const [cartitems, setcartitems] = useState([]);
    const [favitems, setfavitems] = useState([]);
    const [orders, setOrders] = useState([]);
    const [counter, setcounter] = useState(0);
    const [subtotalprice, setsubtotalprice] = useState(0);
    const [totalprice, settotalprice] = useState(0);

const addtocart=async(itemid,size)=>{
        if(!size){
            toast.error('Please select a size');
            return;
        }
        let cartdata=structuredClone(cartitems);
        if(cartdata[itemid]){
            if(cartdata[itemid][size]){
                cartdata[itemid][size]+=1;
            }else{
                cartdata[itemid][size]=1;
            }


            
    }
    else{
        cartdata[itemid] = {
            [size]: 1
        };
    }
    setcartitems(cartdata);
}
const addtofav=async(itemid,size)=>{
    if(!size){
        toast.error('Please select a size')
    }
    let favdata=structuredClone(favitems);
    if(favdata[itemid]){
        if(favdata[itemid][size]){
            favdata[itemid][size]+=1;
        }
    }
    else{
        favdata[itemid]={
            [size]:1
        };

    }
    setfavitems(favdata);

}

useEffect(() => {
    console.log(cartitems);
    getcartcount();
    updateQuantity();
    
}
,[cartitems])

const getcartcount = () => {
    let count = 0;
    for (const itemId in cartitems) {
        if (cartitems.hasOwnProperty(itemId)) {
            for (const size in cartitems[itemId]) {
                if (cartitems[itemId].hasOwnProperty(size) && !isNaN(cartitems[itemId][size])) {
                    count += cartitems[itemId][size];
                }
            }
        }
    }
    setcounter(count);
};
const updateQuantity=async(itemId,size,quantity)=>{
    let cartdata=structuredClone(cartitems);
     cartdata[itemId][size]=quantity;
     delete cartdata[itemId][size];
        setcartitems(cartdata);
}

  const placeOrder = () => {
    if (Object.keys(cartitems).length === 0) {
      toast.error("Your cart is empty! Add some items first.");
      return;
    }

    const orderItems = structuredClone(cartitems);

    // Save the order data, including current cart details
    setOrders((prevOrders) => [
      ...prevOrders,
      {
        items: orderItems,
        total: totalprice,

        deliveryCharge,
        date: new Date().toLocaleString(),
      },
    ]);

    // Clear the cart after placing an order
    setcartitems([]);
    setsubtotalprice(0);
    settotalprice(0);
    toast.success("Order placed successfully!");
  };

    const value={
        products,currency,deliveryCharge,search,setsearch,cartitems,addtocart,getcartcount,counter,setcounter,updateQuantity,
        subtotalprice,totalprice,setsubtotalprice,settotalprice,setcartitems,  placeOrder, // Expose the placeOrder function
        orders, addtofav,favitems// Expose the orders state
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;