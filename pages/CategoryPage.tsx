
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES } from '../constants';
import { getVehicles } from '../services/storage';
import { Vehicle } from '../types';
import VehicleCard from '../components/VehicleCard';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const category = CATEGORIES.find(c => c.id === id);

  useEffect(() => {
    const allVehicles = getVehicles();
    // Filtrujemy tylko aktywne pojazdy dla użytkownika końcowego
    setVehicles(allVehicles.filter(v => v.categoryId === id && v.isActive));
    window.scrollTo(0, 0);
  }, [id]);

  if (!category) return null;

  return (
    <div className="bg-black min-h-screen">
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
            Powrót
          </Link>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
            {category.title} <span className="text-yellow-400">.</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl text-lg font-medium border-l-2 border-yellow-400 pl-6 uppercase tracking-widest">
            {category.description}
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-16 border-b border-zinc-900 pb-8">
          <div className="flex flex-col">
            <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Aktualna oferta</span>
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">Modele dostępne</h3>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-yellow-400 font-black text-xl">{vehicles.length} pojazdów</span>
          </div>
        </div>

        {vehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map(v => (
              <VehicleCard 
                key={v.id} 
                vehicle={v} 
              />
            ))}
          </div>
        ) : (
          <div className="bg-zinc-900/10 border border-dashed border-zinc-800 rounded-lg p-24 text-center">
             <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter italic">Chwilowy brak dostępności</h3>
             <p className="text-zinc-600 max-w-md mx-auto mb-10 text-[10px] font-black uppercase tracking-widest">Skontaktuj się z nami, aby zapytać o planowane zwroty.</p>
             <a href="tel:+48881218462" className="bg-yellow-400 text-black px-12 py-5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white transition-all">
               ZADZWOŃ: +48 881 218 462
             </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default CategoryPage;
