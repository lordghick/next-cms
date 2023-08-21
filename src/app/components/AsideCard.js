import Link from "next/link";

async function AsideCard({articulo}) {

  return (
    <Link href="/">
      <div className="flex items-center justify-evenly lg:justify-between hover:bg-gray-200 transition-all p-4 rounded-lg">
        <img
          className="w-24 h-24 rounded-full mr-2 object-cover border-4 border-white"
          src="https://aishlatino.com/wp-content/uploads/2021/11/que-tipo-de-persona-te-gustaria-ser-730x411-SP.jpg"
          alt="Avatar of Jonathan Reinink"
        />

        <div className="flex flex-col gap-2">
          <span className="font-bold text-white bg-cyan-900 min-w-[70px] max-w-[100px] text-center rounded-xl uppercase text-[8px] px-2 py-1">
          {articulo.categories}
          </span>
          <h3 className="text-slate-900 text-[12px] font-semibold">
            {articulo.title}
          </h3>

          <div className="text-sm flex items-center gap-1 text-[10px]">
            <p className="text-gray-600 leading-none">
              by <span className="font-bold">{articulo.user}</span>
            </p>
            <p className="text-gray-600">Aug 18, 2022</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default AsideCard;
