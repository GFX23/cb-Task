import { usePlanetsStore } from "@/app/_store/storeProvider";
import cs from "classnames";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

type Props = {
  previous: string | null | undefined;
  next: string | null | undefined;
  current: string | undefined;
}

export const Pagination: React.FC<Props> = ({previous, next, current}) => {

  const { fetchPlanets } = usePlanetsStore(
    (state) => state
  );

  return (
    <div className="flex items-center">
        <button disabled={!previous} className={cs("flex items-center text-sm", !previous && "text-stone-600")} onClick={() => fetchPlanets(previous ? previous : undefined)}>
          PREV <BiChevronLeft className={cs(previous ? "fill-white" : "fill-stone-600")} size={30} />
        </button>
        <p className="text-sm text-blue-300">PAGE: {current?.slice(-1)}</p>
        <button disabled={!next} className={cs("flex items-center text-sm", !next && "text-stone-600")} onClick={() => fetchPlanets(next ? next : undefined)}>
          <BiChevronRight className={cs(previous ? "fill-white" : "fill-stone-600")} size={30} /> NEXT
        </button>
      </div>
  );
}