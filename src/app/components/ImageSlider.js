import Link from "next/link";
import Image from "next/image";
import BtnContinue from "./BtnContinue";
import coverImage from "../../../public/9ab13ffeb27edbe7cfdbe08efb61abf927c4d370-scaled.jpg";
import profilePic from '../../../public/chica.jpg'

export default async function ImageSlider({ articulo }) {
  let excerpt = { __html: `${articulo.excerpt}` };
  return (
    <Link
      href={`/blog/${articulo.slug}`}
      className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-8"
    >
      <div className="w-full lg:w-1/2 h-[300px] md:min-h-[450px]">
        <Image
          src={coverImage}
          alt=""
          className="rounded-lg w-full h-[300px] md:min-h-[450px] object-cover"
        />
      </div>

      <div className="lg:w-1/2 min-h-[450px] flex flex-col justify-evenly px-4 lg:pr-4">
        
        <span
          id="categoria"
          className="font-bold text-white bg-blue-500 min-w-[70px] max-w-[100px] text-center rounded-xl uppercase text-xs px-2 py-1"
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
          <Image
            src={profilePic}
            alt=""
            className="w-10 h-10 rounded-full mr-2 object-cover border-4 border-blue-500"
          />
          <div className="text-sm">
            <p id="autor" className="text-gray-600 leading-none">
              by <span className="font-bold">{articulo.user}</span>
            </p>
            <p id="date" className="text-gray-600">
              test date
            </p>
          </div>
        </div>

        <p
          dangerouslySetInnerHTML={excerpt}
          id="sinopsis"
          className="text-gray-400 text-lg font-semibold pb-4"
        ></p>

        <BtnContinue slug={articulo.slug} />
      </div>
    </Link>
  );
}
