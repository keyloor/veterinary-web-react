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
                Vet<span className="text-teal-600">Care</span> </span>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Committed to every heartbeat of your pet, because they are part of your family.
            </p>

            <div className="flex gap-4 pt-2">

              <div className="flex gap-4 pt-2">

                <div className="flex gap-4 pt-2">


                  <a href="https://www.instagram.com/" target="_blank"
                    className="group relative flex items-center justify-center 
                    w-12 h-12 rounded-full bg-white text-slate-600 
                    shadow-sm border border-slate-200 transition-all duration-300
                    hover:-translate-y-1 hover:shadow-xl"
                  >

                    <span className="absolute inset-0 rounded-full
                    ring-0 ring-pink-500/30
                    group-hover:ring-4
                    transition-all duration-300" />

                    <Instagram size={20}
                      className="relative z-10 transition-all duration-300
                      group-hover:text-pink-600 group-hover:scale-110"
                    />


                    <span className="pointer-events-none absolute -top-10 px-3 py-1.5 rounded-lg
                    bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
                    text-white text-xs font-medium opacity-0 translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300 whitespace-nowrap shadow-lg">
                      Instagram
                    </span>
                  </a>

                  <a href="https://www.facebook.com/" target="_blank"
                    className="group relative flex items-center justify-center
                    w-12 h-12 rounded-full bg-white text-slate-600
                    shadow-sm border border-slate-200
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-xl"
                  >

                    <span className="absolute inset-0 rounded-full 
                    ring-0 ring-blue-600/30
                    group-hover:ring-4
                    transition-all duration-300" />

                    <Facebook size={20}
                      className="relative z-10
                      transition-all duration-300
                      group-hover:text-blue-600
                      group-hover:scale-110"
                    />


                    <span className="pointer-events-none absolute -top-10
                    px-3 py-1.5 rounded-lg
                    bg-blue-600
                    text-white text-xs font-medium
                    opacity-0 translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300
                    whitespace-nowrap
                    shadow-lg">
                      Facebook
                    </span>
                  </a>

                </div>

              </div>

            </div>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-teal-50 md:pl-8 pt-6 md:pt-0">
            <h3 className="text-sm font-semibold text-slate-700 mb-3 tracking-wide uppercase">
              Contact
            </h3>

            <ul className="space-y-2 text-sm text-slate-500">
              <li>📍 Alajuela, Costa Rica</li>
              <li>📞 +506 8888-8888</li>
              <li>✉️ infoVetCare@gmail.com</li>
            </ul>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-teal-50 md:pl-8 pt-6 md:pt-0">
            <h3 className="text-sm font-semibold text-slate-700 mb-3 tracking-wide uppercase">
              📆 Schedule
            </h3>

            <ul className="space-y-2 text-sm text-slate-500">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 2:00 PM</li>
              <li>Sunday: Emergencies</li>
            </ul>
          </div>

        </div>

        <div className="mt-10 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © 2026 VetCare. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
