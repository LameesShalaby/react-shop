// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import.meta.env.VITE_AUTH_TOKEN 

// export const storeUser = (data) => {
//   localStorage.setItem(
//     "user",
//     JSON.stringify({
//       username: data.user.username,
//       jwt: data.jwt,
//     })
//   );
// };

// export const userData = () => {
//   const stringifiedUser = localStorage.getItem("user") || '""';
//   return JSON.parse(stringifiedUser || {});
// };

// export const Protector = ({ Component }) => {
//   const navigate = useNavigate();

//   const { jwt } = userData();

//   useEffect(() => {
//     if (!jwt) {
//       navigate("/login");
//     }
//   }, [navigate, jwt]);

//   return Component;
// };


// import.meta.env.VITE_AUTH_TOKEN 
    
// export const getToken = () => {
//   return localStorage.getItem(VITE_AUTH_TOKEN);
// };

// export const setToken = (token) => {
//   if (token) {
//     localStorage.setItem(VITE_AUTH_TOKEN, token);
//   }
// };

// export const removeToken = () => {
//   localStorage.removeItem(VITE_AUTH_TOKEN);
// };



import { AUTH_TOKEN } from "./constant";
    
    export const getToken = () => {
      return localStorage.getItem(AUTH_TOKEN);
    };
    
    export const setToken = (token) => {
      if (token) {
        localStorage.setItem(AUTH_TOKEN, token);
      }
    };
    
    export const removeToken = () => {
      localStorage.removeItem(AUTH_TOKEN);
    };
    