import Image from "next/image";
import React from "react";

export default function Images() {
  return (
    <div className="relative">
      <Image
        src="https://placehold.co/600x400"
        alt="Room 1"
        height={400}
        width={400}
        className="w-full h-full object-cover rounded-lg"
      />
      <input
        type="text"
        placeholder="https://placehold.co/600x400"
        className="text-sm w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
      />
    </div>
  );
}
