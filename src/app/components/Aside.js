import React from "react";
import AsideCard from "./AsideCard";
import Link from "next/link";
import {
  RiFacebookCircleFill,
  RiTwitterFill,
  RiTiktokFill,
  RiRedditFill,
} from "react-icons/ri";

function Aside() {
  return (
    <>
      <aside className=" flex flex-col bg-white rounded-lg overflow-hidden shadow-lg p-3">
        <div className="container mx-auto mb-4">
          <p className="text-gray-400 text-sm">Chosen by the editor</p>
          <p className="text-slate-900 font-bold text-lg">Editors Picks</p>
        </div>

        <div className="">
          <AsideCard />
          <AsideCard />
          <AsideCard />
          <AsideCard />
        </div>

        <div className="container mx-auto mb-4 mt-4">
          <p className="text-gray-400 text-sm">Follow me</p>
          <p className="text-slate-900 font-bold text-lg">Join Us</p>
        </div>

        <div className="hidden md:flex lg:flex-col justify-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 text-white bg-cyan-700 hover:bg-cyan-800 transition-all px-4 py-2 rounded-full"
          >
            <RiFacebookCircleFill className="text-xl" /> Facebook
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-white bg-cyan-600 hover:bg-cyan-700 transition-all px-4 py-2 rounded-full"
          >
            <RiTwitterFill className="text-xl" /> Twitter
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-white bg-black hover:bg-gray-800 transition-all px-4 py-2 rounded-full"
          >
            <RiTiktokFill className="text-xl" /> Tik Tok
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-white bg-amber-600 hover:bg-amber-700 transition-all px-4 py-2 rounded-full"
          >
            <RiRedditFill className="text-xl" /> Reddit
          </Link>
        </div>

        <div className="flex justify-center gap-2 md:hidden">
          <Link
            href="/"
            className="flex items-center gap-2 text-white bg-cyan-700 hover:bg-cyan-800 transition-all px-4 py-4 rounded-full"
          >
            <RiFacebookCircleFill className="text-xl" />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-white bg-cyan-600 hover:bg-cyan-700 transition-all px-4 py-4 rounded-full"
          >
            <RiTwitterFill className="text-xl" />{" "}
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-white bg-black hover:bg-gray-800 transition-all px-4 py-4 rounded-full"
          >
            <RiTiktokFill className="text-xl" />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-white bg-amber-600 hover:bg-amber-700 transition-all px-4 py-4 rounded-full"
          >
            <RiRedditFill className="text-xl" />
          </Link>
        </div>

        <div className="container px-4 md:px-0 max-w-sm md:max-w-2xl lg:max-w-6xl mx-auto my-8">
          <p className="text-slate-900 font-bold text-2xl">Topics</p>
        </div>

        <div class="flex flex-wrap gap-2 mb-8 lg:mb-0">
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #photography
          </span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #travel
          </span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #winter
          </span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #GamingCommunity
          </span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #Videojuegos
          </span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #GamersUnite
          </span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #Juegos
          </span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #GamerLife
          </span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #GamingNews
          </span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #Esports
          </span>
        </div>
      </aside>
    </>
  );
}

export default Aside;
