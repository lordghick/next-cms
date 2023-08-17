import Aside from "./Aside";
import Card from "./Card";

async function InfiniteScrollMain({ articulos }) {
  console.log(`estoy en el scroll ahora -> ${articulos}`);
  return (
    <main className="container mx-auto max-w-sm md:max-w-2xl lg:max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-4 mb-12">
      {/* first column */}

      <div className="grid grid-cols-1 lg:grid-cols-2 col-span-2 gap-4">
        {articulos.map((articulo) => (
          <div key={articulo.id} className="col-span-1 flex">
            <Card articulo={articulo} />
          </div>
        ))}
      </div>

      <aside className="lg:col-start-3">
        <Aside />
      </aside>
    </main>
  );
}

export default InfiniteScrollMain;
