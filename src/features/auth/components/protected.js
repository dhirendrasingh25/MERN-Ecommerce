import React from "react";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { selectLoggedInUser } from "../authSlice";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const user = useSelector(selectLoggedInUser);
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default Protected;
