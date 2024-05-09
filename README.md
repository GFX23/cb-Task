# SWAPI App - cbData Task

## Description:

1. **Použij Next.js a Typescript** - ✅
2. **Vytvoř stránku /planets** - ✅
   - Pro získání seznamu použij SWAPI API - ✅
   - Přidej state pro celou aplikaci, tak aby jej každá komponenta mohla použít - ✅
     - Použit Zustand + Context - state je accessible přes usePlanetsStore v client componentách
     - [Zustand](https://github.com/pmndrs/zustand)
   - Použij silně typové objekty - ✅
   - Použij Styled Components - ❌
     - Použil jsem Tailwind CSS - na tyto krátké tasky se mi s ním lépe dělá, ale jako kompenzaci jsem přidal SSR verzi pro Starships.

3. **Přidej další funkce** - ✅
   - Ošetři stavy aplikace při načítání aplikace a chyb při komunikaci s API - ✅
     - Ošetřen loading, error jak na clientovi tak na servru - na clientovi ukládám do statu, na servru pouze ošetřuji
   - Implementuj stránkování - ✅
     - Přidány dvě verze pro clienta i pro SSR - pro clienta použij state přímo v komponentě, pro server použity query params
   - Tlačítko na refresh dat - ✅
     - Na clientovi přidáno, na serveru stačí obnovit

4. **Nasaď aplikaci tak, aby byla dostupná z internetu** - ✅
   - Deploy na Vercel
