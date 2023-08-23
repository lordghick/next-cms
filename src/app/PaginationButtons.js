import Link from 'next/link'

import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

function PaginationButtons() {
  return (
    <div className="container max-w-6xl mx-auto flex items-center justify-center gap-2 pb-8">
        <Link
          href="/"
          id="prevButton"
          className="capitalize flex items-center gap-1 font-medium bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-400 transition-colors"
        >
          <RiArrowLeftSLine/> Prev Page 
        </Link>

        <Link
          href="/"
          id="nextButton"
          className="capitalize flex items-center gap-1 font-medium bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-400 transition-colors"
        >
          Next Page <RiArrowRightSLine />
        </Link>      
      </div>
  )
}

export default PaginationButtons