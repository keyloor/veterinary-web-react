import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Syringe, FileText, Heart, AlertCircle } from 'lucide-react';
import type { Pet } from '../../models/pet.models';
import { getPetById } from '../../service/pets.service';

export default function PetProfile() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('resumen');

  useEffect(() => {
    if (id) {
      getPetById(id).then((data) => {
        setPet(data);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) return <div className="container mx-auto px-6 py-8">Cargando...</div>;
  if (!pet) return <div className="container mx-auto px-6 py-8">Mascota no encontrada</div>;

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Botón volver */}
      <button
        onClick={() => navigate('/pets')}
        className="flex items-center gap-2 text-slate-600 hover:text-teal-600 mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Volver a mis mascotas</span>
      </button>

      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 text-white mb-8">
        <h1 className="text-4xl font-bold mb-2">{pet.name}</h1>
        <p className="text-xl text-white/90">
          {pet.species} • {pet.breed || 'Raza no especificada'} • {pet.age} años
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200 mb-6">
        <div className="flex gap-6">
          <button
            onClick={() => setActiveTab('resumen')}
            className={`pb-3 px-1 font-medium flex items-center gap-2 transition-colors ${
              activeTab === 'resumen' 
                ? 'text-teal-600 border-b-2 border-teal-600' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <FileText size={18} />
            Resumen
          </button>
          <button
            onClick={() => setActiveTab('vacunas')}
            className={`pb-3 px-1 font-medium flex items-center gap-2 transition-colors ${
              activeTab === 'vacunas' 
                ? 'text-teal-600 border-b-2 border-teal-600' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Syringe size={18} />
            Vacunas ({pet.vaccines?.length || 0})
          </button>
          <button
            onClick={() => setActiveTab('consultas')}
            className={`pb-3 px-1 font-medium flex items-center gap-2 transition-colors ${
              activeTab === 'consultas' 
                ? 'text-teal-600 border-b-2 border-teal-600' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Calendar size={18} />
            Consultas ({pet.apointments?.length || 0})
          </button>
        </div>
      </div>

      {/* Contenido */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        {/* PESTAÑA RESUMEN */}
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
                <p className="font-semibold text-lg">{pet.age} años</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm text-slate-500 mb-1">Peso</p>
                <p className="font-semibold text-lg">{pet.weight ? `${pet.weight} kg` : '—'}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                <div className="flex items-center gap-2 text-teal-700 mb-2">
                  <Heart size={18} />
                  <span className="font-medium">Estado</span>
                </div>
                <p className="text-teal-800">{pet.status || 'No especificado'}</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                <div className="flex items-center gap-2 text-amber-700 mb-2">
                  <AlertCircle size={18} />
                  <span className="font-medium">Alergias</span>
                </div>
                <p className="text-amber-800">{pet.allergies || 'Ninguna'}</p>
              </div>
            </div>
          </div>
        )}

        {/* PESTAÑA VACUNAS */}
        {activeTab === 'vacunas' && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Historial de Vacunas</h3>
            {pet.vaccines && pet.vaccines.length > 0 ? (
              <div className="space-y-3">
                {pet.vaccines.map((vacuna) => (
                  <div key={vacuna.id} className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium">{vacuna.name}</p>
                    </div>
                    <p className="text-slate-500">
                      {new Date(vacuna.date).toLocaleDateString('es-ES')}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500">No hay vacunas registradas</p>
            )}
          </div>
        )}

        {/* PESTAÑA CONSULTAS */}
        {activeTab === 'consultas' && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Historial de Consultas</h3>
            {pet.apointments && pet.apointments.length > 0 ? (
              <div className="space-y-4">
                {pet.apointments.map((cita) => (
                  <div key={cita.id} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-medium">{cita.reason}</p>
                      <p className="text-sm text-slate-500">
                        {new Date(cita.date).toLocaleDateString('es-ES')}
                      </p>
                    </div>
                    <p className="text-slate-600">Veterinario: {cita.veterinarian}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500">No hay consultas registradas</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}