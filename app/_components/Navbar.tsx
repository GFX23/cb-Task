import { MAIN_ROUTES } from "@/app/_config/config";
import Image from "next/image";
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <div className="fixed inset-0 border-b-2 border-blue-300 h-[100px] bg-stone-700 flex w-full justify-center items-center bg-wblue-50">
      <div className="max-w-5xl px-8 flex sm:justify-between justify-center items-center w-full">
        <Link href="/" >
        <div className="w-[80px] h-[80px] relative sm:flex hidden">
          <Image
            src="/star-wars.svg"
            alt="logo of starwars"
            fill
            sizes="100px"
            className="w-full h-auto object-contain"
          />
        </div>
        </Link>

        <div className="flex sm:gap-6 gap-2">
          <Link href={MAIN_ROUTES.HOME} className="link">
            Home
          </Link>
          <Link href={MAIN_ROUTES.PLANETS} className="link">
            Planets
          </Link>
          <Link href={MAIN_ROUTES.STARSHIPS} className="link flex gap-2">
            <p>Starships</p>
            <p className="sm:flex hidden">SSR</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
