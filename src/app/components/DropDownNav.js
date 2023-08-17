"use client";
import Link from "next/link";
import React, { useState } from "react";

function DropDownNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      className="active:text-blue-500 duration-300 relative"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {isOpen && (
        <div className="bg-white/40 absolute top-8 flex flex-col w-full gap-2">
          <Link href="/" className="hover:bg-blue-500 hover:text-white">Home</Link>

          <Link href="/" className="hover:bg-blue-500 hover:text-white">Home</Link>

          <Link href="/" className="hover:bg-blue-500 hover:text-white">Home</Link>

          <Link href="/" className="hover:bg-blue-500 hover:text-white">Home</Link>
        </div>
      )}
      Dropdown
    </button>
  );
}

export default DropDownNav;
