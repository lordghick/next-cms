"use client";
import Aside from "./Aside";
import Card from "./Card";

function InfiniteScrollMain() {
  return (
    <main className="container max-w-sm md:max-w-2xl lg:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-4 pb-8 ">
      {/* first column */}

      <div className="col-span-1 col-start-1 row-start-1 md:col-start-1 md:row-start-1 lg:col-start-1 lg:row-start-1 flex">
        <Card />
      </div>

      {/* second column */}

      <div className="col-span-1 col-start-1 row-star-2 md:col-start-2 md:row-start-1 lg:col-start-2 lg:row-start-1 flex">
        <Card />
      </div>

      {/* third column */}

      <div className="col-span-1 col-start-1 row-star-3 md:col-start-1 md:row-start-2 lg:col-start-1 lg:row-start-2 flex">
        <Card />
      </div>

      {/* four column */}

      <div className="col-span-1 col-start-1 row-star-4 md:col-start-2 md:row-start-2 lg:col-start-2 lg:row-start-2 flex">
        <Card />
      </div>

      {/* five column */}

      <div className="col-span-1 col-start-1 row-star-5 md:col-start-1 md:row-start-3 lg:col-start-1 lg:row-start-3 flex">
        <Card />
      </div>

      {/* six column */}

      <div className="col-span-1 col-start-1 row-star-4 md:col-start-2 md:row-start-3 lg:col-start-2 lg:row-start-3 flex">
        <Card />
      </div>

      <aside className="col-span-2 lg:col-span-1 lg:row-span-2 lg:flex">
        <Aside />
      </aside>
    </main>
  );
}

export default InfiniteScrollMain;
