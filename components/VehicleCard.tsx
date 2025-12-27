
import React from 'react';
import { Vehicle } from '../types';

interface VehicleCardProps {
  vehicle: Vehicle;
  isAdmin?: boolean;
  onDelete?: (id: string) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, isAdmin, onDelete }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-yellow-400 transition-all duration-300">
      <div className="relative h-60 w-full overflow-hidden">
        <img 
          src={vehicle.imageUrl} 
          alt={vehicle.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1.5 rounded-lg text-sm font-black shadow-xl">
          {vehicle.pricePerDay} zł / doba
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white leading-tight">{vehicle.name}</h3>
          <span className="text-[9px] bg-zinc-800 text-yellow-400 px-2 py-1 rounded-full border border-zinc-700 uppercase font-black tracking-widest">{vehicle.categoryId}</span>
        </div>
        
        {/* Technical Specs Bar */}
        <div className="grid grid-cols-3 gap-2 mb-6 border-y border-zinc-800/50 py-3">
          <div className="text-center border-r border-zinc-800">
            <p className="text-[8px] text-zinc-500 uppercase font-black tracking-widest mb-1">Moc</p>
            <p className="text-xs text-white font-bold">{vehicle.power || 'N/A'}</p>
          </div>
          <div className="text-center border-r border-zinc-800">
            <p className="text-[8px] text-zinc-500 uppercase font-black tracking-widest mb-1">Miejsca</p>
            <p className="text-xs text-white font-bold">{vehicle.seats || 'N/A'}</p>
          </div>
          <div className="text-center">
            <p className="text-[8px] text-zinc-500 uppercase font-black tracking-widest mb-1">Skrzynia</p>
            <p className="text-xs text-white font-bold truncate px-1">{vehicle.transmission || 'N/A'}</p>
          </div>
        </div>

        <p className="text-zinc-400 text-sm mb-6 line-clamp-2 leading-relaxed italic">"{vehicle.description}"</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {vehicle.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-[10px] font-black text-zinc-300 bg-zinc-800 px-2 py-1.5 rounded uppercase tracking-tighter">
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>
              {feature}
            </div>
          ))}
        </div>
        
        {isAdmin ? (
          <button 
            onClick={() => onDelete?.(vehicle.id)}
            className="w-full bg-red-600/10 text-red-500 border border-red-900/50 hover:bg-red-600 hover:text-white py-3 rounded-xl transition text-xs font-black uppercase tracking-widest"
          >
            Usuń z bazy
          </button>
        ) : (
          <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-4 rounded-xl transition-all duration-300 font-black text-xs uppercase tracking-widest shadow-lg shadow-yellow-400/10">
            Rezerwuj teraz
          </button>
        )}
      </div>
    </div>
  );
};

export default VehicleCard;
