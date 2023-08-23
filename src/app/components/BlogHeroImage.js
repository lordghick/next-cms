// Importaciones de Next
import Image from "next/image";

// Importaciones de Public
import HeroImage from "../../../public/hero-image.jpg";

function BlogHeroImage() {
  return (
    <div className="w-full h-full p-2 bg-white rounded-lg mt-4 shadow-md relative">
      <Image
        src={HeroImage}
        alt="Avatar of Jonathan Reinink"
        className="w-full object-cover h-[80vh] rounded-lg"
      />
    </div>
  );
}

export default BlogHeroImage;
