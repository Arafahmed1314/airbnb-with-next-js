"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function RegistrationForm() {
  const [error, setError] = useState("");

  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const fname = formData.get("fname");
      const lname = formData.get("lname");
      const email = formData.get("email");
      const password = formData.get("password");

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/login");
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <div className="text-xl text-red-500 text-center">{error && error}</div>
      <form className="space-y-4" onSubmit={onSubmit}>
        <input
          type="text"
          name="fname"
          placeholder="First Name"
          className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <button
          type="submit"
          className="w-full bg-primary text-white rounded-full py-3 hover:bg-primary transition"
        >
          Continue
        </button>
      </form>
    </>
  );
}