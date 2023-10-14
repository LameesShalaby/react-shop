import { Button, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { removeToken } from "../../helpers";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Login = () => {
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    setUser(undefined);
    navigate("/signin", { replace: true });
  };

  return (
    <Space className="header_space">
      <Space className="auth_buttons">
        {user ? (
          <>
            <a className="auth_button_login" href="/profile" type="link">
            <FaUser/> {user.username}
            </a>
            <a
              className="auth_button_signUp"
              type="primary"
              onClick={handleLogout}
            >
               <FaSignOutAlt/> Logout
            </a>
          </>
        ) : (
          <>
            <a className="auth_button_login" href="/signin" >
             <FaUser/> Login
            </a>
            <a
              className="auth_button_signUp"
              href="/signup"
            >
             <FaUser/> SignUp
            </a>
          </>
        )}
      </Space>
    </Space>
  );
};

export default Login

//     import {
//   Alert,
//   Button,
//   Card,
//   Col,
//   Form,
//   Input,
//   message,
//   Row,
//   Spin,
//   Typography,
// } from "antd";
// import React, { Fragment, useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "../../context/AuthContext";
// import useScreenSize from "../../hooks/useScreenSize";
// import { API } from "../../constant";
// import { setToken } from "../../helpers";

// const SignIn = () => {
//   const { isDesktopView } = useScreenSize();
//   const navigate = useNavigate();

//   const { setUser } = useAuthContext();

//   const [isLoading, setIsLoading] = useState(false);

//   const [error, setError] = useState("");

//   const onFinish = async (values) => {
//     setIsLoading(true);
//     try {
//       const value = {
//         identifier: values.email,
//         password: values.password,
//       };
//       const response = await fetch(`${API}/auth/local`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(value),
//       });

//       const data = await response.json();
//       if (data?.error) {
//         throw data?.error;
//       } else {
//         // set the token
//         setToken(data.jwt);

//         // set the user
//         setUser(data.user);

//         message.success(`Welcome back ${data.user.username}!`);

//         navigate("/profile", { replace: true });
//       }
//     } catch (error) {
//       console.error(error);
//       setError(error?.message ?? "Something went wrong!");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Fragment>
//       <Row align="middle">
//         <Col span={isDesktopView ? 8 : 24} offset={isDesktopView ? 8 : 0}>
//           <Card title="SignIn">
//             {error ? (
//               <Alert
//                 className="alert_error"
//                 message={error}
//                 type="error"
//                 closable
//                 afterClose={() => setError("")}
//               />
//             ) : null}
//             <Form
//               name="basic"
//               layout="vertical"
//               onFinish={onFinish}
//               autoComplete="off"
//             >
//               <Form.Item
//                 label="Email"
//                 name="email"
//                 rules={[
//                   {
//                     required: true,
//                     type: "email",
//                   },
//                 ]}
//               >
//                 <Input placeholder="Email address" />
//               </Form.Item>

//               <Form.Item
//                 label="Password"
//                 name="password"
//                 rules={[{ required: true }]}
//               >
//                 <Input.Password placeholder="Password" />
//               </Form.Item>

//               <Form.Item>
//                 <Button
//                   type="primary"
//                   htmlType="submit"
//                   className="login_submit_btn"
//                 >
//                   Login {isLoading && <Spin size="small" />}
//                 </Button>
//               </Form.Item>
//             </Form>
//             <Typography.Paragraph className="form_help_text">
//               New to Social Cards? <Link to="/signup">Sign Up</Link>
//             </Typography.Paragraph>
//           </Card>
//         </Col>
//       </Row>
//     </Fragment>
//   );
// };

// export default SignIn;


// import React, { useState } from "react";
// import { Col, Row, Button, FormGroup } from "react-bootstrap";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// // import { storeUser } from "../../helpers";
// import "./Login.css";

// const initialUser = { password: "", identifier: "" };

// const Login = () => {
//   const [user, setUser] = useState(initialUser);
//   const navigate = useNavigate();

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   const handleLogin = async () => {
//     const url = `http://localhost:1337/api/local/`;
//     try {
//       if (user.identifier && user.password) {
//         const response = await axios.post(url, user);
//         const { data } = response;
//         if (data.jwt) {
//           storeUser(data);
//           alert("Logged in successfully!");
//           setUser(initialUser);
//           navigate("/");
//           window.location.reload();
//         }
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Login failed. Please try again.");
//     }
//   };

//   return (
//    <>
//    <section className="login-form">
//     <div className="container">
//     <Row className="login">
//       <Col sm="12" >
//         <div>
//           <h2>Login:</h2>
//           <FormGroup>
//             <input
//               type="email"
//               name="identifier"
//               value={user.identifier}
//               onChange={handleChange}
//               placeholder="Enter your email"
//             />
//           </FormGroup>
//           <FormGroup>
//             <input
//               type="password"
//               name="password"
//               value={user.password}
//               onChange={handleChange}
//               placeholder="Enter password"
//             />
//           </FormGroup>
//           <div className="btn" onClick={handleLogin}>
//             Login
//           </div>
//           <h6>
//             Click <Link to="/registration"><span style={{color:'#088178'}}>Here</span></Link> to sign up
//           </h6>
//         </div>
//       </Col>
//     </Row>
//     </div>
//    </section>
//    </>
//   );
// };

// export default Login;





// import './Login.css'
// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     identifier: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:1337/api/auth/local', {
//         identifier: formData.identifier,
//         password: formData.password,
//       });
//       console.log(response.data);
//       // Handle successful login, e.g., store user token in localStorage
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className='login'>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="identifier"
//           placeholder="Username or Email"
//           value={formData.identifier}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
