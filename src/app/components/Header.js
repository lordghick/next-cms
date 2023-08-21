import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-white py-4 px-4 z-50">
      <div className="mx-auto container max-w-sm md:max-w-2xl lg:max-w-6xl flex items-center justify-between">
        <div className="">
          <Link href="/" className="text-blue-500 font-bold text-2xl">
            Logo
          </Link>
        </div>

        <div className="flex">
          <Link href="/creators" className="font-medium bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-400 transition-colors">
            Creators
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
