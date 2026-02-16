import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-white/80 backdrop-blur-md border-t border-teal-50 shadow-sm mt-10">
      <div className="container mx-auto px-6 py-6 flex flex-col items-center justify-center gap-4">
        
        <div className="flex gap-4">
          <a
            href=""
            className="bg-gradient-to-br from-teal-400 to-teal-600 p-3 rounded-xl text-white shadow-lg shadow-teal-200/50 hover:scale-110 active:scale-95 transition-all"
          >
            <Instagram size={20} />
          </a>

          <a
            href=""
            className="bg-gradient-to-br from-teal-400 to-teal-600 p-3 rounded-xl text-white shadow-lg shadow-teal-200/50 hover:scale-110 active:scale-95 transition-all"
          >
            <Facebook size={20} />
          </a>
        </div>

        <p className="text-sm text-slate-600 text-center font-medium">
          © 2026 VetCare. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
