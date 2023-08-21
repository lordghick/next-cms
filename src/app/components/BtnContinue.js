import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

function BtnContinue() {
  return (
    <Link
      title="continue reading"
      href="/blog"
      className="font-medium bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-400 transition-colors flex gap-4 items-center max-w-[200px]"
    >
      Continue reading <RiArrowRightSLine className="mt-1" />
    </Link>
  );
}

export default BtnContinue;
