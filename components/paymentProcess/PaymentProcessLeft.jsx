import Link from "next/link";
import React from "react";
import PaymentSection from "./PaymentSection";
import BillingAddress from "./BillingAddress";

export default function PaymentProcessLeft() {
  return (
    <div>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your trip</h2>

        {/* <!-- Dates --> */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-medium">Dates</h3>
            <p className="text-zinc-600 text-sm">Jan 3 - 8, 2025</p>
          </div>
          <button className="text-zinc-800 underline text-sm">Edit</button>
        </div>

        {/* <!-- Guests --> */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">Guests</h3>
            <p className="text-zinc-600 text-sm">1 guest</p>
          </div>
          <button className="text-zinc-800 underline text-sm">Edit</button>
        </div>
      </section>

      {/* <!-- Payment Section --> */}
      <PaymentSection />

      {/* <!-- Billing Address --> */}
      <BillingAddress />
      {/* <!-- Book Button --> */}
      <Link
        href="/paymentSuccessfull"
        className="w-full block text-center bg-primary text-white py-3 rounded-lg mt-6 hover:brightness-90"
      >
        Request to book
      </Link>
    </div>
  );
}
