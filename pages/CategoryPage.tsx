
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES } from '../constants';
import { getVehicles } from '../services/storage';
import { CategoryId, Vehicle } from '../types';
import VehicleCard from '../components/VehicleCard';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const category = CATEGORIES.find(c => c.id === id);

  useEffect(() => {
    const allVehicles = getVehicles();
    setVehicles(allVehicles.filter(v => v.categoryId === id));
    window.scrollTo(0, 0);
  }, [id]);

  if (!category) return null;

  return (
    <div className="bg-black min-h-screen">
      {/* Dynamic Header */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-zinc-900">
        <img 
          src={category.icon} 
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3]" 
          alt={category.title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <Link to="/" className="inline-flex items-center text-zinc-500 hover:text-yellow-400 mb-8 transition-colors font-black text-[10px] uppercase tracking-widest">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
            Powrót do floty
          </Link>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
            {category.title} <span className="text-yellow-400">.</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl text-lg font-medium border-l-2 border-yellow-400 pl-6">
            {category.description}
          </p>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-16 border-b border-zinc-900 pb-8">
          <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Dostępne jednostki</span>
          <span className="text-yellow-400 font-black text-xl">{vehicles.length} pojazdów</span>
        </div>

        {vehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map(v => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </div>
        ) : (
          <div className="bg-zinc-900/10 border border-dashed border-zinc-800 rounded-lg p-24 text-center">
             <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Brak wolnych terminów</h3>
             <p className="text-zinc-600 max-w-md mx-auto mb-10 text-sm font-bold uppercase tracking-widest">Wszystkie pojazdy z tej sekcji są aktualnie zarezerwowane.</p>
             <a href="tel:+48881218462" className="bg-yellow-400 text-black px-12 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white transition-all">
               Zadzwoń po wsparcie
             </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default CategoryPage;
