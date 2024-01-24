import React, { useEffect,useState } from "react";
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
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';

const Navbar1 = () => {
  const navigate=useNavigate()
  const[menu,setMenu]=useState("Home")
  const[color,setColor]=useState('');
  const[categories,setCategories]=useState([]);
  const getAllCategory=()=>{
axios.get('http://localhost:5000/categories/getcategory').then((result)=>{
console.log(result.data.categories)
  setCategories(result.data.categories)
}).catch((err)=>{
  console.log(err)
})
  }
  useEffect(() => {
   
getAllCategory();
  },[])

    return (
    <>
    <div style={{background:color}}>
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
           {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>: <Link to='/login'onClick={()=>{setColor(' linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(75,14,154,1) 35%, rgba(0,212,255,1) 100%)')}}><Button variant="outline-dark">Login</Button></Link>}
             
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
        {categories&&categories.map((category,i)=>{
          return(<>
           <Nav.Item>
          <Nav.Link   eventKey="link-1"onClick={(e)=>{navigate(`/item/${category._id}`)}}>
          <Link  style={{ color: "black",textDecoration:"none" }} >{category.name}</Link>
          </Nav.Link>
        </Nav.Item>
          
          </>)
        })}
       
      </Nav>
      </div>
    </>
  );
};

export default Navbar1;
/* 

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



*/