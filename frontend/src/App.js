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
import labBanner from "./components/Images/labBanner.png"
import jacketbanner from "./components/Images/jacketbanner.png"
import shoesBanner from "./components/Images/shoesBanner.png"
import socksBanner from "./components/Images/socksBanner.png"




function App() {
 
  return (
   
    <>
      <div className="App">
        <Navbar1/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/scrubs" element={<ShopCategory banner={scrubBanner}/>}/>
          <Route path="/labCoats" element={<ShopCategory banner={labBanner}/>}/>
          <Route path="/fleeceJackets" element={<ShopCategory banner={jacketbanner}/>}/>
          <Route path="/medicalShoes" element={<ShopCategory  banner={shoesBanner} height='20vh'/>}/>
          <Route path="/socks" element={<ShopCategory banner={socksBanner}/>}/>
          <Route path="/product/:productId" element={<Products/>}/>

          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignUp/>}/>
        
        </Routes>
        <Footer/>
      </div>
      </>
  );
}

export default App;
