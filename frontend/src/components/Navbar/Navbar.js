import React, { useState } from "react";
import "./Navbar.css";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import logo from "../Images/logo.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import text from "../Images/text.png";
import cart from "../Images/cart.ico";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  const[menu,setMenu]=useState("Home")
  return (
    <>
      <Navbar className="bg-body-tertiary" >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              height="50px"
              width="50px"
              className="a-inline-block align-top"
            />{" "}
            <img
              alt=""
              src={text}
              height="36px"
              width="250px"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Search</Button>
              </Col>
            </Row>
          </Form>
          <div className="nav-login-cart" style={{display:"flex",gap:"1rem",float:"right",alignItems:"center"}}>
           
             <Link to='/login'><Button variant="outline-dark">Login</Button></Link> 
              <div style={{cursor:"pointer"}} >
             <Link to='/cart'><img src={cart} alt="" height="30px" width="30px" /></Link> 
            
              </div>
           <div className="nav-cart-count" style={{cursor:"pointer"}}>0</div>
          
            </div>
        </Container>
      </Navbar >
      <Nav
        variant="tabs"
        defaultActiveKey="/home"
        bg="primary"
        data-bs-theme="light"
        style={{ backgroundColor: "#0d6efd" }}
      >
        <Nav.Item>
           <Nav.Link    href="/home"onClick={()=>{}}>
          <Link to='/'style={{ color: "black",textDecoration:"none" }}  >Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link   eventKey="link-1"onClick={()=>{}}>
          <Link to='/scrubs'style={{ color: "black",textDecoration:"none" }}  >Scrubs  </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="link-2"onClick={()=>{}}>
          <Link to='/labCoats'style={{ color: "black",textDecoration:"none" }}  >labCoats </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="link-3" onClick={()=>{}}>
          <Link to='/fleeceJackets'style={{ color: "black",textDecoration:"none" }}  >Fleece Jackets </Link>

          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" onClick={()=>{}}>
          <Link to='/medicalShoes'style={{ color: "black",textDecoration:"none" }}  >Medical Shoes </Link>

          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="link-5"onClick={()=>{}}>
          <Link to='/socks'style={{ color: "black",textDecoration:"none" }}  >Socks </Link>

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
};

export default Navbar1;
