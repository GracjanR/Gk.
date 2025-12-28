
import React from 'react';

const RoadsidePage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Emergency Header */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b-4 border-red-600">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1920" 
            className="w-full h-full object-cover grayscale brightness-[0.2]" 
            alt="Laweta G&K" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
          <div className="inline-flex items-center gap-3 bg-red-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-8 animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            Dostępni 24H / 7 Dni w tygodniu
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter uppercase leading-[0.8] mb-12">
            POMOC <br /> <span className="text-red-600 italic">DROGOWA.</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-medium mb-12 uppercase tracking-widest">
            Toruń • Bydgoszcz • Zławieś Mała • Cała Polska i Europa
          </p>
        </div>
      </section>

      {/* Quick Contact Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 -mt-40 relative z-20">
          <a href="tel:+48692913640" className="group bg-zinc-900 border-2 border-zinc-800 p-12 rounded-[3rem] hover:border-red-600 transition-all shadow-2xl">
            <div className="flex justify-between items-start mb-10">
              <span className="bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Główny Numer</span>
              <svg className="w-10 h-10 text-red-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <h2 className="text-zinc-500 text-xs font-black uppercase tracking-widest mb-2">Kacper Wochna</h2>
            <div className="text-4xl md:text-5xl font-black text-white tracking-tighter group-hover:text-red-600 transition-colors">+48 692 913 640</div>
            <p className="text-zinc-600 text-sm mt-6 uppercase font-bold tracking-tighter">Zadzwoń teraz - czas dojazdu od 15 min</p>
          </a>

          <a href="tel:+48881218462" className="group bg-zinc-900 border-2 border-zinc-800 p-12 rounded-[3rem] hover:border-red-600 transition-all shadow-2xl">
            <div className="flex justify-between items-start mb-10">
              <span className="bg-zinc-800 text-zinc-500 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Numer Rezerwowy</span>
              <svg className="w-10 h-10 text-zinc-700 group-hover:text-red-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <h2 className="text-zinc-500 text-xs font-black uppercase tracking-widest mb-2">Gracjan Rapita</h2>
            <div className="text-4xl md:text-5xl font-black text-white tracking-tighter group-hover:text-red-600 transition-colors">+48 881 218 462</div>
            <p className="text-zinc-600 text-sm mt-6 uppercase font-bold tracking-tighter">Obsługa zleceń planowanych i transportu maszyn</p>
          </a>
        </div>

        {/* Visual Tow Truck Section */}
        <div className="mt-32 rounded-[3rem] overflow-hidden border border-zinc-800 relative group aspect-video md:aspect-[21/9]">
          <img 
            src="https://images.unsplash.com/photo-1620050861184-70b05b3806a5?q=80&w=1920" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
            alt="Profesjonalna Autolaweta G&K" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent flex items-center p-12">
            <div className="max-w-lg">
              <h3 className="text-white font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none mb-6 italic">
                PROFESJONALNY <br /> <span className="text-red-600">SPRZĘT.</span>
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm font-bold uppercase tracking-widest leading-relaxed">
                Nasza flota to nowoczesne pojazdy specjalistyczne (szare VW Craftery) wyposażone w wciągarki o dużym uciągu, umożliwiające bezpieczny transport Twojego mienia.
              </p>
            </div>
          </div>
          <div className="absolute bottom-10 right-10">
            <span className="text-red-600 font-black text-8xl italic opacity-20">GK</span>
          </div>
        </div>

        {/* Services List */}
        <div className="mt-32 grid lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">Nasze Usługi</h3>
            <div className="h-1 w-12 bg-red-600"></div>
            <ul className="space-y-4">
              {['Holowanie aut osobowych i busów', 'Wyciąganie z rowów / błota', 'Transport maszyn budowlanych', 'Awaryjne odpalanie (booster 12/24V)', 'Wymiana koła na drodze', 'Dowóz paliwa'].map((item, idx) => (
                <li key={idx} className="flex items-center text-zinc-400 text-sm font-bold uppercase tracking-widest">
                  <span className="w-2 h-2 bg-red-600 mr-4"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2 bg-zinc-950 p-12 rounded-[3rem] border border-zinc-900">
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8">Dlaczego G&K?</h3>
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-3">
                <div className="text-red-600 font-black text-3xl italic">01.</div>
                <h4 className="text-white font-black text-sm uppercase">Gotowość operacyjna</h4>
                <p className="text-zinc-500 text-xs leading-relaxed uppercase font-bold">Nasze lawety są regularnie serwisowane i zawsze zatankowane, co pozwala nam na start w mniej niż 5 minut od zgłoszenia.</p>
              </div>
              <div className="space-y-3">
                <div className="text-red-600 font-black text-3xl italic">02.</div>
                <h4 className="text-white font-black text-sm uppercase">Ubezpieczenie OCP</h4>
                <p className="text-zinc-500 text-xs leading-relaxed uppercase font-bold">Twoje auto jest w pełni ubezpieczone na czas transportu. Pełne bezpieczeństwo i profesjonalizm na każdym etapie.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadsidePage;
