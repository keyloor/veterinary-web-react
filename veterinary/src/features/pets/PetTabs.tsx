import React from 'react';
import { FileText, Syringe, Calendar } from 'lucide-react';

interface TabConfig {
  id: string;
  label: string;
  icon: React.ReactNode;
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