"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";
import React, { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { useAuthContext } from "@/app/context/auth-context";
export default function PopUp({ user }) {
  // console.log(user);
  const { auth, setAuth } = useAuthContext();
  setAuth(user);
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center space-x-4 relative justify-end">
      <div onClick={() => setOpen(!open)}>
        <button className="bg-white border border-zinc-300 text-zinc-800 px-4 py-2 rounded-full hover:shadow-md flex gap-3 items-center justify-center">
          <FaBars /> {/* Bars Icon */}
          <span className="bg-zinc-600 w-6 h-6 rounded-full flex items-center justify-center text-xs text-white">
            <FaUser className="text-white" /> {/* User Icon */}
          </span>
        </button>
      </div>
      {open && (
        <div className="max-w-48 w-48 bg-white shadow-sm border rounded-md absolute right-0 top-full max-h-fit mt-2 z-50 hidden lg:block">
          <ul className="">
            {!user && (
              <Link href="/login" className="w-full">
                <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
                  Login
                </li>
              </Link>
            )}

            <Link href="/register" className="w-full">
              {user ? (
                <li
                  className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4"
                  onClick={() => {
                    signOut({ callbackUrl: "http://localhost:3000" });
                  }}
                >
                  SignOut
                </li>
              ) : (
                <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
                  Signup
                </li>
              )}
            </Link>

            <Link href="#" className="w-full">
              <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
                Help
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}
