import React from 'react';
import { FileText, Syringe, Calendar } from 'lucide-react';

/**
 * Configuration schema for each tab in the PetTabs component.
 */
interface TabConfig {
  id: string; // Unique identifier for the tab (e.g., 'resumen', 'vacunas')
  label: string; // The display name of the tab
  icon: React.ReactNode; // The Lucide React icon element
}

interface PetTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const tabs: TabConfig[] = [
  { id: 'resumen', label: 'Resumen', icon: <FileText size={18} /> },
  { id: 'vacunas', label: 'Vacunas', icon: <Syringe size={18} /> },
  { id: 'consultas', label: 'Consultas', icon: <Calendar size={18} /> },
];

/**
 * PetTabs Component
 * Renders a row of clickable tabs to switch between different sections of a pet's profile.
 * Highlights the active tab dynamically based on the current state.
 *
 * @param {string} activeTab - The currently selected tab's ID.
 * @param {(tabId: string) => void} onTabChange - Callback function triggered when a tab is clicked.
 */
export default function PetTabs({ activeTab, onTabChange }: PetTabsProps) {
  return (
    <div className="border-b border-slate-200">
      <div className="flex gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex items-center gap-2 px-6 py-4 font-medium text-sm transition-all relative
              ${activeTab === tab.id
                ? 'text-teal-600'
                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }
            `}
          >
            <span className={activeTab === tab.id ? 'text-teal-600' : 'text-slate-400'}>
              {tab.icon}
            </span>
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-emerald-500" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}