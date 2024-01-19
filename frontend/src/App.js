import "./App.css";
import Navbar1 from "./components/Navbar/Navbar";
import { useState} from "react";
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import LoginSignUp from "./pages/LoginSignUp/LoginSignUp";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import ShopCategory from "./pages/ShopCategory"
import Products from "./pages/Products"
import Footer from "./components/Footer/Footer"
// export const userContext = createContext("");


// import useState , Routes , Route, createcontext
//  export default userContext=create context()
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  /*   states to share form app like token 
default(local.getItem("token"))
  , is logged in
  default false  */
  return (
    /* 
    1-context.provders values={{toke, setToke, logeedin , setLoggedin}}
    2- Routes ,Routes for each element
    */
    // <userContext.Provider
    //   values={{ token, setToken, isLoggedIn, setIsLoggedIn }}
    // >
    <>
      <div className="App">
        <Navbar1/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/scrubs" element={<ShopCategory category="scrub"/>}/>
          <Route path="/labCoats" element={<ShopCategory category="labCoat"/>}/>
          <Route path="/fleeceJackets" element={<ShopCategory category="fleeceJacket"/>}/>
          <Route path="/medicalShoes" element={<ShopCategory category="shoes"/>}/>
          <Route path="/socks" element={<ShopCategory category="socks"/>}/>
          <Route path="/product/:productId" element={<Products/>}/>

          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignUp/>}/>
        
        </Routes>
        <Footer/>
      </div>
      </>
    // </userContext.Provider>
  );
}

export default App;
