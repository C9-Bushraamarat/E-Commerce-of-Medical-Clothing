import React from "react";
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
const Navbar1 = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
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
          <div style={{display:"flex",gap:"1rem"}}>
           
              <Button variant="outline-dark" style={{float:"right"}}>Login</Button>
              <div style={{float:"right"}}>
              <img src={cart} alt="" height="30px" width="30px" />
            
              </div>
           
          
            </div>
        </Container>
      </Navbar>
      <Nav
        variant="tabs"
        defaultActiveKey="/home"
        bg="primary"
        data-bs-theme="light"
        style={{ backgroundColor: "#0d6efd" }}
      >
        <Nav.Item>
          <Nav.Link className="link1" style={{ color: "black" }} href="/home">
            Scrubs
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ color: "black" }} eventKey="link-1">
            Lab Coats
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ color: "black" }} eventKey="link-2">
            Fleece Jacket
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ color: "black" }} eventKey="link-3">
            Medical Shoes
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ color: "black" }} eventKey="link-4">
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
};

export default Navbar1;
