
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
          <p className="text-zinc-400 max-w-2xl text-lg font-medium border-l-2 border-yellow-400 pl-6 uppercase tracking-widest">
            {category.description}
          </p>
        </div>
      </section>

      {/* Special Wedding Mustang Spotlight */}
      {id === 'wedding' && (
        <section className="py-24 max-w-7xl mx-auto px-4">
          <div className="bg-zinc-950 rounded-[4rem] overflow-hidden border border-zinc-900 shadow-2xl relative group">
            <div className="grid lg:grid-cols-2 min-h-[600px]">
              <div className="p-12 md:p-20 flex flex-col justify-center bg-zinc-950 relative z-10">
                <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 w-fit">
                  Najczęściej wybierany przez Pary Młode
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-8 leading-none">
                  FORD <br /> <span className="text-yellow-400 italic">MUSTANG GT.</span>
                </h2>
                <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest leading-relaxed mb-10 border-l border-zinc-800 pl-6">
                  Przeżyjcie ten dzień z rykiem V8 w tle. Ford Mustang GT to idealne połączenie nowoczesnej agresji z klasycznym, ślubnym stylem. Gwarantujemy, że Wasz podjazd pod kościół lub salę zostanie zapamiętany na lata. 
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-12">
                  <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
                    <span className="block text-yellow-400 font-black text-2xl italic leading-none mb-1">V8</span>
                    <span className="text-[8px] text-zinc-500 uppercase font-black tracking-widest">Amerykańska Moc</span>
                  </div>
                  <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
                    <span className="block text-yellow-400 font-black text-2xl italic leading-none mb-1">GT</span>
                    <span className="text-[8px] text-zinc-500 uppercase font-black tracking-widest">Wyposażenie Premium</span>
                  </div>
                </div>

                <a href="tel:+48881218462" className="bg-white text-black px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-yellow-400 transition-all text-center shadow-xl shadow-white/5">
                  Sprawdź dostępność terminu
                </a>
              </div>
              <div className="relative h-[500px] lg:h-auto overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1549399500-1448063773d1?q=80&w=1200" 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
                  alt="Ford Mustang GT Wedding G&K" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent lg:hidden"></div>
                
                {/* Visual Label */}
                <div className="absolute top-10 right-10 flex flex-col items-end">
                    <span className="text-white font-black text-6xl italic opacity-20">MUSTANG</span>
                    <span className="text-yellow-400 font-black text-xl italic tracking-widest">G&K WEDDING</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Vehicles Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-16 border-b border-zinc-900 pb-8">
          <div className="flex flex-col">
            <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Dostępna flota</span>
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">Wybierz swój model</h3>
          </div>
          <span className="text-yellow-400 font-black text-xl">{vehicles.length} aut</span>
        </div>

        {vehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map(v => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </div>
        ) : (
          <div className="bg-zinc-900/10 border border-dashed border-zinc-800 rounded-lg p-24 text-center">
             <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Brak wolnych jednostek</h3>
             <p className="text-zinc-600 max-w-md mx-auto mb-10 text-sm font-bold uppercase tracking-widest">Aktualnie wszystkie pojazdy z tej kategorii są wynajęte.</p>
             <a href="tel:+48881218462" className="bg-yellow-400 text-black px-12 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white transition-all">
               Zadzwoń i zapytaj o termin
             </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default CategoryPage;
