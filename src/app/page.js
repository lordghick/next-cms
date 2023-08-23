// Importaciones de Next

import Link from "next/link";

// Importaciones de Componentes
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import InfiniteScrollMain from "./components/InfiniteScrollMain";

// Importaciones React Icons

import { RiArrowRightSLine, RiSendPlaneFill, } from "react-icons/ri";

// Importacion de Data

import getPosts from "./getposts";

// Metadata

export const metadata = {
  title: "Home",
  description: "Home of the blog",
};


async function page() {
  const articulos = await getPosts();

  const articuloPortada = articulos[0];

  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />

      <div className="container max-w-sm md:max-w-2xl lg:max-w-6xl bg-white  mx-auto my-8 shadow-lg min-h-[450px] rounded-lg p-2">
        <ImageSlider articulo={articuloPortada} />
      </div>

      <div className="container px-4 md:px-0 max-w-sm md:max-w-2xl lg:max-w-6xl mx-auto mb-8">
        <p className="text-gray-400">See my latest post</p>
        <p className="text-slate-900 font-bold text-2xl">Latest Post</p>
      </div>

      {/* main */}

      <InfiniteScrollMain articulos={articulos} />

      <div className="container max-w-6xl mx-auto flex items-center justify-center pb-8">
        <Link
          href="/"
          className="flex items-center gap-1 font-medium bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-400 transition-colors"
        >
          Older Post <RiArrowRightSLine />
        </Link>
      </div>

      <div className="shadow-lg container max-w-6xl mx-auto min-h-[300px] mb-8 bg-gray-500 rounded-lg border-8 border-white flex flex-col items-center justify-center gap-6 text-yellow-500 uppercase font-bold">
        <h4 className="text-2xl ">Stay in the Loop</h4>
        <p className="text-md text-center">
          Subscribe to my newsletter for all the latest updates
        </p>

        <Link
          href="/"
          className="flex items-center gap-1 font-medium bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-400 transition-colors"
        >
          Subscribe <RiSendPlaneFill />
        </Link>
      </div>

      <Footer/>

    </div>
  );
}

export default page;
