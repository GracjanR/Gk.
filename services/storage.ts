
import { Vehicle } from '../types';
import { INITIAL_VEHICLES } from '../constants';

const STORAGE_KEY = 'gk_vehicles';

export const saveVehicles = (vehicles: Vehicle[]): Vehicle[] => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(vehicles));
  return vehicles;
};

export const getVehicles = (): Vehicle[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  
  if (stored === null) {
    const initial = [...INITIAL_VEHICLES] as Vehicle[];
    saveVehicles(initial);
    return initial;
  }
  
  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Błąd bazy danych G&K:", error);
    return [];
  }
};

export const addVehicle = (vehicle: Vehicle): Vehicle[] => {
  const current = getVehicles();
  const updated = [vehicle, ...current];
  return saveVehicles(updated);
};

export const deleteVehicle = (id: string): Vehicle[] => {
  const current = getVehicles();
  // Filtrowanie po ID z konwersją na string dla bezpieczeństwa
  const updated = current.filter(v => String(v.id) !== String(id));
  return saveVehicles(updated);
};

export const clearAllVehicles = (): Vehicle[] => {
  return saveVehicles([]);
};

export const resetToDefaults = (): Vehicle[] => {
  const initial = [...INITIAL_VEHICLES] as Vehicle[];
  return saveVehicles(initial);
};

export const toggleVehicleStatus = (id: string): Vehicle[] => {
  const current = getVehicles();
  const updated = current.map(v => 
    String(v.id) === String(id) ? { ...v, isActive: !v.isActive } : v
  );
  return saveVehicles(updated);
};
