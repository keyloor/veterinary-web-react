import { Link } from "react-router-dom";
import type { Pet } from "../../models/pet.models";
import PetCard from "./PetCard";

export default function PetList({ pets }: { pets: Pet[] }) {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <Link key={pet.id} to={`/pets/${pet.id}`} className="block h-full">
            <PetCard pet={pet} />
          </Link>
        ))}
      </div>
    </div>
  );
}

