import React from "react";
import Image from "next/image";
import StarIcon from "../svgIcon/StarIcon";
export default function HotelCard({ hotel }) {
  return (
    <div>
      <div className="relative">
        <Image
          src={hotel.images[0]}
          alt=""
          height={450}
          width={800}
          className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform"
        />
        <div className="absolute top-3 right-3 bg-white/80 px-3 py-1 rounded-full text-xs font-semibold">
          <i className="ph-bed inline-block mr-1"></i>
          {hotel.available_rooms} Rooms Left
        </div>
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">{hotel.name}</h3>
          <div className="flex items-center">
            <StarIcon />
            <span className="ml-1 text-zinc-600">{hotel.stars}</span>
          </div>
        </div>
        <p className="text-zinc-500 text-sm mt-1">{hotel.location}</p>
        <div className="mt-2 flex justify-between items-center">
          <div>
            <span className="font-bold">${hotel.price_per_night} </span>
            <span className="text-zinc-500 text-sm">per night</span>
          </div>
        </div>
      </div>
    </div>
  );
}
