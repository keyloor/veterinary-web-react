import type { ReactNode } from 'react';

/**
 * Configuration schema for each tab in the PetTabs component.
 */
export interface TabConfig {
    id: string; // Unique identifier for the tab (e.g., 'resumen', 'vacunas')
    label: string; // The display name of the tab
    icon: ReactNode; // The Lucide React icon element
}

/**
 * Props for the PetTabs component.
 */
export interface PetTabsProps {
    activeTab: string;
    onTabChange: (tabId: string) => void;
}
