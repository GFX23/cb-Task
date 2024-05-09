import cs from "classnames";
import Link from "next/link";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

type Props = {
  previous: string | null;
  next: string | null;
  current: string;
}

export const Pagination: React.FC<Props> = ({previous, next, current}) => {

  return (
    <div className="flex items-center">
        <Link href={{query: {page: previous ? previous : current}}} className={cs("flex items-center text-sm", !previous && "text-stone-600 pointer-events-none aria-disabled:true")} >
          PREV <BiChevronLeft className={cs(previous ? "fill-white" : "fill-stone-600")} size={30} />
        </Link>
        <p className="text-sm text-blue-300">PAGE: {current}</p>
        <Link href={{query: {page: next ? next : current}}} className={cs("flex items-center text-sm", !next && "text-stone-600 pointer-events-none aria-disabled:true")}>
          <BiChevronRight className={cs(previous ? "fill-white" : "fill-stone-600")} size={30} /> NEXT
        </Link>
      </div>
  );
}