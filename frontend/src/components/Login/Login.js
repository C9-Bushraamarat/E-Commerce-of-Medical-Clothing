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
