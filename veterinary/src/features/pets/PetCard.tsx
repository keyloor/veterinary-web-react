import type { Pet } from "../../models/pet.models";
import { PawPrint, Dog, Cat, Bird, Fish, Rabbit, Heart } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  pet: Pet;
  selected?: boolean;
};

function getPetIcon(species?: string) {
  switch (species?.toLowerCase()) {
    case "dog":
      return <Dog size={30} />;
    case "cat":
      return <Cat size={30} />;
    case "bird":
      return <Bird size={30} />;
    case "fish":
      return <Fish size={30} />;
    case "rabbit":
      return <Rabbit size={30} />;
    default:
      return <PawPrint size={30} />;
  }
}

function HealthIndicator({ status }: { status?: string }) {
  const normalized = status?.toLowerCase();

  const config = (() => {
    switch (normalized) {
      case "healthy":
        return {
          label: "Healthy",
          color: "text-emerald-500",
          bg: "bg-emerald-50",
          scale: [1, 1.1, 1],
          duration: 2,
        };

      case "in treatment":
        return {
          label: "In treatment",
          color: "text-amber-500",
          bg: "bg-amber-50",
          scale: [1, 1.2, 1],
          duration: 1.2,
        };

      case "critical":
        return {
          label: "Critical",
          color: "text-red-500",
          bg: "bg-red-50",
          scale: [1, 1.3, 1],
          duration: 0.6,
        };

      default:
        return {
          label: "No data",
          color: "text-slate-400",
          bg: "bg-slate-100",
          scale: [1, 1, 1],
          duration: 1,
        };
    }
  })();

  return (
    <div className={`mt-4 flex items-center gap-2 px-3 py-2 rounded-lg ${config.bg}`}>
      <motion.div
        animate={{ scale: config.scale }}
        transition={{
          repeat: Infinity,
          duration: config.duration,
          ease: "easeInOut",
        }}
        className={config.color}
      >
        <Heart size={16} />
      </motion.div>

      <span className={`text-xs font-semibold ${config.color}`}>
        {config.label}
      </span>
    </div>
  );
}

export default function PetCard({ pet, selected }: Props) {
  return (
    <div
      className={`
        group relative h-full
        bg-white rounded-2xl border
        p-6 transition-all duration-300
        shadow-sm
        hover:shadow-xl hover:-translate-y-1
        overflow-hidden
        ${selected
          ? "border-teal-500 shadow-lg"
          : "border-slate-200 hover:border-teal-300"
        }
      `}
    >
      <div className="flex items-start gap-4">
        <div
          className="
            w-14 h-14 rounded-xl
            bg-teal-50
            flex items-center justify-center
            text-teal-600
            transition-all duration-300
            group-hover:bg-teal-100
            group-hover:text-teal-700
            group-hover:scale-110"
        >
          {getPetIcon(pet.species)}
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-800">
            {pet.name}
          </h3>

          <p className="text-sm text-slate-500 capitalize">
            {pet.species}
          </p>

          {(pet.breed || pet.age !== undefined) && (
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {pet.breed && (
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
                  {pet.breed}
                </span>
              )}

              {pet.age !== undefined && (
                <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-medium">
                  {pet.age} {pet.age === 1 ? 'year' : 'years'}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      <HealthIndicator status={pet.status} />

      {/* Barra inferior */}
      <div
        className="
          absolute bottom-0 left-0 right-0 h-1
          bg-gradient-to-r from-teal-400 to-emerald-500
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          rounded-b-2xl"
      />
    </div>
  );
}
