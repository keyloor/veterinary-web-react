import { Facebook, Instagram, PawPrint } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-white/80 backdrop-blur-md border-t border-teal-50 shadow-[0_-4px_20px_rgba(0,0,0,0.04)] mt-16" >
      <div className="container mx-auto px-6 py-10" >

        <div className="grid md:grid-cols-3 gap-10 items-start">

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-teal-400 to-emerald-600 p-2 rounded-xl text-white shadow-lg shadow-teal-200/50">
                <PawPrint size={22} />
              </div>

              <span className="text-xl font-bold text-slate-800">
                Vet<span className="text-teal-600">Care</span>
              </span>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Plataforma veterinaria moderna para el cuidado y seguimiento de tus mascotas.
            </p>

            <div className="flex gap-3 pt-2 ">
              <a href="https://www.instagram.com/" target="_blank" className="flex group p-2.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-teal-500 hover:text-white transition-all shadow-sm hover:shadow-md hover:scale-106">
                <Instagram size={18} className="transition-all group-hover:scale-116"/>
              </a>

              <a href="https://www.facebook.com/" target="_blank" className="flex group p-2.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-teal-500 hover:text-white transition-all shadow-sm hover:shadow-md hover:scale-105">
                <Facebook size={18} className="transition-all group-hover:scale-114"/>
              </a>
            </div>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-teal-50 md:pl-8 pt-6 md:pt-0">
            <h3 className="text-sm font-semibold text-slate-700 mb-3 tracking-wide uppercase">
              Contacto
            </h3>

            <ul className="space-y-2 text-sm text-slate-500">
              <li>📍 Alajuela, Costa Rica</li>
              <li>📞 +506 8888-8888</li>
              <li>✉️ infoVetCare@gmail.com</li>
            </ul>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-teal-50 md:pl-8 pt-6 md:pt-0">
            <h3 className="text-sm font-semibold text-slate-700 mb-3 tracking-wide uppercase">
              📆 Horario
            </h3>

            <ul className="space-y-2 text-sm text-slate-500">
              <li>Lunes - Viernes: 8:00 AM - 6:00 PM</li>
              <li>Sábado: 9:00 AM - 2:00 PM</li>
              <li>Domingo: Emergencias</li>
            </ul>
          </div>

        </div>

        <div className="mt-10 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © 2026 VetCare. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
