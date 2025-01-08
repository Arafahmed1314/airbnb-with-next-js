import Image from "next/image";
import React from "react";
import ReservationDetails from "./ReservationDetails";

export default function BookingDetailsCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex items-start gap-6 mb-6 pb-6 border-b">
        <Image
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Property"
          height={400}
          width={600}
          className="w-32 h-32 rounded-lg object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-2">Sea View Room</h2>
          <div className="flex items-center mb-2">
            <i className="fas fa-star text-sm mr-1"></i>
            <span className="text-sm">4.6 (500+ reviews)</span>
          </div>
          <p className="text-zinc-600">
            One room and one living room with a straight sea view....
          </p>
        </div>
      </div>

      {/* <!-- Reservation Details --> */}
      <ReservationDetails />
    </div>
  );
}
