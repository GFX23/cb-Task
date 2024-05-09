import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-36 px-4 pb-10">
      <p className="text-blue-300 text-2xl underline mb-8">
        cbData task - SWAPI APP
      </p>
      <p className="my-4">Aplikace je postavena na Next.js 14.2., má vyřešenou základní responzivitu ale design je velmi základní.</p>
      <div className="div">
        <p className="text-lg underline font-bold mt-4">Popis včetně původního zadání:</p>
        <p className="underline my-2">1. Použij Next.js a Typescript - ✅</p>
        <p className="underline my-2">2. Vytvoř stránku /planets - ✅</p>
        <div className="ml-4 mt-2">
          <p className="mt-4">
            2.1 - Pro získání seznamu použij SWAPI API - ✅
          </p>
          <p className="mt-4">
            2.2 - Přidej state pro celou aplikaci, tak aby jej každá komponenta
            mohla použít - ✅
          </p>
          <li className="pl-4">
            Použil jsem Zustand + Context - state je accessible přes
            usePlanetsStore v client componentách
          </li>
          <Link
            className="pl-4 mb-4 text-blue-300 underline"
            href="https://github.com/pmndrs/zustand"
          >
            Link na Zustand
          </Link>
          <p className="mt-4">2.3 - Použij silně typové objekty - ✅</p>
          <p className="mt-4">2.4 - Použij Styled Components - ❌</p>
          <li className="pl-4 mb-4">
            Použil jsem Tailwind CSS - na tyto krátké tasky se mi s ním lépe
            dělá, ale jako kompenzaci jsem přidal SSR verzi pro Starships.
            Případně dodělám.
          </li>
        </div>
        <p className="underline my-2">3. Přidej další funkce - ✅</p>
        <div className="ml-4 mt-2">
          <p>
            3.1 - Ošetři stavy aplikace při načítání aplikace a chyb při
            komunikaci s API - ✅
          </p>
          <li className="pl-4 mb-4">
            Ošetřen loading, error jak na clientovi tak na servru - na clientovi
            ukládám do statu, na servru pouze ošetřuji
          </li>
          <p>3.2 - Implementuj stránkování - ✅</p>
          <li className="pl-4 mb-4">
            Přidány dvě verze pro clienta i pro SSR - pro clienta použij state
            přímo v komponentě, pro server použity query params
          </li>
          <p>3.3 - Tlačítko na refresh dat - ✅</p>
          <li className="pl-4 mb-4">
            Na clientovi přidáno, na serveru stačí obnovit
          </li>
        </div>
          <p className="underline my-2">4 - Nasaď aplikaci tak, aby byla dostupná z internetu - ✅</p>
          <li className="pl-4">Deploy na Vercel</li>
      </div>
    </main>
  );
}
