import React from "react";
import logobig from "../Images/logobig.png";
import instagram from "../Images/instagram.png";
import facebook from "../Images/facebook.png";
import whatsapp from "../Images/whatsapp.png";

const Footer = () => {
  return (
    <div class="blockcode">
 
  <footer class="shadow">
    <div
      class="d-flex justify-content-between align-items-center mx-auto py-4 flex-wrap"
      style={{width: "80%"}}
    >
      <a href="/#" class="d-flex align-items-center p-0 text-dark">
        <img alt="logo" src={logobig} width="30%" height='30%'/>
      </a>
      <small style={{marginRight:'20%'}}>Copyright @ 2024 - All Right Reserved.</small>
      <div >
        <button class="btn btn-dark btn-flat p-2" style={{background:"white"}}>
          <i class="fa fa-facebook" ><img alt='' src={facebook} width='20px' height='20px'/></i>
        </button>
        <button class="btn btn-dark btn-flat p-2" style={{background:"white"}}>
          <i class="fa fa-twitter"><img alt='' src={whatsapp} width='20px' height='20px'/></i>
        </button>
        <button class="btn btn-dark btn-flat p-2" style={{background:"white"}}>
          <i class="fa fa-instagram"><img alt='' src={instagram} width='20px' height='20px'/></i>
        </button>
      </div>
    </div>
  </footer>
</div>
  );
};

export default Footer;
