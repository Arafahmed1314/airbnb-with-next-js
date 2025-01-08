import Image from "next/image";
import React from "react";
import BookingCard from "./BookingCard";
import StarIcon from "../svgIcon/StarIcon";
import {
  FaUmbrellaBeach,
  FaSwimmingPool,
  FaWifi,
  FaUserFriends,
  FaDoorOpen,
  FaBed,
  FaSink,
} from "react-icons/fa";
import { getHotelById } from "@/utils/getHotelById";

export default async function DetailsContainer({ hotelId }) {
  const hotel = await getHotelById(hotelId);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* <!-- Property Title and Rating --> */}
      <div className="mb-6">
        <h1 class="text-3xl font-bold mb-2">{hotel.name}</h1>
        <div class="flex items-center text-gray-600">
          {/* <i class="fas fa-star text-yellow-500 mr-1"></i> */}
          <StarIcon />
          <span>{hotel.stars} · </span>
          <span class="ml-2">{hotel.reviews_count} reviews</span>
          <span class="mx-2">.</span>
          <span class="">{hotel.location}</span>
        </div>
      </div>

      {/* <!-- Image Gallery --> */}
      <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-8 h-[500px]">
        {hotel?.images?.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt="Room 4"
              height={450}
              width={800}
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* <!-- Property Details --> */}
      <div className="grid grid-cols-3 gap-8">
        {/* <!-- Left Column: Property Description --> */}
        <div className="col-span-2">
          <div className="border-b pb-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Entire villa hosted by Sarah
            </h2>
            <div className="grid grid-cols-3 gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <FaUserFriends size={20} />
                <span>{hotel.max_guests} guests</span>
              </div>
              <div className="flex items-center gap-2">
                <FaDoorOpen size={20} />
                <span>{hotel.bedrooms} bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBed size={20} />
                <span>{hotel.beds} beds</span>
              </div>
            </div>
          </div>

          {/* <!-- Description --> */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">About this place</h3>
            <p className="text-gray-700 leading-relaxed">{hotel.description}</p>
          </div>

          {/* <!-- Amenities --> */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              What this place offers
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <FaUmbrellaBeach size={20} />
                <span>Beach access</span>
              </div>
              <div className="flex items-center gap-2">
                <FaSwimmingPool size={20} />
                <span>Private pool</span>
              </div>
              <div className="flex items-center gap-2">
                <FaWifi size={20} />
                <span>Free Wi-Fi</span>
              </div>
              <div className="flex items-center gap-2">
                <FaSink size={20} />
                <span>Kitchen</span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Right Column: Booking Card --> */}
        <BookingCard hotel={hotel} />
      </div>
    </div>
  );
}
