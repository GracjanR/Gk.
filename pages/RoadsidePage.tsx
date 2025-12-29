
import React, { useEffect } from 'react';

const RoadsidePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {/* Header Section */}
      <section className="relative min-h-[60vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden border-b-4 border-red-600 px-4 pt-32 pb-48 md:pb-64">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?q=80&w=1920" 
            className="w-full h-full object-cover grayscale brightness-[0.25]" 
            alt="Autolaweta G&K Assistance" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
          <div className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-[0_0_40px_rgba(220,38,38,0.4)]">
            DYSPOZYTORNIA 24H / 7 DNI
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-black text-white tracking-tighter uppercase leading-[0.8] mb-8 italic">
            HOLOWANIE <br /> <span className="text-red-600">BEZ PRZERW.</span>
          </h1>
          <p className="text-zinc-500 font-black text-[10px] sm:text-xs uppercase tracking-[0.5em] max-w-2xl mx-auto border-y border-zinc-900 py-4">
            Toruń • Bydgoszcz • Autostrada A1 • S5 • S10 • Cała Europa
          </p>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="max-w-7xl mx-auto px-4 relative z-20">
        <div className="grid md:grid-cols-2 gap-8 -mt-32 md:-mt-44 lg:-mt-52">
          {/* Main Contact: Kacper */}
          <a href="tel:+48692913640" className="group relative bg-red-600 p-8 md:p-12 rounded-[3.5rem] transition-all hover:scale-[1.03] shadow-[0_40px_80px_rgba(220,38,38,0.3)] overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 opacity-10 rotate-45 translate-x-12 -translate-y-12">
              <div className="w-full h-full bg-[repeating-linear-gradient(-45deg,#000,#000_20px,#fff_20px,#fff_40px)]"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-white text-red-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest animate-pulse shadow-lg">KIEROWNIK OPERACYJNY</span>
                <span className="w-3 h-3 bg-white rounded-full animate-ping"></span>
              </div>
              <h2 className="text-white text-[11px] font-black uppercase tracking-widest opacity-80 mb-2 italic">Kacper Wochna</h2>
              <div className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tighter group-hover:scale-105 transition-transform">+48 692 913 640</div>
              <div className="h-px w-20 bg-white/30 my-8"></div>
              <p className="text-red-100 text-[11px] uppercase font-black tracking-widest leading-relaxed">
                EKSPRESOWY DOJAZD W REGIONIE. <br /> HOLOWANIE POJAZDÓW OSOBOWYCH I DOSTAWCZYCH.
              </p>
            </div>
          </a>

          {/* Secondary Contact: Gracjan */}
          <a href="tel:+48881218462" className="group bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-[3.5rem] hover:border-red-600/50 transition-all shadow-2xl relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] rotate-[-15deg] group-hover:rotate-0 transition-transform duration-1000">
               <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z"/></svg>
            </div>
            <h2 className="text-zinc-500 text-[11px] font-black uppercase tracking-widest mb-2 italic">Gracjan Rapita</h2>
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter group-hover:text-red-600 transition-colors">+48 881 218 462</div>
            <div className="h-px w-16 bg-zinc-800 my-8"></div>
            <p className="text-zinc-600 text-[11px] uppercase font-black tracking-widest leading-relaxed">
              SPECJALISTA DS. TRANSPORTU I FLOTY. <br /> LOGISTYKA LAWET I NACZEP.
            </p>
          </a>
        </div>

        {/* Info & Fleet Details */}
        <div className="py-32">
          <div className="space-y-8">
            <div className="bg-zinc-950 p-12 md:p-24 rounded-[4rem] border border-zinc-900 relative overflow-hidden group shadow-inner">
              <h3 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter mb-16 italic flex items-center gap-8">
                <span className="w-1.5 h-16 bg-red-600"></span>
                ZAKRES USŁUG G&K
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-20">
                <div className="space-y-10">
                  <div className="border-l-2 border-red-600/30 pl-8">
                    <h4 className="text-white text-xl font-black uppercase tracking-widest mb-4">Pomoc Drogowa 24h</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed uppercase font-bold italic">
                      Profesjonalne holowanie autolawetą po awariach i kolizjach. Wyciąganie aut z rowów, pomoc przy uruchomieniu (booster), wymiana koła na trasie.
                    </p>
                  </div>
                  <div className="border-l-2 border-zinc-800 pl-8">
                    <h4 className="text-white text-xl font-black uppercase tracking-widest mb-4">Transport Maszyn</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed uppercase font-bold italic">
                      Posiadamy naczepy i lawety przystosowane do przewozu maszyn rolniczych, budowlanych oraz wózków widłowych.
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-900/50 p-10 rounded-3xl border border-zinc-800 space-y-6">
                   <h4 className="text-red-600 text-[10px] font-black uppercase tracking-[0.5em]">Lokalizacja Strategiczna</h4>
                   <p className="text-white text-lg font-black italic tracking-tighter uppercase leading-tight">
                     Zławieś Mała pozwala nam na reakcję w 20 minut na terenie Torunia i Bydgoszczy.
                   </p>
                   <div className="flex gap-2">
                      <span className="px-4 py-2 bg-black text-zinc-500 text-[8px] font-black uppercase rounded-lg border border-zinc-800">A1</span>
                      <span className="px-4 py-2 bg-black text-zinc-500 text-[8px] font-black uppercase rounded-lg border border-zinc-800">S5</span>
                      <span className="px-4 py-2 bg-black text-zinc-500 text-[8px] font-black uppercase rounded-lg border border-zinc-800">S10</span>
                      <span className="px-4 py-2 bg-black text-zinc-500 text-[8px] font-black uppercase rounded-lg border border-zinc-800">DK80</span>
                   </div>
                </div>
              </div>

              <div className="mt-24 pt-16 border-t border-zinc-900 grid grid-cols-2 sm:grid-cols-4 gap-12">
                 <div className="text-center group/stat">
                    <span className="block text-white text-4xl md:text-5xl font-black tracking-tighter group-hover/stat:text-red-600 transition-colors">24H</span>
                    <span className="text-zinc-600 text-[9px] font-black uppercase tracking-widest mt-2 block italic">Pełna Gotowość</span>
                 </div>
                 <div className="text-center group/stat">
                    <span className="block text-white text-4xl md:text-5xl font-black tracking-tighter group-hover/stat:text-red-600 transition-colors">OC</span>
                    <span className="text-zinc-600 text-[9px] font-black uppercase tracking-widest mt-2 block italic">Auta Zastępcze</span>
                 </div>
                 <div className="text-center group/stat">
                    <span className="block text-white text-4xl md:text-5xl font-black tracking-tighter group-hover/stat:text-red-600 transition-colors">VAT</span>
                    <span className="text-zinc-600 text-[9px] font-black uppercase tracking-widest mt-2 block italic">Faktura 23%</span>
                 </div>
                 <div className="text-center group/stat">
                    <span className="block text-white text-4xl md:text-5xl font-black tracking-tighter group-hover/stat:text-red-600 transition-colors">UE</span>
                    <span className="text-zinc-600 text-[9px] font-black uppercase tracking-widest mt-2 block italic">Zasięg Europa</span>
                 </div>
              </div>
            </div>

            <div className="bg-red-600 p-12 md:p-16 rounded-[4rem] flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_40px_80px_rgba(220,38,38,0.2)]">
               <div className="text-center md:text-left">
                 <p className="text-black/60 text-xs font-black uppercase tracking-widest mb-3">Kolizja? Awaria? Brak paliwa?</p>
                 <p className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter italic leading-none">NIE CZEKAJ, DZWONIMY <br /> DO TWOICH USŁUG.</p>
               </div>
               <a href="tel:+48692913640" className="bg-black text-white px-16 py-7 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-2xl text-center min-w-[300px]">
                 ZADZWOŃ: +48 692 913 640
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadsidePage;
