import type { Vaccine } from "./vaccine.models";
import type { Appointment } from "./appointment.models";
export interface Pet {

    id: number;
    name: string;
    species: string;

    // The ? symbol indicates that the property is optional.
    breed?: string;
    age?: number;
    weight?: number;
    allergies?: string;
    status?: string;

    vaccines?: Vaccine[];
    apointments?: Appointment[];
}