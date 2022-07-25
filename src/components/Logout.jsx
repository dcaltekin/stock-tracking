import React from "react";
import { Navigate } from "react-router-dom";

function Logout() {
  return (
    <div>
      <Navigate to="/"></Navigate>
    </div>
  );
}

export default Logout;
