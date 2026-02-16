import type { Pet } from "../../models/pet.models";
import { PawPrint } from "lucide-react";

type Props = {
  pet: Pet;
  selected?: boolean;
};

export default function PetCard({ pet, selected }: Props) {
  return (
    <div
      className={`
        group relative overflow-hidden cursor-pointer
        p-5 rounded-3xl border transition-all duration-300
        bg-white shadow-sm
        hover:shadow-2xl hover:shadow-teal-100/60 hover:-translate-y-1
        ${selected
          ? "border-teal-400 ring-2 ring-teal-200"
          : "border-slate-200 hover:border-teal-300"}
      `}
    >
    
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/40 to-emerald-50/40 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative flex items-start gap-4">
        
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-teal-200/50 group-hover:scale-105 transition-transform">
          <PawPrint size={30} />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-800 leading-tight">
            {pet.name}
          </h3>

          <p className="text-sm text-slate-500 capitalize">
            {pet.species}
          </p>

          {(pet.breed || pet.age !== undefined) && (
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              {pet.breed && (
                <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
                  {pet.breed}
                </span>
              )}

              {pet.age !== undefined && (
                <span className="px-2.5 py-1 rounded-full bg-teal-50 text-teal-600 font-semibold">
                  {pet.age} años
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {pet.status && (
        <div className="mt-4">
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600">
            ● {pet.status}
          </span>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
