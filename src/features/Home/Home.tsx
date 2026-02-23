import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PawPrint, CalendarCheck, User } from "lucide-react";
import { getPets } from "../../service/pets.service";

export default function Home() {
  // Local state for dynamic data
  const [totalPets, setTotalPets] = useState(0);
  const nextAppointment = "March 15, 2026 - 3:00 PM";

  // Fetch pets on component mount to update stats
  useEffect(() => {
    getPets()
      .then((pets) => setTotalPets(pets.length))
      .catch((err) => console.error("Error fetching pets for Home count:", err));
  }, []);

  return (
    <div className="w-full flex flex-col py-16">
      <div className="container mx-auto px-6 flex-1">

        {/* WELCOME SECTION */}
        <section className="mb-12">
          <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-teal-100 flex flex-col md:flex-row items-center gap-8">

            {/* TEXT */}
            <div className="flex-1">
              <h1 className="text-4xl font-extrabold text-slate-800 mb-3">
                Welcome to
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  {" "}VetCare
                </span>
              </h1>
              <p className="text-slate-600 text-lg">
                Here’s a quick summary of your pet care information.
              </p>
            </div>

            {/* IMAGE */}
            <div className="flex-1 flex justify-center">
              <img
                src="https://s3-us-west-1.amazonaws.com/assets.wagwalkingweb.com/media/daily_wag/blog_articles/body/1723045767.4127371/shih-tzu.jpg"
                alt="Happy dog"
                className="rounded-3xl shadow-lg object-cover h-[250px] w-full max-w-sm hover:scale-105 transition-all duration-300"
              />
            </div>

          </div>
        </section>

        {/* SUMMARY SECTION */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">

          {/* TOTAL PETS */}
          <div className="p-6 rounded-3xl bg-white shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-teal-100 text-teal-600 p-3 rounded-2xl">
                <PawPrint size={28} />
              </div>
              <h2 className="text-xl font-bold text-slate-700">
                Registered Pets
              </h2>
            </div>
            <p className="text-3xl font-extrabold text-slate-800">
              {totalPets}
            </p>
          </div>

          {/* NEXT APPOINTMENT */}
          <div className="p-6 rounded-3xl bg-white shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-teal-100 text-teal-600 p-3 rounded-2xl">
                <CalendarCheck size={28} />
              </div>
              <h2 className="text-xl font-bold text-slate-700">
                Next Appointment
              </h2>
            </div>
            <p className="text-lg font-semibold text-slate-800">
              {nextAppointment}
            </p>
          </div>

        </section>

        {/* QUICK ACCESS */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Quick Access
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <Link
              to="/pets"
              className="flex items-center justify-between p-6 rounded-3xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold shadow-lg hover:scale-[1.02] transition-all"
            >
              <span className="flex items-center gap-3">
                <PawPrint size={24} />
                My Pets
              </span>
              →
            </Link>

            <Link
              to="/profile"
              className="flex items-center justify-between p-6 rounded-3xl border border-teal-500 text-teal-600 font-bold hover:bg-teal-50 transition-all"
            >
              <span className="flex items-center gap-3">
                <User size={24} />
                My Profile
              </span>
              →
            </Link>

          </div>
        </section>

      </div>
    </div>
  );
}