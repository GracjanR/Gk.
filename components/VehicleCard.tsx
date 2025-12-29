
import React from 'react';
import { Vehicle } from '../types';

interface VehicleCardProps {
  vehicle: Vehicle;
  isAdmin?: boolean;
  onToggle?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, isAdmin, onToggle, onDelete }) => {
  return (
    <div className={`bg-zinc-900 border ${isAdmin ? (vehicle.isActive ? 'border-green-600/30' : 'border-red-600/30') : 'border-zinc-800'} rounded-[2.5rem] overflow-hidden group hover:border-yellow-400 transition-all duration-500 relative flex flex-col h-full shadow-2xl`}>
      
      {isAdmin && (
        <div className="absolute top-6 left-6 z-20">
          <div className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest shadow-lg ${vehicle.isActive ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
            {vehicle.isActive ? 'Włączony (Widoczny)' : 'Wyłączony (Ukryty)'}
          </div>
        </div>
      )}

      <div className="relative h-64 w-full overflow-hidden">
        <img 
          src={vehicle.imageUrl} 
          alt={vehicle.name} 
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ${!vehicle.isActive && isAdmin ? 'grayscale opacity-30' : ''}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        <div className="absolute top-6 right-6 bg-yellow-400 text-black px-4 py-2 rounded-xl text-sm font-black shadow-2xl">
          {vehicle.pricePerDay} zł / doba
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-black text-white leading-tight uppercase italic">{vehicle.name}</h3>
          <span className="text-[8px] bg-zinc-800 text-yellow-400 px-3 py-1 rounded-full border border-zinc-700 uppercase font-black tracking-widest">{vehicle.categoryId}</span>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-8 border-y border-zinc-800/50 py-4">
          <div className="text-center border-r border-zinc-800">
            <p className="text-[7px] text-zinc-600 uppercase font-black tracking-[0.2em] mb-1">Moc</p>
            <p className="text-xs text-white font-bold tracking-tighter">{vehicle.power || 'N/A'}</p>
          </div>
          <div className="text-center border-r border-zinc-800">
            <p className="text-[7px] text-zinc-600 uppercase font-black tracking-[0.2em] mb-1">Miejsca</p>
            <p className="text-xs text-white font-bold tracking-tighter">{vehicle.seats || 'N/A'}</p>
          </div>
          <div className="text-center">
            <p className="text-[7px] text-zinc-600 uppercase font-black tracking-[0.2em] mb-1">Skrzynia</p>
            <p className="text-xs text-white font-bold truncate px-1 tracking-tighter">{vehicle.transmission || 'N/A'}</p>
          </div>
        </div>

        <p className="text-zinc-500 text-xs mb-8 line-clamp-3 leading-relaxed uppercase font-medium italic">
          {vehicle.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {vehicle.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-[9px] font-black text-zinc-400 bg-zinc-950 px-3 py-2 rounded-lg uppercase tracking-tighter border border-zinc-800">
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>
              {feature}
            </div>
          ))}
        </div>
        
        <div className="mt-auto">
          {isAdmin ? (
            <div className="flex flex-col gap-3">
              <button 
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle?.(vehicle.id);
                }}
                className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 border ${
                  vehicle.isActive 
                  ? 'bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700' 
                  : 'bg-green-600 text-white border-green-500 hover:bg-green-500'
                }`}
              >
                {vehicle.isActive ? 'Ukryj na stronie' : 'Opublikuj na stronie'}
              </button>
              <button 
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete?.(vehicle.id);
                }}
                className="w-full bg-red-600/10 hover:bg-red-600 text-red-600 hover:text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 border border-red-600/20"
              >
                Trwale usuń z bazy
              </button>
            </div>
          ) : (
            <button type="button" className="w-full bg-yellow-400 hover:bg-white text-black py-5 rounded-2xl transition-all duration-500 font-black text-[10px] uppercase tracking-[0.3em] shadow-xl shadow-yellow-400/5">
              Sprawdź dostępność
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
