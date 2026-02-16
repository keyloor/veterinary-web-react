/*import { useEffect, useState } from "react";
import PetList from "./PetList";
import type { Pet } from "../../models/pet.models";
import { getPets } from "../../service/pets.service";

export default function Pets() {

    const [pets, setPets] = useState<Pet[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPets()
            .then(setPets)
            .finally(() => setLoading(false));
    }, []);

    if (loading)
        return (
            <div className="min-h-screen flex items-center justify-center">
                Cargando mascotas...
            </div>
        );

    return (
        <div>
            <PetList pets={pets} />
        </div>
    );
}
 */

import { useEffect, useState } from "react";
import PetList from "./PetList";
import type { Pet } from "../../models/pet.models";
export default function Pets() {

  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const examples: Pet[] = [
      {
        id: 1,
        name: "Tessa",
        species: "Perro",
        breed: "Chihuahua",
        age: 3,
      },
      {
        id: 2,
        name: "Luna",
        species: "Gato",
        breed: "Siamese",
        age: 2,
      },
    ];

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPets(examples);
  }, []);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        My Pets
      </h1>

      <PetList pets={pets} />
    </div>
  );
}
