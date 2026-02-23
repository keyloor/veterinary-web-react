import { Link } from 'react-router-dom';
import { Search, Home, ArrowLeft } from 'lucide-react';

/**
 * NotFound Component
 * Displays a professional 404 error page when a route is not found.
 * Matches the VetCare premium aesthetic.
 */
export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 bg-slate-50/50">
      <div className="max-w-md w-full text-center space-y-8 p-10 bg-white rounded-3xl shadow-xl shadow-teal-900/5">

        {/* Visual Icon Section */}
        <div className="relative inline-flex items-center justify-center">
          <div className="absolute inset-0 bg-teal-200 animate-ping rounded-full opacity-25"></div>
          <div className="relative bg-gradient-to-br from-teal-500 to-emerald-600 p-6 rounded-3xl text-white shadow-lg shadow-teal-200">
            <Search size={48} strokeWidth={1.5} />
          </div>
        </div>

        {/* Error Message Section */}
        <div className="space-y-3">
          <h1 className="text-7xl font-black text-slate-600">404</h1>
          <h2 className="text-3xl font-extrabold text-slate-800">Page Not Found</h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <Link
            to="/home"
            className="w-full flex items-center justify-center gap-2 bg-slate-800 text-white px-6 py-4 rounded-2xl font-bold hover:bg-slate-700 transition-all active:scale-95 shadow-lg shadow-slate-200"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <button
            //this function will take the user back to the previous page
            onClick={() => window.history.back()}
            className="w-full flex items-center justify-center gap-2 border-2 border-slate-100 text-slate-600 px-6 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
