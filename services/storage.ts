
import { Vehicle } from '../types';
import { INITIAL_VEHICLES } from '../constants';

const STORAGE_KEY = 'gk_vehicles';

export const getVehicles = (): Vehicle[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return INITIAL_VEHICLES as Vehicle[];
  }
  try {
    return JSON.parse(stored);
  } catch {
    return INITIAL_VEHICLES as Vehicle[];
  }
};

export const saveVehicles = (vehicles: Vehicle[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(vehicles));
};

export const addVehicle = (vehicle: Vehicle) => {
  const current = getVehicles();
  const updated = [...current, vehicle];
  saveVehicles(updated);
  return updated;
};

export const deleteVehicle = (id: string) => {
  const current = getVehicles();
  const updated = current.filter(v => v.id !== id);
  saveVehicles(updated);
  return updated;
};
