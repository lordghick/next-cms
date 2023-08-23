// Importaciones de Next
import Link from "next/link";
import Image from "next/image";

// Importaciones React Icons
import { RiArrowRightSLine } from "react-icons/ri";

// Importaciones de Public

import YouAlsoLikePic from "../../../public/youalsolike.jpg";


function YouALsoLikeCard() {
  return (
    <Link href="/">
      <div className="w-full bg-white shadow-md rounded-lg p-2 display flex flex-col md:flex-row items-center gap-2 mb-8">
        <Image
          src={YouAlsoLikePic}
          alt="Avatar of Jonathan Reinink"
          className="rounded-lg md:w-1/2"
        />

        <div className="md:w-1/2 flex flex-col gap-4 px-4 lg:pr-4">
          <span className="font-bold text-white bg-cyan-900 w-[70px] text-center rounded-xl uppercase text-xs px-2 py-1">
            Terror
          </span>

          <h2 className="text-slate-900 text-md font-semibold">
            Dead Space contará con un spin off de lo más inesperado
          </h2>

          <Link
            href="/"
            className="text-gray-400 font-medium hover:text-gray-500 transition-all flex items-center"
          >
            Continue reading <RiArrowRightSLine className="mt-1" />{" "}
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default YouALsoLikeCard;
