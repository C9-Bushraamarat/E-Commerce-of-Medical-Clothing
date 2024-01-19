import React ,{useState}from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './LoginSignUp.css'
import { json } from 'react-router-dom';

const LoginSignUp = () => {
  const[state,setState]=useState('Login')
  const[formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  })
  const login=async()=>{
console.log('login',formData)
let responseData
await fetch('http://localhost:5000/login',{
  method:'POST',
  headers:{
  Accept:'Application/form-Data',
  'Content-Type':'application/json'
},
body: json.Stringify(formData),
  }).then((result)=>{responseData.json()}).then((data)=>responseData=data)
  if(responseData.success){
    localStorage.setItem('auth-token',responseData.token);
    window.location.replace("/")
    
  }else{
    alert(responseData.errors)
  }
  }
  const signup=async()=>{
console.log('signup',formData)
let responseData
await fetch('http://localhost:5000/signup',{
  method:'POST',
  headers:{
  Accept:'Application/form-Data',
  'Content-Type':'application/json'
},
body: JSON.Stringify(formData),
  }).then((result)=>{responseData.json()}).then((data)=>responseData=data)
  if(responseData.success){
    localStorage.setItem('auth-token',responseData.token);
    window.location.replace("/")
    
  }else{
    alert(responseData.errors)
  }
  }

  const changeHandler=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
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
         value={formData.firstName}
         onChange={changeHandler}
           type="text"
           width="10%"
           placeholder="First Name"
           
         />
       </Form.Group>:<></>}
       {state==='Sign Up'?<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
         <Form.Label></Form.Label>
         <Form.Control
         name='lastName'
         value={formData.lastName}
         onChange={changeHandler}
           type="text"
           placeholder="Last Name"
           
         />
       </Form.Group>:<></>} 
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
         <Form.Label></Form.Label>
         <Form.Control
         name='email'
         value={formData.email}
         onChange={changeHandler}
           type="email"
           placeholder="name@example.com"
           
         />
       </Form.Group>
       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
         <Form.Label></Form.Label>
         <Form.Control
         name='password'
         value={formData.password}
         onChange={changeHandler}
           type="password"
           placeholder="password"
        />
      </Form.Group>
       <Button variant="signUp" className='btn btn-primary mt-5'onClick={()=>{state==='Login'?login():signup()}} >
Continue       </Button>{" "}
       {state==='Sign Up'?<p className='loginsignup-login'>Already have an account? <span onClick={()=>{setState('Login')}}>Login</span></p>:<p className='loginsignup-login'>Create an Account? <span onClick={()=>{setState('Sign Up')}}>Click here</span></p>}
       
       
     </Form>
     </div>
     </>
  )
}

export default LoginSignUp




// import React, { useState, useContext } from "react";
// import axios from "axios";

// import userContext from "../../App";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// // import useState, usecontext , create context
// // import user context fro App

// const Login = () => {
//   const { setIsLoggedIn } = useContext(userContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };
//   const setInLogin = () => {
//     axios
//       .post("http://localhost:5000/users/login", { email, password })
//       .then((result) => {
//         setIsLoggedIn("Success Login");
//         console.log(result);
//       })
//       .catch((err) => {});
//   };

//   // const [settoken, set is logged in]=useContext(userContext)
//   /* in the then of login set token (result.token)
// local storage.setItem(result.token)
// */
//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="name@example.com"
//           onChange={handleEmail}
//         />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="password"
//           onChange={handlePassword}
//         />
//       </Form.Group>
//       <Button variant="info" onClick={setInLogin}>
//         Info
//       </Button>{" "}
//     </Form>
//   );
// };

// export default Login;
