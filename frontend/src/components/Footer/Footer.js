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
        <img alt="logo" src={logobig} width="25%" height='25%'/>
      </a>
      <small style={{float:"inline-start"}}>Copyright @ 2024 - All Right Reserved.</small>
      <div>
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
    // <div className='footer'>
    //     <div className='footer1'>
    //     <div className='footer-logo'>
    //         <img src={logobig} alt='' height='15%' width='15%'/>

    //     </div>
    //     <ul className='footer-links'>
    //         <li>About</li>
    //         <li>Contact</li>
    //     </ul>
    //     <div className='footer-social-icon'>
    //         <div className='social-icon-container'>
    //             <img src={instagram_icon} alt=''/>
    //             <div className='social-icon-container'>
    //             <img src={pintester_icon} alt=''/>
    //         </div>
    //         <div className='social-icon-container'>
    //             <img src={whatsapp_icon} alt=''/>
    //         </div>
    //         </div>
    //         </div>
    //         <div className='footer-copyright'>
    //             <hr/>
    //             <p>Copyright @ 2024 - All Right Reserved.</p>
    //         </div>
    //     </div>
    // </div>
  );
};

export default Footer;
