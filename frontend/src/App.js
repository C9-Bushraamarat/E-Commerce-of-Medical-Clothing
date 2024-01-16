import "./App.css";
import Login from "./components/Login/Login";
import Navbar1 from "./components/Navbar/Navbar";
import { useState, createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
export const userContext = createContext();

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
    <userContext.Provider
      values={{ token, setToken, isLoggedIn, setIsLoggedIn }}
    >
      <div className="App">
        
        <Navbar1/>
      </div>
    </userContext.Provider>
  );
}

export default App;
