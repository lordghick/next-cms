// Importaciones de Next
import Link from "next/link";
import Image from "next/image";

// Importaciones de Componentes
import BtnContinue from "./BtnContinue";

// Importaciones de Public
import coverImage from "../../../public/9ab13ffeb27edbe7cfdbe08efb61abf927c4d370-scaled.jpg";
import profilePic from "../../../public/chica.jpg";
import instagramIcon from "../../../public/ig.webp";
import facebookIcon from "../../../public/facebook.webp";
import twitterIcon from "../../../public/Twitter.jpg";

export default async function Card({ articulo }) {
  let excerpt = { __html: articulo.excerpt };
  return (
    <Link
      href={{
        pathname: `/blog/${articulo.slug}`,
        query: articulo.slug
      }}
      className="flex items-center justify-center min-h-[550px]"
    >
      <div className="w-full h-full flex flex-col rounded-lg overflow-hidden shadow-lg p-3 bg-white hover:bg-gray-100 transition-color duration-300">
        <div className="flex w-full rounded-lg md:min-h-1/2 lg:min-h-[200px]">
          <Image
            src={coverImage}
            alt=""
            className="flex w-full rounded-lg object-fill"
          />
        </div>

        <div className="py-4 pl-20 pr-4 relative flex flex-col justify-between h-full ">
          <h3 className="font-bold text-lg mb-2 capitalize">{articulo.title}</h3>

          <div className="text-sm my-4">
            <p className="text-gray-600 leading-none">
              by <span className="font-bold">{articulo.user}</span>
            </p>
            <p className="text-gray-600">Aug 18, 2022</p>
          </div>

          <p
            dangerouslySetInnerHTML={excerpt}
            className="text-gray-400 text-md text-justify pb-4"
          ></p>

          <BtnContinue slug={articulo.slug}  />

          <div className="flex flex-col items-center gap-2 absolute top-0 left-0 pl-4 mt-[-24px]">
            <Link href="/">
              <Image
                src={profilePic}
                alt=""
                className="w-14 h-14 rounded-full mr-2 object-cover border-4 border-white"
              />
            </Link>

            <Link href="/">
              <Image
                src={instagramIcon}
                alt=""
                className="w-10 h-10 rounded-full mr-2 object-cover border-2 border-white"
              />
            </Link>
            <Link href="/">
              <Image
                src={facebookIcon}
                alt=""
                className="w-10 h-10 rounded-full mr-2 object-cover border-2 border-white"
              />
            </Link>

            <Link href="/">
              <Image
                src={twitterIcon}
                alt=""
                className="w-10 h-10 rounded-full mr-2 object-cover border-2 border-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}
