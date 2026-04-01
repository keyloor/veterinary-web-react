import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PawPrint, CalendarCheck, User, Dog, Cat } from "lucide-react";
import { getPets } from "../../service/pets.service";
import type { Pet } from "../../models/pet.models";

/**
 * Home Component
 * The main landing page for the user after logging in.
 * Shows a summary of the client's pets, the next appointment, 
 * and quick access links to other sections of the app.
 */
export default function Home() {
  // Total number of pets registered to this client
  const [totalPets, setTotalPets] = useState(0);
  // Name of the client, loaded from localStorage
  const [clientName, setClientName] = useState("");
  // Mock data for the next appointment date/time
  const nextAppointment = "15 de marzo de 2026 - 3:00 PM";
  // Basic info of the pet that has the next appointment
  const [nextAppointmentPet, setNextAppointmentPet] = useState<Pick<Pet, "name" | "species"> | null>(null);

  // State to control a subtle "waving" animation for icons
  const [wave, setWave] = useState(false);

  // Load the list of pets and find if there's a scheduled appointment (mocked for 'Jacko')
  useEffect(() => {
    getPets()
      .then((pets) => {
        setTotalPets(pets.length);

        const jacko = pets.find((p) => p.name?.toLowerCase() === "jacko");
        if (jacko) {
          setNextAppointmentPet({ name: jacko.name, species: jacko.species });
        }
      })
      .catch((err) => console.error("Error fetching pets:", err));
  }, []);

  // Retrieve client information from localStorage or clientProfile.json to personalize the greeting
  useEffect(() => {
    const loadClientName = async () => {
      // Read from Local Storage
      const savedProfile = localStorage.getItem("clientProfile");
      if (savedProfile) {
        try {
          const parsed = JSON.parse(savedProfile);
          const storedName = parsed?.name ?? "";
          if (storedName) {
            setClientName(storedName);
            return;
          }
        } catch {
          // If it's in blank, read JSON
        }
      }

      // Read from JSON
      try {
        const res = await fetch("/data/clientProfile.json");
        if (!res.ok) return;

        const json = await res.json();
        setClientName(json?.name ?? "");
      } catch {
        setClientName("");
      }
    };

    loadClientName();
  }, []);

  // Interval to toggle the wave animation every 1.2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setWave((prev) => !prev);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col py-16">
      <div className="container mx-auto px-6 flex-1">
        {/* Welcome Hero Section: Salutes the user and shows a dynamic icon animation */}
        <section className="mb-12">
          <div
            className="
              group
              bg-white/70 backdrop-blur-xl p-8 rounded-3xl
              shadow-lg border border-teal-100
              flex flex-col md:flex-row items-center gap-8
              transition-all duration-500
              hover:shadow-2xl hover:-translate-y-1
            "
          >


            <div
              className="
                flex-1
                transition-all duration-500
                group-hover:translate-x-1
              "
            >
              <h1 data-cy="welcome-title" className="text-4xl font-extrabold text-slate-800 mb-3 flex flex-wrap items-center gap-3">

                <span>¡Hola,</span>

                <span>
                  Bienvenida{clientName ? ` ${clientName}` : ""} a
                </span>

                <span className="tracking-tight">
                  Vet
                  <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                    Care
                  </span>
                </span>

              </h1>

              <p className="text-slate-600 text-lg">
                Aquí tienes un resumen rápido de la información de tus mascotas.
              </p>
            </div>


            <div className="flex-1 flex justify-center">

              <div className="relative flex items-center justify-center gap-6">

                <div
                  className={`bg-teal-50 p-6 rounded-3xl shadow-md transition-transform duration-300 ${wave ? "rotate-6 -translate-y-2" : "-rotate-6"
                    }`}
                >
                  <Dog size={70} className="text-teal-600" />
                </div>

                <div
                  className={`bg-emerald-50 p-6 rounded-3xl shadow-md transition-transform duration-300 ${wave ? "-rotate-6 translate-y-2" : "rotate-6"
                    }`}
                >
                  <Cat size={70} className="text-emerald-600" />
                </div>

                <PawPrint
                  size={28}
                  className={`absolute -top-6 left-12 text-teal-400 transition-all duration-500 ${wave ? "rotate-12 scale-110" : "-rotate-12"
                    }`}
                />

                <PawPrint
                  size={26}
                  className={`absolute -bottom-6 left-10 text-teal-300 transition-all duration-500 ${wave ? "-rotate-6 translate-y-1" : "rotate-6"
                    }`}
                />

                <PawPrint
                  size={26}
                  className={`absolute -top-5 right-14 text-emerald-400 transition-all duration-500 ${wave ? "rotate-45 scale-110" : "-rotate-12"
                    }`}
                />

                <PawPrint
                  size={30}
                  className={`absolute -bottom-6 right-10 text-emerald-300 transition-all duration-500 ${wave ? "-rotate-12 scale-105" : "rotate-12"
                    }`}
                />

              </div>

            </div>

          </div>
        </section>

        {/* Stats Section: Quick glance at the count of pets and next appointment details */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">

          <div className="p-6 rounded-3xl bg-white shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-teal-100 text-teal-600 p-3 rounded-2xl">
                <PawPrint size={28} />
              </div>
              <h2 className="text-xl font-bold text-slate-700">
                Mascotas Registradas
              </h2>
            </div>

            <p data-cy="pet-count" className="text-3xl font-extrabold text-slate-800">
              {totalPets}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-teal-100 text-teal-600 p-3 rounded-2xl">
                <CalendarCheck size={28} />
              </div>
              <h2 className="text-xl font-bold text-slate-700">
                Próxima Cita
              </h2>
            </div>

            <p data-cy="next-appointment" className="text-lg font-semibold text-slate-800">
              {nextAppointmentPet
                ? `${nextAppointmentPet.name} (${nextAppointmentPet.species}) - ${nextAppointment}`
                : nextAppointment}
            </p>
          </div>
        </section>

        {/* Quick Links Section: Easy navigation to the main areas of the application */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Accesos Rápidos
          </h2>

          <div className="grid md:grid-cols-2 gap-8">


            <Link
              to="/pets"
              data-cy="link-pets"
              className="
                group relative overflow-hidden
                flex items-center justify-between
                p-6 rounded-3xl
                bg-gradient-to-r from-teal-500 to-emerald-500
                text-white font-bold
                shadow-lg
                transition-all duration-300
                hover:scale-[1.03] hover:shadow-2xl
              "
            >
              <span className="flex items-center gap-3 relative z-10">
                <PawPrint
                  size={24}
                />
                Mis Mascotas
              </span>

              <span className="text-xl group-hover:translate-x-1 transition-transform">
                →
              </span>


              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>


            <Link
              to="/profile"
              data-cy="link-profile"
              className="
                group relative overflow-hidden
                flex items-center justify-between
                p-6 rounded-3xl
                border border-teal-500
                text-teal-600 font-bold
                bg-white
                shadow-md
                transition-all duration-300
                hover:scale-[1.03] hover:shadow-xl hover:bg-teal-50
              "
            >
              <span className="flex items-center gap-3">
                <User
                  size={24}
                />
                Mi Perfil
              </span>

              <span className="text-xl group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>

          </div>
        </section>

      </div>
    </div>
  );
}