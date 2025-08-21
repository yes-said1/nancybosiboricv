import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axiosInstance from "./utils/axiosInstance";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // 👇 call backend to validate cookie
        await axiosInstance.get("/admin/dashboard");
        setIsAuthenticated(true);
      } catch (err) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // show spinner or skeleton
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
