import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from "axios"
import './LoginSignUp.css'

const LoginSignUp = () => {
  const navigate = useNavigate();
  const[state,setState]=useState('Login')
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handlefirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handlelastName = (e) => {
    setLastName(e.target.value);
  };

 

 

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  
  const login=(e)=>{
    console.log('login',email,password)
e.preventDefault()
    axios
    .post("http://localhost:5000/users/login",{  email, password})
    .then((res) => {

      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  const signup=()=>{
console.log('signup')
axios
.post("http://localhost:5000/users/register",{  firstName, lastName,email, password})
.then((res) => {
  console.log(res.data);
})
.catch((err) => {
  console.log(err);
});
  }

  
  return (
    <>
   <div className='back'>

    <Form className='form'>
    <h1>{state}<hr/></h1>

      {state==='Sign Up'?<Form.Group className="mb-3 " size='sm' controlId="exampleForm.ControlInput1">
         <Form.Label></Form.Label>
         <Form.Control
         name='firstName'
         
         onChange={handlefirstName}
           type="text"
           width="10%"
           placeholder="First Name"
           
         />
       </Form.Group>:<></>}
       {state==='Sign Up'?<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
         <Form.Label></Form.Label>
         <Form.Control
         name='lastName'
         
         onChange={handlelastName}
           type="text"
           placeholder="Last Name"
           
         />
       </Form.Group>:<></>} 
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
         <Form.Label></Form.Label>
         <Form.Control
         name='email'
         
         onChange={handleEmail}
           type="email"
           placeholder="name@example.com"
           
         />
       </Form.Group>
       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
         <Form.Label></Form.Label>
         <Form.Control
         name='password'
         
         onChange={handlePassword}
           type="password"
           placeholder="password"
        />
      </Form.Group>
       <Button variant="signUp" className='btn btn-primary mt-5'onClick={(e)=>{state==='Login'?login(e):signup()}} >
Continue       </Button>{" "}
       {state==='Sign Up'?<p className='loginsignup-login'>Already have an account? <span style={{ cursor: "pointer",color:'blue' ,fontWeight:'bold'}} onClick={()=>{setState('Login')}}>Login</span></p>:<p className='loginsignup-login'>Create an Account? <span style={{ cursor: "pointer",color:'blue' ,fontWeight:'bold'}} onClick={()=>{setState('Sign Up') }}>Click here</span></p>}
       
       
     </Form>
     </div>
     </>
  )
}

export default LoginSignUp




