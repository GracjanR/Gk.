
import { Vehicle } from '../types';
import { INITIAL_VEHICLES } from '../constants';

const STORAGE_KEY = 'gk_vehicles';

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

export const saveVehicles = (vehicles: Vehicle[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(vehicles));
};

export const addVehicle = (vehicle: Vehicle): Vehicle[] => {
  const current = getVehicles();
  const updated = [vehicle, ...current];
  saveVehicles(updated);
  return updated;
};

export const deleteVehicle = (id: string): Vehicle[] => {
  const current = getVehicles();
  const updated = current.filter(v => String(v.id) !== String(id));
  saveVehicles(updated);
  return updated;
};

export const clearAllVehicles = (): Vehicle[] => {
  // Ustawiamy pustą tablicę zamiast usuwać klucz, aby getVehicles nie przywróciło danych demo
  saveVehicles([]);
  return [];
};

export const resetToDefaults = (): Vehicle[] => {
  const initial = [...INITIAL_VEHICLES] as Vehicle[];
  saveVehicles(initial);
  return initial;
};

export const toggleVehicleStatus = (id: string): Vehicle[] => {
  const current = getVehicles();
  const updated = current.map(v => String(v.id) === String(id) ? { ...v, isActive: !v.isActive } : v);
  saveVehicles(updated);
  return updated;
};
