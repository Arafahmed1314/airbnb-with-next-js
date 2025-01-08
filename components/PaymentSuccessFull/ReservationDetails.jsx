import React from "react";

export default function ReservationDetails() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="font-semibold mb-4">Reservation Details</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-zinc-600 text-sm">Check-in</span>
            <span className="text-zinc-500 text-sm">Jan 3, 2025</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-600 text-sm">Check-out</span>
            <span className="text-zinc-500 text-sm">Jan 8, 2025</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-600 text-sm">Guests</span>
            <span className="text-zinc-500 text-sm">1 guest</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Payment Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-zinc-600">Total amount paid</span>
            <span className="font-semibold">$364.20</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-600 text-sm">Booking ID</span>
            <span>BOOK123456</span>
          </div>
        </div>
      </div>
    </div>
  );
}
