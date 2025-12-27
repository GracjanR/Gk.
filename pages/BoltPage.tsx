
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getVehicles } from '../services/storage';
import { Vehicle } from '../types';
import VehicleCard from '../components/VehicleCard';

const BoltPage: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const allVehicles = getVehicles();
    setVehicles(allVehicles.filter(v => v.categoryId === 'bolt'));
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden border-b border-yellow-400/20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1590650516494-2c8e4a442152?q=80&w=1920" 
            className="w-full h-full object-cover grayscale brightness-[0.2]" 
            alt="Bolt Fleet GK" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-yellow-400"></div>
            <span className="text-yellow-400 text-xs font-black uppercase tracking-[0.5em]">Partner Flotowy Bolt & Uber</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none mb-6">
            FLOTA <span className="text-yellow-400 italic">BOLT.</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl text-lg font-medium border-l-2 border-yellow-400 pl-6 uppercase tracking-widest">
            Zarabiaj z G&K – najniższe prowizje i najlepsze auta w regionie.
          </p>
        </div>
      </section>

      {/* Conditions Section (Now First) */}
      <section className="bg-zinc-950 py-32 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                  Bonus +300 PLN na start
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight uppercase">
                  WARUNKI <br /> <span className="text-yellow-400">WSPÓŁPRACY.</span>
                </h2>
                <div className="h-1 w-20 bg-yellow-400 mt-6"></div>
              </div>
              
              <div className="space-y-6">
                <p className="text-zinc-400 text-xl leading-relaxed">
                  Oferujemy model współpracy <span className="text-white font-black">70% dla Ciebie / 30% dla floty</span>. Jeździsz naszymi autami kiedy chcesz – bez sztywnych grafików, idealnie dla uczniów i studentów!
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Elastyczny grafik', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                    { label: 'Rozliczenie co tydzień', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                    { label: 'Pełne ubezpieczenie', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                    { label: 'Mechanik i serwis w cenie', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
                    { label: 'Autolaweta w cenie', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                    { label: 'Bonus 300zł za badania', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2' }
                  ].map((perk, i) => (
                    <div key={i} className="flex items-center gap-3 bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={perk.icon} /></svg>
                      <span className="text-zinc-300 text-[10px] font-black uppercase tracking-tighter">{perk.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact to Gracjan */}
              <div className="bg-yellow-400 p-10 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-black font-black text-2xl uppercase tracking-tighter mb-2">Masz pytania?</h3>
                  <p className="text-black/60 text-xs font-bold uppercase tracking-widest mb-8">Zadzwoń do osoby odpowiedzialnej za flotę:</p>
                  
                  <a href="tel:+48881218462" className="flex items-center gap-4 bg-black text-white px-8 py-5 rounded-2xl hover:scale-105 transition-transform w-fit">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black opacity-50 uppercase tracking-widest">Gracjan Rapita</span>
                      <span className="text-xl font-black">+48 881 218 462</span>
                    </div>
                  </a>
                </div>
                <div className="absolute -right-10 -bottom-10 text-black/5 font-black text-9xl italic group-hover:scale-110 transition-transform">GK</div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="aspect-[4/5] bg-zinc-900 border border-zinc-800 flex items-center justify-center p-4">
                <img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200" 
                  className="w-full h-full object-cover grayscale" 
                  alt="Bolt Driver GK" 
                />
              </div>
              <div className="absolute -top-10 -right-10">
                <div className="w-40 h-40 border-8 border-yellow-400 flex items-center justify-center">
                   <span className="text-yellow-400 font-black text-4xl italic">BOLT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid (Now Second) */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-16 border-b border-zinc-900 pb-8">
          <div className="flex flex-col">
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">Dostępne Jednostki</h3>
            <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest mt-1">Wybierz auto do pracy</span>
          </div>
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
             <p className="text-zinc-600 font-black uppercase tracking-widest">Wszystkie auta są obecnie w trasie.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default BoltPage;
