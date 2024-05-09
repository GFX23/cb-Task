import { Starship } from "@/app/_store/types";


type Props = {
  starship: Starship;
}

export const StarshipCard: React.FC<Props> = ({starship}) => {
  return (
    <div className="flex flex-col max-w-[500px] w-full sm:w-fit items-center bg-stone-800 justify-center p-4 m-4 border-2 border-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{starship.name}</h2>
      <p className="text-center text-blue-300">Model: {starship.model}</p>
      <p className="text-center text-blue-300">Manufacturer: {starship.manufacturer}</p>
      <p className="text-center text-blue-300">Cargo cap.: {starship.cargo_capacity}</p>
      <p className="text-center underline font-bold pt-2">Cost: {starship.cost_in_credits} ᖬ</p>
    </div>
  );
}