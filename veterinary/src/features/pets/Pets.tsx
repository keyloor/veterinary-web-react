import { useEffect, useState } from "react";
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
