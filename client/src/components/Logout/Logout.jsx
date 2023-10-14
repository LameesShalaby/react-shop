// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Logout = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     localStorage.setItem("user", "");
//     navigate("/login");
//     window.location.reload();
//   }, [navigate]);

//   return null;
// };

// export default Logout;



const Logout = () => {
  const handleLogout = () => {
    // Implement logout logic, e.g., clear user token from localStorage
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;


