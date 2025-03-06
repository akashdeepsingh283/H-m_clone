import React from 'react'
import {Routes, Route,useLocation} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Product from './pages/Product'
import Cart from './pages/Cart'
import PlaceOrder from './pages/Placeorder'
import Orders from './pages/Orders'
import Ladiespage from './pages/Ladiespage'
import Menpage from './pages/Menpage'
import Kidspage from './pages/Kidspage'
import Secondrow from './components/Secondrow'
import Bottom from './components/Bottom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  const location = useLocation();

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Secondrow />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/ladies" element={<Ladiespage />} />
        <Route path="/Men" element={<Menpage />} />
        <Route path="/Kids" element={<Kidspage />} />
        <Route path="/Place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      {location.pathname!=='/cart' && <Bottom />}
    </div>
  )
}

export default App
