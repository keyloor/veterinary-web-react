import { useState } from "react";
import { Mail, Phone, User } from "lucide-react";
import clientProfile from "../../data/clientProfile.json";

/**
 * Client Profile Screen
 * Shows the single client's registered contact info (name, email, cellphone) in editable fields.
 * Data is loaded from a local JSON (single profile).
 */
export function Profile() {
  const [name, setName] = useState(clientProfile.name);
  const [email, setEmail] = useState(clientProfile.email);
  const [phone, setPhone] = useState(clientProfile.phone);

  return (
    <section className="min-h-[calc(100vh-5rem)] bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <header className="mb-6">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 text-center">
              Client Profile
            </h1>
            <p className="mt-2 text-slate-600 text-center">
              View and edit your contact information registered in the system.
            </p>
          </header>

          <div className="rounded-3xl border border-teal-100 bg-white/80 backdrop-blur-sm shadow-lg shadow-teal-100/40">
            <div className="p-6 sm:p-8">
              {/* Top profile row */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={clientProfile.photoUrl}
                  alt="Profile picture"
                  className="h-20 w-20 rounded-full object-cover border-4 border-white shadow-md"
                />

                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-700">Profile</p>
                  <p className="text-slate-900 font-bold text-lg leading-tight">
                    {name || "No name"}
                  </p>
                  <p className="text-slate-500 text-sm">{email || "No email"}</p>
                </div>

                <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 border border-teal-100">
                  Client
                </span>
              </div>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Name
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 focus-within:border-teal-300 focus-within:ring-4 focus-within:ring-teal-100 transition">
                    <span className="text-slate-400">
                      <User size={20} />
                    </span>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-transparent outline-none text-slate-800 placeholder:text-slate-400"
                      placeholder="Your name"
                      type="text"
                      autoComplete="name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 focus-within:border-teal-300 focus-within:ring-4 focus-within:ring-teal-100 transition">
                    <span className="text-slate-400">
                      <Mail size={20} />
                    </span>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent outline-none text-slate-800 placeholder:text-slate-400"
                      placeholder="email@example.com"
                      type="email"
                      autoComplete="email"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Cellphone number
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 focus-within:border-teal-300 focus-within:ring-4 focus-within:ring-teal-100 transition">
                    <span className="text-slate-400">
                      <Phone size={20} />
                    </span>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-transparent outline-none text-slate-800 placeholder:text-slate-400"
                      placeholder="+506 ....-...."
                      type="tel"
                      autoComplete="tel"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-10" />
        </div>
      </div>
    </section>
  );
}
