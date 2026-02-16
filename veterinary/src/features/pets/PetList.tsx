import { Link } from "react-router-dom";
import type { Pet } from "../../models/pet.models";
import PetCard from "./PetCard";

export default function PetList({ pets }: { pets: Pet[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 py-6">
      {pets.map((pet) => (
        <Link
          key={pet.id}
          to={`/pets/${pet.id}`}
          className="block"
        >
          <PetCard pet={pet} selected={false} />
        </Link>
      ))}
    </div>
  );
}
