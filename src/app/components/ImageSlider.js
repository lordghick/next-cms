import Link from "next/link";
import React from "react";
import BtnContinue from "./BtnContinue";


export default async function ImageSlider({ articulo }) {
  let excerpt = { __html: `${articulo.excerpt}` }
  return (
      <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-8">
        <div className="w-full lg:w-1/2 h-[300px] md:min-h-[450px]">
          <Link href="/">
            <img
              src="https://www.imagethread.com/koken/storage/cache/images/000/033/marker-landscape-d10,medium.2x.1475998338.jpg"
              alt=""
              className="rounded-lg w-full h-[300px] md:min-h-[450px] object-cover"
            />
          </Link>
        </div>

        <div className="lg:w-1/2 min-h-[450px] flex flex-col justify-evenly px-4 lg:pr-4">
          <span
            id="categoria"
            className="font-bold text-white bg-cyan-900 min-w-[70px] max-w-[100px] text-center rounded-xl uppercase text-xs px-2 py-1"
          >
            {articulo.categories}
          </span>

          <h2
            id="titulo"
            className="text-slate-900 text-2xl md:text-4xl font-semibold"
          >
            {articulo.title}
          </h2>

          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-2 object-cover border-4 border-blue-500"
              src="https://aishlatino.com/wp-content/uploads/2021/11/que-tipo-de-persona-te-gustaria-ser-730x411-SP.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <p id="autor" className="text-gray-600 leading-none">
                by <span className="font-bold">{articulo.user}</span>
              </p>
              <p id="date" className="text-gray-600">test date</p>
            </div>
          </div>

          <p dangerouslySetInnerHTML={excerpt}
            id="sinopsis"
            className="text-gray-400 text-lg font-semibold pb-4"
          >
          </p>

          <BtnContinue/>
        </div>
      </div>
  );
}


