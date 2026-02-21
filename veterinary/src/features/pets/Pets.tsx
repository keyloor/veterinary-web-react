import { useEffect, useState } from "react";
import PetList from "./PetList";
import type { Pet } from "../../models/pet.models";
import { getPets } from "../../service/pets.service";

/**
 * Pets Screen Component
 * Acts as the main page for displaying all pets.
 * It handles data fetching and shows a loading state before rendering the list.
 */
export default function Pets() {
    // 1. Local state to store the array of pets fetched from the service
    const [pets, setPets] = useState<Pet[]>([]);
    // 2. Local state to track whether the data is still loading
    const [loading, setLoading] = useState(true);

    // 3. useEffect runs once when the component mounts (empty dependency array [])
    useEffect(() => {
        getPets() // Call the service to fetch pets
            .then(setPets) // If successful, save the data into the 'pets' state
            .finally(() => setLoading(false)); // Finally, regardless of success/error, turn off the loading flag
    }, []);

    if (loading)
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading pets...
            </div>
        );

    return (
        <div>
            <PetList pets={pets} />
        </div>
    );
}
