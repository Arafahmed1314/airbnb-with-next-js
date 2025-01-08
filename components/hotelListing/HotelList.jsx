"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import HotelCard from "./HotelCard";
import { getHotels } from "@/utils/getHotels";
import Pagination from "../Pagination";

export default function HotelList() {
  const [hotels, setHotels] = useState([]); // Full list of hotels
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [isSliding, setIsSliding] = useState(false); // Animation state
  const itemsPerPage = 8; // Customize the number of items per page

  useEffect(() => {
    // Fetch hotels on mount
    const fetchHotels = async () => {
      const hotelData = await getHotels();
      setHotels(hotelData?.properties || []);
    };

    fetchHotels();
  }, []);

  const handlePageChange = (page) => {
    if (page < 1 || page > Math.ceil(hotels.length / itemsPerPage)) return;

    // Trigger sliding animation
    setIsSliding(true);
    setTimeout(() => {
      setCurrentPage(page); // Update the page after the animation
      setIsSliding(false);
    }, 500); // Match the animation duration
  };

  // Calculate the hotels to display for the current page
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = currentPage * itemsPerPage;
  const paginatedHotels = hotels.slice(startIdx, endIdx);

  // Total pages calculation
  const totalPages = Math.ceil(hotels.length / itemsPerPage);

  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hotel Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-transform duration-500 ease-in-out ${
            isSliding
              ? "opacity-0 translate-x-full"
              : "opacity-100 translate-x-0"
          }`}
        >
          {paginatedHotels.map((hotel) => (
            <Link
              href={`/hotelDetails/${hotel._id}`}
              className="block group"
              key={hotel._id}
            >
              <HotelCard hotel={hotel} />
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
