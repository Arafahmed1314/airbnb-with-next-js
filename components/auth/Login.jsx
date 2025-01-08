"use client";
import { login } from "@/app/action";
import { useAuthContext } from "@/app/context/auth-context";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState("");
  const { auth, setAuth } = useAuthContext();
  const [isSubmitting, setIsSubmitting] = useState(false); // Added state for submission status
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true); // Set submitting state to true

    try {
      const formData = new FormData(event.currentTarget);
      const response = await login(formData);
      console.log(response, "response");

      if (response?.error) {
        console.log("there is and array");

        setError(response.error); // Handle error from response
      } else {
        setAuth(response);
        router.push("/"); // Redirect on success
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred"); // Handle unexpected errors
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  }

  return (
    <div>
      {error && <div className="text-xl text-red-500 text-center">{error}</div>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-primary text-white rounded-full py-3 ${
            isSubmitting
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-primary-dark transition"
          }`}
        >
          {isSubmitting ? "Logging in..." : "Continue"}
        </button>
      </form>
    </div>
  );
}
