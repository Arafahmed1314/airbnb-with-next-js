import Image from 'next/image'
import React from 'react'
import Images from './Images'
import { FaUmbrellaBeach, FaSave, FaSwimmingPool, FaWifi, FaSink, FaParking, FaDumbbell, FaUserFriends, FaDoorOpen, FaBed } from 'react-icons/fa';
export default function CreateHotel() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-8 relative">
            <button
                className="px-4 py-2 bg-primary text-white rounded-lg hover:brightness-90 absolute top-4 right-4"
            >
                <FaSave />
                Publish
            </button>
            {/* <!-- Property Title and Rating --> */}
            <div className="mb-6">
                <h1
                    className="text-3xl font-bold mb-2 text-zinc-400 edit"
                    id="propertyName"
                >
                    Property Name
                </h1>
                <div className="flex items-center text-gray-600">
                    <span className="edit text-gray-600">Property location</span>
                </div>
            </div>

            {/* <!-- Image Gallery --> */}
            <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-8 h-[500px]">
                <div className="col-span-2 row-span-2 relative">
                    <Image
                        src="https://placehold.co/600x400"
                        alt="Main Room"
                        height={400}
                        width={800}
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <input
                        type="text"
                        placeholder="https://placehold.co/600x400"
                        className="w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
                    />
                </div>
                <Images />
                <Images />
                <Images />

            </div>

            <div className="mb-4">
                <span className="text-xl font-bold edit">Price in USD</span>
                <span className="text-gray-600 ml-1">per night</span>
            </div>

            <div className="mb-4">
                {/* <!-- Stock --> */}
                <span className="edit">Available X rooms</span>
            </div>

            {/* <!-- Property Details --> */}
            <div className="grid grid-cols-3 gap-8">
                {/* <!-- Left Column: Property Description --> */}
                <div className="col-span-2">
                    <div className="border-b pb-6 mb-6">
                        <div className="grid grid-cols-1 gap-4 text-gray-600">
                            <div className="flex items-center gap-2">
                                <FaUserFriends size={20} />
                                <span className="edit">How many guests can stay?</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaDoorOpen size={20} />
                                <span className="edit">How many bedrooms?</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaBed size={20} />
                                <span className="edit">How many beds are available?</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Description --> */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-4">About this place</h3>
                        <p className="text-gray-700 leading-relaxed edit">
                            Write a short description about this place
                        </p>
                    </div>

                    {/* <!-- Amenities --> */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
                        <div className="grid grid-cols-2 gap-4" id="amenities">
                            <div className="flex items-center gap-2 cursor-pointer">
                                <FaUmbrellaBeach size={20} />
                                <span>Beach access</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <FaSwimmingPool size={20} />
                                <span>Private pool</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <FaWifi size={20} />
                                <span>Free Wi-Fi</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <FaSink size={20} />
                                <span>Kitchen</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <FaParking size={20} />
                                <span>Free Parking</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <FaDumbbell size={20} />
                                <span>Fitness Center</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Right Column: Booking Card --> */}
            </div>
        </div>
    )
}
