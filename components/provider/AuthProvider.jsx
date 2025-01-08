"use client";

import { AuthContext } from "@/app/context/auth-context";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    // Initialize the auth state from localStorage
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      setAuth(storedAuth);
    }
  }, []); // Runs once after the component mounts

  useEffect(() => {
    // Save auth state to localStorage whenever it changes
    localStorage.setItem("auth", auth);
  }, [auth]);
  console.log(auth);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
