// Importaciones de Next
import Image from "next/image";
import Link from "next/link";

// Importaciones Public

import profilePic from "../../../public/chica.jpg";

async function AsideCard({ articulo }) {
  return (
    <Link
      href="/"
      className="flex items-center justify-between lg:justify-between hover:bg-gray-300 transition-all p-4 rounded-lg"
    >
      <Image
        src={profilePic}
        alt="Avatar of Jonathan Reinink"
        className="w-24 h-24 rounded-full mr-2 object-cover border-4 border-blue-500"
      />

      <div className="flex flex-col gap-2 w-3/4 lg:w-2/3 pl-4 lg:pl-0">
        <span className="font-bold text-white bg-blue-500 min-w-[70px] max-w-[100px] text-center rounded-xl uppercase text-[8px] px-2 py-1">
          {articulo.categories}
        </span>
        <h3 className="text-slate-900 text-[12px] font-semibold capitalize">
          {articulo.title}
        </h3>

        <div className="text-sm flex items-center gap-1 text-[10px]">
          <p className="text-gray-600 leading-none">
            by <span className="font-bold">{articulo.user}</span>
          </p>
          <p className="text-gray-600">Aug 18, 2022</p>
        </div>
      </div>
    </Link>
  );
}

export default AsideCard;
