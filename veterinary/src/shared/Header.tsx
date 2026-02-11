import { useState } from 'react';
import { Link } from 'react-router-dom';
//imported icons are from lucide-react
import { Dog, Home, PawPrint, User, Menu, X } from 'lucide-react';

/**
 * Header Component
 * Provides a responsive navigation bar with a glassmorphism effect and Lucide icons.
 */
export default function Header() {
  // State variable to manage the visibility of the mobile navigation menu
  const [isOpen, setIsOpen] = useState(false);

  // This is a constant array of objects where each object represents a navigation link.
  const navLinks = [
    { name: 'Home', path: '/home', icon: <Home size={20} /> },
    { name: 'My Pets', path: '/pets', icon: <PawPrint size={20} /> },
    { name: 'Profile', path: '/profile', icon: <User size={20} /> },
  ];

  return (
    //We create the actual header component 
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-teal-50 shadow-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">

        {/* BRAND LOGO SECTION 
            - Clickable logo that redirects to the landing page (/home)
            - Uses a gradient background and text for a modern look
        */}
        <Link
          to="/home"
          className="flex items-center gap-3 text-2xl font-extrabold text-slate-800 transition-all hover:scale-105 active:scale-95"
        >
          <div className="bg-gradient-to-br from-teal-400 to-teal-600 p-2 rounded-xl text-white shadow-lg shadow-teal-200/50">
            <Dog size={28} />
          </div>
          <span className="tracking-tight">
            Vet<span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Care</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION
            - Hidden on small screens (hidden), visible on medium and up (md:flex)
        */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="group relative flex items-center gap-2 text-[15px] font-semibold text-slate-600 transition-colors hover:text-teal-600"
            >
              <span className="text-slate-400 transition-colors group-hover:text-teal-500 group-hover:animate-bounce-subtle">
                {link.icon}
              </span>
              {link.name}
              {/* Bottom underline animation on hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
            </Link>
          ))}
        </nav>

        {/* MOBILE MENU TOGGLE BUTTON
            - Only visible on small screens (md:hidden)
            - Toggles the 'isOpen' state to show/hide the dropdown menu
        */}
        <button
          className="md:hidden p-2.5 rounded-xl text-slate-600 hover:bg-teal-50 hover:text-teal-600 transition-all active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Ternary operator to toggle between X and Menu icons */}
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION DROPDOWN
          - Visible only when the toggle button is clicked (isOpen === true)
      */}
      {/*if isOpen is true, render the mobile navigation dropdown*/}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-teal-50 shadow-xl animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-6 gap-4">
            {/* Map through the navLinks array and render a link for each item */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)} // Close menu after selection
                className="flex items-center gap-4 text-lg font-bold text-slate-700 p-3.5 rounded-2xl hover:bg-teal-50 hover:text-teal-600 transition-all active:translate-x-2"
              >
                <span className="bg-slate-100 p-2 rounded-lg group-hover:bg-white transition-colors">
                  {link.icon}
                </span>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
