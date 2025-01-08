import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa"; // Import icons from React Icons
import PopUp from "./PopUp";
import { auth } from "@/auth";

export default async function Header() {
  const session = await auth();
  // console.log(session);

  return (
    <nav className="grid grid-cols-2 md:flex justify-between items-center py-3 bg-white border-b mb-6 md:gap-8 px-4 md:px-8 lg:px-20">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="Hotel Logo"
            height={400}
            width={400}
            className="h-8 w-auto"
          />
        </Link>
      </div>

      <div className="row-start-2 col-span-2 border-0 md:border flex shadow-sm hover:shadow-md transition-all md:rounded-full items-center px-2">
        <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-4 divide-x py-2 md:px-2 flex-grow">
          <input
            type="text"
            placeholder="Where to?"
            className="px-3 bg-transparent focus:outline-none lg:col-span-3 placeholder:text-sm"
          />
        </div>

        <button className="bg-primary w-9 h-9 rounded-full grid place-items-center text-sm text-center transition-all hover:brightness-90 shrink-0">
          <FaSearch className="text-white" /> {/* Search Icon */}
        </button>
      </div>
      <PopUp user={session?.user} />
    </nav>
  );
}
