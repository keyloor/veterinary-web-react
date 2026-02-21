import type { Pet } from "../models/pet.models";

const PETS_URL = "../../data/pets.json";

export async function getPets(): Promise<Pet[]> {

    const response = await fetch(PETS_URL);

    if (!response.ok) {
        throw new Error(
            `No se pudo cargar pets.json (status ${response.status})`
        );
    }

    const data = await response.json();
    console.log("Mascotas cargadas", data);

    return data as Pet[];
}

export async function getPetById(id: string): Promise<Pet | null> {

    const pets = await getPets();

    const found = pets.find((p) => String(p.id) === String(id));

    return found ?? null;
}
