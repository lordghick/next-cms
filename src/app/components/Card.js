import Link from "next/link";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import BtnContinue from "./BtnContinue";

export default async function Card({articulo}) {
  console.log(`titulo nuevo: ${articulo.title}`)
  let excerpt = { __html: `${articulo.excerpt.rendered}` }
  return (
    <div className="flex flex-col justify-between min-h-[600px] max-h-[600px]">
      <div className="w-full h-full flex flex-col rounded-lg overflow-hidden shadow-lg p-3 bg-white hover:bg-gray-300 transition-color cursor-pointer duration-300">
        <img
          className="w-full rounded-lg min-h-[250px]"
          src="https://www.imagethread.com/koken/storage/cache/images/000/033/marker-landscape-d10,medium.2x.1475998338.jpg"
          alt="Sunset in the mountains"
        />
        <div className="py-4 pl-20 pr-4 relative flex flex-col justify-between">
          <h3 className="font-bold text-xl mb-2">{articulo.title.rendered}</h3>

          <div className="text-sm my-4">
            <p className="text-gray-600 leading-none">
              by <span className="font-bold">Laura Adans</span>
            </p>
            <p className="text-gray-600">Aug 18, 2022</p>
          </div>

          <div></div>

          <p dangerouslySetInnerHTML={excerpt} className="text-gray-400 text-md text-justify pb-4">
        
          </p>

          <BtnContinue/>

          <div className="flex flex-col items-center gap-2 absolute top-0 left-0 pl-4 mt-[-24px]">
            <img
              className="w-14 h-14 rounded-full mr-2 object-cover border-2 border-white"
              src="https://aishlatino.com/wp-content/uploads/2021/11/que-tipo-de-persona-te-gustaria-ser-730x411-SP.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <Link href="/">
              <img
                className="w-10 h-10 rounded-full mr-2 object-cover border-2 border-white"
                src="https://thumbs.dreamstime.com/b/logo-de-instagram-retocado-para-web-e-impresi%C3%B3n-logotipo-redondeado-con-fondo-blanco-transparente-uso-o-165758567.jpg"
              />
            </Link>
            <Link href="/">
              <img
                className="w-10 h-10 rounded-full mr-2 object-cover border-2 border-white"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
              />
            </Link>

            <Link href="/">
              <img
                className="w-10 h-10 rounded-full mr-2 object-cover border-2 border-white"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Reddit_Logo_Icon.svg/1200px-Reddit_Logo_Icon.svg.png"
              />
            </Link>
          </div>
        </div>

        <div classNane="px-6 pt-4 pb-2 hidden xl:flex">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
}
