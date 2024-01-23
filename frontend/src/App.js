import "./App.css";
import Navbar1 from "./components/Navbar/Navbar";
import { useState} from "react";
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import LoginSignUp from "./pages/LoginSignUp/LoginSignUp";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import ShopCategory from "./pages/ShopCategory"
import Products from "./pages/Product"
import Footer from "./components/Footer/Footer"
import scrubBanner from "../src/components/Images/scrubBanner.png"
import labBanner from "../src/components/Images/labBanner.png"
import jacketbanner from "../src/components/Images/jacketbanner.png"
import shoesBanner from "../src/components/Images/shoesBanner.png"
import socksBanner from "../src/components/Images/socksBanner.png"




function App() {
 
  return (
   
    <>
      <div className="App">
        <Navbar1/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/scrubs" element={<img  alt="" src={scrubBanner}/>} e/>
          <Route path="/labCoats" element={<img alt='' src={labBanner}/>}/>
          <Route path="/fleeceJackets" element={<img alt='' src={jacketbanner}/>}/>
          <Route path="/medicalShoes" element={<img alt='' src={shoesBanner} />}/>
          <Route path="/socks" element={<img alt='' src={socksBanner}/>}/>
          <Route path="/product/" element={<Products/>}/>

          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignUp/>}/>
        
        </Routes>
        <Footer/>
      </div>
      </>
  );
}

export default App;
