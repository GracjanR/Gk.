import React, { useEffect } from 'react';

const RoadsidePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {/* Header Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b-4 border-red-600">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1621905238294-48c4d284f9a0?q=80&w=1920" 
            className="w-full h-full object-cover grayscale brightness-[0.2]" 
            alt="Pomoc Drogowa G&K" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
          <div className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-[0_0_20px_rgba(220,38,38,0.5)]">
            ALARMOWY 24H / 7 DNI
          </div>
          <h1 className="text-6xl md:text-[9rem] font-black text-white tracking-tighter uppercase leading-[0.8] mb-8 italic">
            G&K <br /> <span className="text-red-600">ASSISTANCE.</span>
          </h1>
          <p className="text-zinc-500 font-black text-xs uppercase tracking-[0.3em]">Toruń • Bydgoszcz • Autostrada A1 • Cała Polska</p>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 -mt-40 relative z-20">
          {/* Main Contact: Kacper */}
          <a href="tel:+48692913640" className="group relative bg-red-600 p-12 rounded-[3rem] transition-all hover:scale-[1.03] shadow-[0_30px_60px_rgba(220,38,38,0.3)] overflow-hidden">
            {/* Caution Stripes Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rotate-45 translate-x-12 -translate-y-12">
              <div className="w-full h-full bg-[repeating-linear-gradient(-45deg,#000,#000_20px,#fff_20px,#fff_40px)]"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white text-red-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">GŁÓWNY DYŻURNY</span>
                <span className="w-3 h-3 bg-white rounded-full animate-ping"></span>
              </div>
              <h2 className="text-white text-[11px] font-black uppercase tracking-widest opacity-80 mb-2">Kacper Wochna</h2>
              <div className="text-4xl md:text-6xl font-black text-white tracking-tighter group-hover:scale-105 transition-transform">+48 692 913 640</div>
              <p className="text-red-100 text-[10px] mt-8 uppercase font-bold tracking-widest leading-relaxed">
                Najszybszy dojazd w regionie Torunia i okolic. <br /> Pełny zakres pomocy drogowej.
              </p>
            </div>
          </a>

          {/* Secondary Contact: Gracjan */}
          <a href="tel:+48881218462" className="group bg-zinc-900 border-2 border-zinc-800 p-12 rounded-[3rem] hover:border-red-600/50 transition-all shadow-2xl relative">
            <h2 className="text-zinc-500 text-[11px] font-black uppercase tracking-widest mb-2">Gracjan Rapita</h2>
            <div className="text-4xl md:text-5xl font-black text-white tracking-tighter group-hover:text-red-600 transition-colors">+48 881 218 462</div>
            <p className="text-zinc-600 text-[10px] mt-8 uppercase font-bold tracking-widest leading-relaxed">
              Transport ciężki i naczep. <br /> Logistyka pojazdów zastępczych.
            </p>
          </a>
        </div>

        {/* Info & Fleet Details */}
        <div className="mt-32">
          <div className="space-y-8">
            <div className="bg-zinc-950 p-12 md:p-20 rounded-[3.5rem] border border-zinc-900 relative overflow-hidden group">
              {/* Fleet Icon Background */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] rotate-[-15deg] group-hover:rotate-0 transition-transform duration-1000">
                <svg className="w-96 h-96" fill="currentColor" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>
              </div>

              <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-12 italic flex items-center gap-6">
                <span className="w-4 h-4 bg-red-600"></span>
                Gwarancja Jakości i Zasięg
              </h3>
              
              <div className="relative z-10 max-w-3xl">
                <div className="space-y-6">
                  <h4 className="text-red-600 font-black text-xl uppercase tracking-widest">Szybkość Działania</h4>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed uppercase font-black">
                    Dzięki strategicznej lokalizacji w Złejwsi Małej, docieramy do Torunia i Bydgoszczy w czasie poniżej 20-30 minut. Obsługujemy kluczowe węzły autostrady A1 oraz drogi ekspresowe S5 i S10. Nasz zespół techniczny pozostaje w pełnej gotowości operacyjnej przez całą dobę.
                  </p>
                </div>
              </div>

              <div className="mt-20 pt-12 border-t border-zinc-900 grid grid-cols-2 sm:grid-cols-4 gap-8">
                 <div className="text-center">
                    <span className="block text-white text-3xl md:text-4xl font-black tracking-tighter">24/7</span>
                    <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Dostępność</span>
                 </div>
                 <div className="text-center">
                    <span className="block text-white text-3xl md:text-4xl font-black tracking-tighter">OC/AC</span>
                    <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Pełne Ubezpieczenie</span>
                 </div>
                 <div className="text-center">
                    <span className="block text-white text-3xl md:text-4xl font-black tracking-tighter">FAKTURA</span>
                    <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Rozliczenie VAT 23%</span>
                 </div>
                 <div className="text-center">
                    <span className="block text-white text-3xl md:text-4xl font-black tracking-tighter">REGION</span>
                    <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Cała Polska</span>
                 </div>
              </div>
            </div>

            <div className="bg-red-600/5 border border-red-600/20 p-12 rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="text-center md:text-left">
                 <p className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">Zatrzymała Cię awaria lub kolizja?</p>
                 <p className="text-white text-xl font-black uppercase tracking-tighter italic">Nie trać czasu, dzwoń do profesjonalistów z G&K Assistance.</p>
               </div>
               <a href="tel:+48692913640" className="bg-red-600 text-white px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                 WEZWIJ POMOC TERAZ
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadsidePage;