// Importaciones de Next
import Link from "next/link";

// Importaciones de Componentes
import BackToTopButton from "./BackToTopButton";

// Importaciones React Icons
import {
    RiFacebookCircleFill,
    RiTwitterFill,
    RiTiktokFill,
    RiRedditFill,
  } from "react-icons/ri";

function Footer() {
  return (
    <footer className="bg-white min-h-[100px] w-full border-2 flex items-center justify-center px-4">
        <div className="container max-w-6xl mx-auto flex items-center justify-between text-sm text-slate-500">
          <p className="text-sm">
            © 2023 FrontEnd by Freddy S, BackEnd by Leonardo L
          </p>

          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-slate-700 transition-all">
              <RiFacebookCircleFill className="text-xl" />
            </Link>
            <Link href="/" className="hover:text-slate-700 transition-all">
              <RiTwitterFill className="text-xl" />
            </Link>
            <Link href="/" className="hover:text-slate-700 transition-all">
              <RiTiktokFill className="text-xl" />
            </Link>
            <Link href="/" className="hover:text-slate-700 transition-all">
              <RiRedditFill className="text-xl" />
            </Link>
          </div>

          <BackToTopButton />
        </div>
      </footer>
  )
}

export default Footer