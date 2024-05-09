"use client";

import { Loader } from "@/app/_components/Loader";
import { Pagination } from "@/app/_components/PaginationClient";
import { PlanetCard } from "@/app/_components/PlanetCard";
import { usePlanetsStore } from "@/app/_store/storeProvider";

export const PlanetsContainer: React.FC = () => {
  const { planets, fetchPlanets } = usePlanetsStore((state) => state);

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 pt-36">
      {planets?.results?.length > 0 && (
        <Pagination
          current={planets?.current}
          previous={planets?.previous}
          next={planets?.next}
        />
      )}
      {planets?.error && <p className="text-red-500">{planets?.error}</p>}
      <div className="flex flex-wrap max-w-5xl justify-center">
        {planets.results.length > 0 ? (
          planets.results?.map((planet, idx) => (
            <PlanetCard planet={planet} key={idx} />
          ))
        ) : (
          <Loader />
        )}
      </div>
      <button
        className="link"
        onClick={() => fetchPlanets(planets.current)}
      >
        REFRESH DATA
      </button>
    </main>
  );
};
