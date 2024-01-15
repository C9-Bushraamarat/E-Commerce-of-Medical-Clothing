import React from 'react'
import './Navbar.css'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo.png'
// import logo from  '../Images/logo.png';
// import cart from '../Images/cart.ico'
const Navbar1 = () => {
    return (
      <>
      <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}

          height='40px' width='40px'
            className="d-inline-block align-top"
          />{' '}
          MEDICALUNIFORMSHOP
        </Navbar.Brand>
      </Container>
    </Navbar>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Scrub Top</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1"> Scrub Trousers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Scrub Sets</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" >
            Scrub Caps
          </Nav.Link>
        </Nav.Item>
         <Nav.Item>
          <Nav.Link eventKey="link-4" >
          Lab Coats
          </Nav.Link>
        </Nav.Item>
         <Nav.Item>
          <Nav.Link eventKey="link-5" >
        Fleece Jacket
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-6" >
        Medical Shoes
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-7" >
       Socks
          </Nav.Link>
        </Nav.Item>
        
      </Nav>
      </>
    );
      // return (

  //   <div className='navbar'>
  //       <div className='nav-logo'>
  //           <img src={logo}alt=''/>
  //           <p>UNIFORMSHOP</p>
  //       </div>
  //       <ul className='nav-menu'>
  //           <li>Scrub Top</li>
  //           <li>Scrub Trousers</li>
  //           <li>Scrub Sets</li>
  //           <li>Scrub Caps</li>
  //           <li>Lab Coats</li>
  //           <li>Fleece Jacket</li>
  //           <li>Medical Shoes</li>
  //           <li>Socks</li>
  //       </ul>
  //       <div className='nav-login-cart'>
  //           <button>Login</button>
  //           <img src={cart} alt=''/>
  //       </div>
  //   </div>
  // )
}

export default Navbar1