// Importaciones de Next
import Link from "next/link";
import Image from "next/image";

// Importaciones de Componentes
import BlogHeroImage from "../../components/BlogHeroImage";
import YouALsoLikeCard from "../../components/YouALsoLikeCard";

// Importaciones React Icons
import {
  RiTimeLine,
  RiEyeLine,
  RiStarFill,
  RiStarHalfLine,
  RiFacebookFill,
  RiTwitterFill,
  RiTiktokFill,
  RiRedditFill,
  RiTelegramFill,
  RiDiscordFill,
} from "react-icons/ri";

// Importaciones React Icons
import profilePic from "../../../../public/chica.jpg";
// Importacion de Data

import getPosts from "../../getSinglePost";

async function page() {
  
  const articulos = await getPosts();

  return (
    <div className="bg-gray-200 flex flex-col">
      <div className="container mx-auto max-w-sm md:max-w-2xl lg:max-w-6xl">
        <div>
          <BlogHeroImage />

          <article className="flex flex-col items-center gap-4 my-4 max-w-6xl mx-auto bg-white p-10 lg:p-2 lg:py-8 rounded-lg shadow-md lg:pb-40">
            <Image
              src={profilePic}
              alt="Avatar of Jonathan Reinink"
              className="w-14 h-14 rounded-full mr-2 object-cover border-4 border-blue-500 shadow-lg"
            />

            <h1 className="text-slate-900 text-2xl md:text-4xl font-semibold text-center">
              {articulos.title}
            </h1>

            <p className="flex flex-col md:flex-row gap-2 items-center">
              by <span className="font-bold">Laura Dallas</span>Laura Dallas
              March 28, 2022 <RiEyeLine />
              <span className="font-bold">0 views</span>
              <RiTimeLine className="" /> 2 min
            </p>

            <div className="flex items-center text-yellow-500">
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarHalfLine />
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="flex items-center gap-2 text-white bg-cyan-700 hover:bg-cyan-800 transition-all p-2 rounded-full"
              >
                <RiFacebookFill className="text-lg" />
              </Link>

              <Link
                href="/"
                className="flex items-center gap-2 text-white bg-cyan-600 hover:bg-cyan-700 transition-all p-2 rounded-full"
              >
                <RiTwitterFill className="text-xl" />{" "}
              </Link>
              <Link
                href="/"
                className="flex items-center gap-2 text-white bg-black hover:bg-gray-800 transition-all p-2 rounded-full"
              >
                <RiTiktokFill className="text-xl" />
              </Link>
              <Link
                href="/"
                className="flex items-center gap-2 text-white bg-amber-600 hover:bg-amber-700 transition-all p-2 rounded-full"
              >
                <RiRedditFill className="text-xl" />
              </Link>
            </div>

            {/* Aqui comienza el Contenido del blog */}

            <section className="mt-4 w-full md:max-w-3xl mx-auto flex flex-col gap-8 text-lg">
              <p className="">
                Its sometimes her behaviour are contented. Do listening am
                eagerness oh objection collected. Together happy feelings
                continue juvenile had off one. Unknown may service subject her
                letters one bed.
              </p>

              <p>
                Oh acceptance apartments up sympathize astonished delightful.
                Waiting him new lasting towards. Continuing melancholy
                especially so to. Me unpleasing impossible in attachment
                announcing so astonished.
              </p>

              <p>
                Pianoforte solicitude so decisively unpleasing conviction is
                partiality he. Or particular so diminution entreaties oh do.
                Real he me fond show gave shot plan. Mean are sons too sold nor
                said. Son share three men power boy you
              </p>

              <h5 className="text-slate-900 text-xl md:text-2xl font-semibold self-start">
                Me unpleasing impossible
              </h5>

              <p>
                Assure polite his really and others figure though. Day age
                advantages end sufficient eat expression travelling
              </p>

              <div className="hidden md:flex">
                <iframe
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/jSxx5iM0Lq4"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen=""
                  className="mx-auto"
                />
              </div>

              <p>
                Pianoforte solicitude so decisively unpleasing conviction is
                partiality he. Or particular so diminution entreaties oh do.
                Real he me fond show gave shot plan. Mean are sons too sold nor
                said. Son share three men power boy you
              </p>
              <p>
                Pianoforte solicitude so decisively unpleasing conviction is
                partiality he. Or particular so diminution entreaties oh do.
                Real he me fond show gave shot plan. Mean are sons too sold nor
                said. Son share three men power boy you
              </p>
              <ul className="list-disc">
                <li>Real he me fond show gave shot plan</li>
                <li>Real he me fond show gave shot plan</li>
                <li>Real he me fond show gave shot plan</li>
              </ul>
              <p>
                Pianoforte solicitude so decisively unpleasing conviction is
                partiality he. Or particular so diminution entreaties oh do.
                Real he me fond show gave shot plan. Mean are sons too sold nor
                said. Son share three men power boy you
              </p>
              <p>
                Pianoforte solicitude so decisively unpleasing conviction is
                partiality he. Or particular so diminution entreaties oh do.
                Real he me fond show gave shot plan. Mean are sons too sold nor
                said. Son share three men power boy you
              </p>

              <div className="w-full min-h-[500px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2">
                <div className="bg-red-500 md:col-span-1 md:col-start-1 md:row-start-1 lg:col-span-2 lg:col-start-1 lg:row-start-1 overflow-hidden flex">
                  <div className="bg-[url(https://assetsio.reedpopcdn.com/How-to-beat-the-Hunter-boss-in-Dead-Space-cover.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp)] w-full h-full bg-no-repeat bg-cover"></div>
                </div>

                <div className="bg-yellow-500 md:col-span-1 md:col-start-2 md:row-start-1 lg:col-span-2 lg:col-start-3 lg:row-start-1 overflow-hidden flex">
                  <div className="bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7c_K7XJxA41JtQcVXm2P5PrWRSt60yT8ZAUsEbDCxvYYVcHu4HQ9USy_QgNt2HlRwf8&usqp=CAU)] w-full h-full bg-no-repeat bg-cover"></div>
                </div>

                <div className="bg-green-500 md:col-span-1 md:col-start-1 md:row-start-2 lg:col-span-2 lg:col-start-5 lg:row-start-1 overflow-hidden flex">
                  <div className="bg-[url(https://cdn1.epicgames.com/offer/4ec958d5e4b6429aadbc116cee0b6ea0/EGS_DeadSpace_MotiveStudio_S2_1200x1600-551c16d068cab45b02149e15a43c2413)] w-full h-full bg-no-repeat bg-cover"></div>
                </div>

                <div className="bg-blue-500 md:col-span-1 md:col-start-2 md:row-start-2 lg:col-span-3 lg:col-start-1 lg:row-start-2 overflow-hidden flex">
                  <div className="bg-[url(https://staticg.sportskeeda.com/editor/2023/02/03cf3-16752845127969-1920.jpg)] w-full h-full bg-no-repeat bg-cover"></div>
                </div>

                <div className="bg-violet-500 md:col-span-3 md:col-start-1 md:row-start-3 lg:col-span-3 lg:col-start-4 lg:row-start-2 overflow-hidden flex">
                  <div className="bg-[url(https://i.ytimg.com/vi/maWXi-AMLUQ/maxresdefault.jpg)] w-full h-full bg-no-repeat bg-cover"></div>
                </div>
              </div>

              <p>
                Pianoforte solicitude so decisively unpleasing conviction is
                partiality he. Or particular so diminution entreaties oh do.
                Real he me fond show gave shot plan. Mean are sons too sold nor
                said. Son share three men power boy you
              </p>
              <p>
                Pianoforte solicitude so decisively unpleasing conviction is
                partiality he. Or particular so diminution entreaties oh do.
                Real he me fond show gave shot plan. Mean are sons too sold nor
                said. Son share three men power boy you
              </p>

              <div className="flex flex-col gap-4 self-start xl:pl-44 mt-8">
                <p className="text-md text-gray-400">Share this article</p>

                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-white bg-blue-500 hover:bg-cyan-800 transition-all p-2 rounded-full"
                  >
                    <RiFacebookFill className="text-lg" />
                  </Link>

                  <Link
                    href="/"
                    className="flex items-center gap-2 text-white bg-cyan-600 hover:bg-cyan-700 transition-all p-2 rounded-full"
                  >
                    <RiTwitterFill className="text-xl" />{" "}
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-white bg-amber-600 hover:bg-amber-700 transition-all p-2 rounded-full"
                  >
                    <RiRedditFill className="text-xl" />
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-white bg-cyan-400 hover:bg-cyan-500 transition-all p-2 rounded-full"
                  >
                    <RiTelegramFill className="text-xl" />
                  </Link>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center md:gap-4 w-full">
                  <Image
                    src={profilePic}
                    alt="Avatar of Jonathan Reinink"
                    className="w-20 h-20 md:w-36 md:h-36 rounded-full mr-2 object-cover border-8 border-blue-500"
                  />

                  <div className="flex flex-col items-start gap-2 md:max-w-[400px]">
                    <p className="text-md text-gray-400 text-center md:text-start">
                      Writen by
                    </p>
                    <h5 className="text-2xl font-bold text-center md:text-start">
                      Metallica The Unforgiven
                    </h5>
                    <p className="text-md text-gray-400">
                      Together happy feelings continue juvenile had off one.
                      Unknown may service subject her letters one bed
                    </p>
                    <div className="flex items-center justify-center md:justify-end gap-4 text-sm font-medium">
                      <Link
                        href="/"
                        className="flex items-center gap-1 text-cyan-600"
                      >
                        <RiTwitterFill /> Twitter
                      </Link>
                      <Link
                        href="/"
                        className="flex items-center gap-1 text-blue-800"
                      >
                        <RiFacebookFill /> Facebook
                      </Link>
                      <Link
                        href="/"
                        className="flex items-center gap-1 text-violet-400"
                      >
                        <RiDiscordFill /> Discord
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap gap-2 mt-8">
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
            </section>
          </article>

          {/* you also like */}

          <div className="container px-4 md:px-0 max-w-sm md:max-w-xl lg:max-w-xl mx-auto my-8">
            <p className="text-gray-400">Before you go</p>
            <p className="text-slate-900 font-bold text-2xl">You also like</p>
          </div>

          <div className="flex flex-col p-2  max-w-sm md:max-w-2xl lg:max-w-2xl mx-auto mb-8">
            <YouALsoLikeCard />
            <YouALsoLikeCard />
            <YouALsoLikeCard />
            <YouALsoLikeCard />
            <YouALsoLikeCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
