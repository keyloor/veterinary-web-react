import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Syringe,
  FileText,
  Heart,
  AlertCircle,
  Dog,
  Cat,
  Rabbit,
  Bird,
  Fish
} from 'lucide-react';

import type { Pet } from '../../models/pet.models';
import { getPetById } from '../../service/pets.service';

/**
 * PetProfile Component
 * Displays the full profile of a specific pet, including details, 
 * vaccine history, and clinical appointments.
 * It uses a tab-based navigation to switch between different sections.
 */
export default function PetProfile() {

  // Extract the pet ID from the URL parameters
  const { id } = useParams<{ id: string }>();
  // Hook for programmatic navigation (e.g., going back to the pet list)
  const navigate = useNavigate();

  // State to store the pet's full information
  const [pet, setPet] = useState<Pet | null>(null);
  // State to handle the loading view
  const [loading, setLoading] = useState(true);
  // State to manage the currently active tab ('resumen', 'vacunas', 'consultas')
  const [activeTab, setActiveTab] = useState('resumen');

  // Fetch pet data from the service when the component mounts or the ID changes
  useEffect(() => {
    if (id) {
      getPetById(id).then((data) => {
        setPet(data);
        setLoading(false);
      });
    }
  }, [id]);

  // Loading state placeholder
  if (loading) return <div className="container mx-auto px-6 py-8">Loading...</div>;
  // Error state placeholder if the pet isn't found
  if (!pet) return <div className="container mx-auto px-6 py-8">Pet not found</div>;

  /**
   * Helper function to return the appropriate Lucide icon based on the pet species.
   * Defaults to a Heart icon if the species is unknown.
   */
  const getSpeciesIcon = () => {
    switch (pet.species?.toLowerCase()) {
      case 'perro':
        return <Dog size={48} />;
      case 'gato':
        return <Cat size={48} />;
      case 'conejo':
        return <Rabbit size={48} />;
      case 'ave':
        return <Bird size={48} />;
      case 'pez':
        return <Fish size={48} />;
      default:
        return <Heart size={48} />;
    }
  };

  const status = pet.status?.toLowerCase();

  /**
   * Determine visual styles based on the pet's health status.
   * Returns Tailwind classes for the card background, border, and text colors.
   */
  const statusStyles = () => {
    if (status?.includes('saludable'))
      return {
        card: 'bg-emerald-50 border-emerald-100 text-emerald-700',
        text: 'text-emerald-800'
      };

    if (status?.includes('tratamiento'))
      return {
        card: 'bg-amber-50 border-amber-100 text-amber-700',
        text: 'text-amber-800'
      };

    if (status?.includes('crítico') || status?.includes('critico'))
      return {
        card: 'bg-red-50 border-red-100 text-red-700',
        text: 'text-red-800'
      };

    return {
      card: 'bg-slate-50 border-slate-100 text-slate-700',
      text: 'text-slate-800'
    };
  };

  const styles = statusStyles();

  return (
    <div className="container mx-auto px-6 py-8">


      <button
        onClick={() => navigate('/pets')}
        data-cy="back-button"
        className="flex items-center gap-2 text-slate-600 hover:text-teal-600 mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to my pets</span>
      </button>


      {/* Hero Header Section with Pet Basic Info */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl p-8 text-white mb-8">

        <div className="flex items-center gap-4 mb-2">

          <div className="bg-white/20 backdrop-blur p-3 rounded-xl">
            {getSpeciesIcon()}
          </div>

          <div>
            <h1 data-cy="pet-name" className="text-4xl font-bold">{pet.name}</h1>

            <p className="text-white/90">
              {pet.species} • {pet.breed || 'Breed not specified'} •{' '}
              {pet.age ?? '—'} {pet.age === 1 ? 'año' : 'años'}
            </p>
          </div>

        </div>

      </div>

      {/* TABS */}
      <div className="border-b border-slate-200 mb-6">
        <div className="flex gap-6">

          {/* Summary Tab */}
          <button
            onClick={() => setActiveTab('resumen')}
            data-cy="tab-resumen"
            className={`pb-3 px-1 font-medium flex items-center gap-2 transition-colors ${activeTab === 'resumen'
              ? 'text-teal-600 border-b-2 border-teal-600'
              : 'text-slate-500 hover:text-slate-700'
              }`}
          >
            <FileText size={18} />
            Resumen
          </button>

          {/* Vaccines Tab */}
          <button
            onClick={() => setActiveTab('vacunas')}
            data-cy="tab-vacunas"
            className={`pb-3 px-1 font-medium flex items-center gap-2 transition-colors ${activeTab === 'vacunas'
              ? 'text-teal-600 border-b-2 border-teal-600'
              : 'text-slate-500 hover:text-slate-700'
              }`}
          >
            <Syringe size={18} />
            Vacunas ({pet.vaccines?.length || 0})
          </button>

          {/* Appointments Tab */}
          <button
            onClick={() => setActiveTab('consultas')}
            data-cy="tab-consultas"
            className={`pb-3 px-1 font-medium flex items-center gap-2 transition-colors ${activeTab === 'consultas'
              ? 'text-teal-600 border-b-2 border-teal-600'
              : 'text-slate-500 hover:text-slate-700'
              }`}
          >
            <Calendar size={18} />
            Citas ({pet.apointments?.length || 0})
          </button>

        </div>
      </div>


      <div className="bg-white rounded-xl border border-slate-200 p-6">

        {/* SUMMARY */}
        {activeTab === 'resumen' && (
          <div className="space-y-6">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm text-slate-500 mb-1">Especie</p>
                <p className="font-semibold text-lg">{pet.species}</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm text-slate-500 mb-1">Raza</p>
                <p className="font-semibold text-lg">{pet.breed || '—'}</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm text-slate-500 mb-1">Edad</p>
                <p className="font-semibold text-lg">
                  {pet.age ?? '—'} {pet.age === 1 ? 'year' : 'years'}
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm text-slate-500 mb-1">Peso</p>
                <p className="font-semibold text-lg">
                  {pet.weight ? `${pet.weight} kg` : '—'}
                </p>
              </div>

            </div>

            <div className="grid grid-cols-2 gap-4">


              <div className={`p-4 rounded-lg border ${styles.card}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Heart size={18} />
                  <span className="font-medium">Estado</span>
                </div>

                <p className={styles.text}>
                  {pet.status || 'Not specified'}
                </p>
              </div>

              {/* ALLERGIES */}
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                <div className="flex items-center gap-2 text-amber-700 mb-2">
                  <AlertCircle size={18} />
                  <span className="font-medium">Alergias</span>
                </div>

                <p className="text-amber-800">
                  {pet.allergies || 'None'}
                </p>
              </div>

            </div>

          </div>
        )}

        {/* VACCINES */}
        {activeTab === 'vacunas' && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Historial de vacunas</h3>

            {pet.vaccines && pet.vaccines.length > 0 ? (
              <div className="space-y-3">

                {pet.vaccines.map((vaccine) => (
                  <div
                    key={vaccine.id}
                    className="flex justify-between items-center p-4 bg-slate-50 rounded-lg"
                  >
                    <p className="font-medium">{vaccine.name}</p>

                    <p className="text-slate-500">
                      {new Date(vaccine.date).toLocaleDateString('en-US')}
                    </p>
                  </div>
                ))}

              </div>
            ) : (
              <p className="text-slate-500">No vaccines registered</p>
            )}
          </div>
        )}

        {/* APPOINTMENTS */}
        {activeTab === 'consultas' && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Historial de citas</h3>

            {pet.apointments && pet.apointments.length > 0 ? (
              <div className="space-y-4">

                {pet.apointments.map((appointment) => (
                  <div key={appointment.id} className="p-4 bg-slate-50 rounded-lg">

                    <div className="flex justify-between items-start mb-2">
                      <p className="font-medium">{appointment.reason}</p>

                      <p className="text-sm text-slate-500">
                        {new Date(appointment.date).toLocaleDateString('en-US')}
                      </p>
                    </div>

                    <p className="text-slate-600">
                      Veterinario: {appointment.veterinarian}
                    </p>

                  </div>
                ))}

              </div>
            ) : (
              <p className="text-slate-500">No appointments registered</p>
            )}
          </div>
        )}

      </div>
    </div>
  );
}