import { Loader } from "@/app/_components/Loader";
import { Pagination } from "@/app/_components/PaginationServer";
import { PlanetCard } from "@/app/_components/PlanetCard";
import { StarshipCard } from "@/app/_components/StarshipCard";
import { PaginatedSSR, Starship } from "@/app/_store/types";

export default async function Starships({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  const page = searchParams.page ? searchParams.page[0] : "1"

  let starships: PaginatedSSR<Starship> | null = null;

  try {
    const starshipsR = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
    starships = await starshipsR.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 pt-36">
      {starships && starships?.results?.length > 0 && (
        <Pagination
          current={page}
          previous={starships?.previous ? starships?.previous?.slice(-1) : null}
          next={starships?.next ? starships?.next?.slice(-1) : null}
        />
      )}
      {!starships && <p className="text-red-500">Failed to fetch data!</p>}
      <div className="flex flex-wrap max-w-5xl justify-center">
        {starships ? (
          starships.results?.map((starship, idx) => (
            <StarshipCard starship={starship} key={idx} />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </main>
  );
}
