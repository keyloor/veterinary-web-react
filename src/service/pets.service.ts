import type { Pet } from "../models/pet.models";

/**
 * Base URL where the mock JSON data for pets is located.
 */
const PETS_URL = "/data/pets.json";

/**
 * Fetches the entire list of pets from the local JSON file.
 * Returns a Promise that resolves to an array of Pet objects.
 */
export async function getPets(): Promise<Pet[]> {
    // 1. Fetch the data from the URL using the browser's built-in fetch API
    const response = await fetch(PETS_URL);

    if (!response.ok) {
        throw new Error(
            `Could not load pets.json (status ${response.status})`
        );
    }

    // 2. Parse the raw JSON text into a JavaScript object/array
    const data = await response.json();
    console.log("Pets loaded.", data);

    // 3. Return the data, explicitly casting it to the Pet[] type
    return data as Pet[];
}

/**
 * Fetches a single pet by its unique ID.
 * Returns a Promise that resolves to a Pet object if found, or null if not found.
 */
export async function getPetById(id: string): Promise<Pet | null> {
    // 1. Request the full list of pets first
    const pets = await getPets();

    // 2. Use the array .find() method to search for the specific pet ID
    // We convert both IDs to String to ensure strict equality (===) works even if one is a Number.
    const found = pets.find((p) => String(p.id) === String(id));

    // 3. Return the found pet, or fallback to null using the nullish coalescing operator (??)
    return found ?? null;
}
