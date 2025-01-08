"use client";
import React from "react";
import GoogleIcon from "./svgIcon/GoogleIcon";
import { signIn } from "next-auth/react";
export default function SocialLogin({ mode }) {
  const handleAuth = () => {
    signIn("google", { callbackUrl: "http://localhost/3000" });
  };
  return (
    <button
      onClick={handleAuth}
      className="w-full flex items-center justify-center border border-gray-300 rounded-full py-3 hover:bg-gray-50 transition"
    >
      <GoogleIcon />
      Continue with Google
    </button>
  );
}
