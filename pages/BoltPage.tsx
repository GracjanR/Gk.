
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BoltPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const boltFeatures = [
    { text: 'Rozliczenia co 7 dni na konto', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', highlight: false },
    { text: 'Bonus +300 zł na start i badania', icon: 'M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z', highlight: true },
    { text: 'Darmowy serwis i mechanik G&K', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', highlight: false },
    { text: 'Auto z licencją TAXI w cenie', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', highlight: false },
    { text: 'Pomoc drogowa G&K 24/7', icon: 'M13 10V3L4 14h7v7l9-11h-7z', highlight: false },
    { text: 'Elastyczny grafik pracy', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', highlight: false }
  ];

  const steps = [
    { title: 'Zadzwoń do nas', desc: 'Koordynator Gracjan przedstawi Ci aktualnie dostępne auta i warunki.' },
    { title: 'Szybkie formalności', desc: 'Sprawdzamy dokumenty i przygotowujemy umowę najmu.' },
    { title: 'Odbiór auta', desc: 'Otrzymujesz czyste, zatankowane auto z kompletem licencji.' },
    { title: 'Zarabiasj', desc: 'Wyjeżdżasz na miasto i cieszysz się zyskiem co 7 dni.' }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Light Hero Section */}
      <section className="relative h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559416523-140ddc3d238c?q=80&w=1920" 
            className="w-full h-full object-cover grayscale brightness-[0.25]" 
            alt="Taxi G&K Fleet" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <Link to="/" className="inline-flex items-center text-zinc-500 hover:text-[#32bb78] mb-12 transition-all font-black text-[10px] uppercase tracking-[0.4em]">
            <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
            Powrót do startu
          </Link>
          <div className="inline-flex items-center gap-3 bg-[#32bb78]/10 border border-[#32bb78]/20 px-6 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-[#32bb78] rounded-full animate-pulse"></span>
            <span className="text-[#32bb78] text-[10px] font-black uppercase tracking-[0.3em]">Oficjalny Partner Bolt</span>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter uppercase leading-[0.8] italic mb-8">
            FLOTA <br /> <span className="text-[#32bb78]">BOLT.</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-2xl font-medium max-w-2xl uppercase tracking-widest border-l-2 border-[#32bb78] pl-8">
            Przejrzyste zasady, nowoczesne auta <br /> i wsparcie mechaników 24h.
          </p>
        </div>
      </section>

      {/* Main Content - Clarity Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Earnings Module - Large & Clear */}
          <div className="mb-32">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-zinc-400 text-xs font-black uppercase tracking-[0.5em] mb-4">Twój Model Zarobkowy</h2>
              <div className="h-1 w-20 bg-[#32bb78]"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900 rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="bg-black p-16 flex flex-col items-center justify-center group hover:bg-[#32bb78]/5 transition-all duration-500">
                <span className="text-[#32bb78] text-8xl md:text-[12rem] font-black tracking-tighter italic group-hover:scale-105 transition-transform">70%</span>
                <span className="text-white text-xl font-black uppercase tracking-widest mt-4">Dla Kierowcy</span>
                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mt-4">Twój czysty zysk z przejazdów</p>
              </div>
              <div className="bg-black p-16 flex flex-col items-center justify-center group hover:bg-zinc-900 transition-all duration-500">
                <span className="text-zinc-800 text-8xl md:text-[12rem] font-black tracking-tighter italic group-hover:text-zinc-700 transition-colors">30%</span>
                <span className="text-zinc-500 text-xl font-black uppercase tracking-widest mt-4">Dla Floty G&K</span>
                <p className="text-zinc-700 text-[10px] font-bold uppercase tracking-widest mt-4">Zajmujemy się autem i licencjami</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-24 items-start">
            {/* Left side: Benefits List */}
            <div className="lg:col-span-7 space-y-16">
              <div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic mb-12 flex items-center gap-6">
                  <span className="w-10 h-1 bg-[#32bb78]"></span>
                  Dlaczego G&K Fleet?
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {boltFeatures.map((f, i) => (
                    <div key={i} className={`p-8 rounded-[2rem] border transition-all duration-500 flex flex-col gap-6 ${
                      f.highlight 
                      ? 'bg-[#32bb78] border-[#32bb78] text-black shadow-xl shadow-[#32bb78]/20' 
                      : 'bg-zinc-950 border-zinc-900 hover:border-[#32bb78]/40 text-white'
                    }`}>
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        f.highlight ? 'bg-black/10' : 'bg-[#32bb78]/10 text-[#32bb78]'
                      }`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={f.icon}/></svg>
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest leading-relaxed">{f.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coordinator Section */}
              <div className="bg-zinc-900/40 border border-zinc-800 p-12 rounded-[3.5rem] flex flex-col md:flex-row items-center gap-12 group hover:border-[#32bb78]/30 transition-all">
                <div className="w-32 h-32 bg-zinc-950 rounded-full border-2 border-[#32bb78]/20 flex items-center justify-center text-[#32bb78] shrink-0">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <div className="text-center md:text-left flex-grow">
                  <span className="text-[#32bb78] text-[9px] font-black uppercase tracking-[0.4em] mb-2 block">Koordynator Floty G&K</span>
                  <h4 className="text-white text-4xl font-black tracking-tighter italic mb-6">GRACJAN RAPITA</h4>
                  <a href="tel:+48881218462" className="inline-flex items-center gap-4 bg-[#32bb78] text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-[#32bb78]/10">
                    Rozpocznij współpracę
                  </a>
                </div>
              </div>
            </div>

            {/* Right side: Process Steps */}
            <div className="lg:col-span-5 space-y-12">
               <div className="bg-zinc-950 border border-zinc-900 p-12 rounded-[3.5rem] sticky top-32">
                 <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic mb-12">4 Proste Kroki</h3>
                 <div className="space-y-12">
                   {steps.map((step, idx) => (
                     <div key={idx} className="flex gap-8 group">
                       <div className="flex flex-col items-center">
                         <div className="w-10 h-10 rounded-full border-2 border-zinc-800 flex items-center justify-center text-zinc-600 font-black text-xs group-hover:border-[#32bb78] group-hover:text-[#32bb78] transition-all">
                           {idx + 1}
                         </div>
                         {idx !== steps.length - 1 && <div className="w-px h-full bg-zinc-900 mt-4"></div>}
                       </div>
                       <div className="pb-10">
                         <h4 className="text-white text-sm font-black uppercase tracking-widest mb-2 group-hover:text-[#32bb78] transition-colors">{step.title}</h4>
                         <p className="text-zinc-500 text-[11px] font-medium leading-relaxed uppercase tracking-widest">{step.desc}</p>
                       </div>
                     </div>
                   ))}
                 </div>
                 
                 <div className="mt-8 p-8 bg-[#32bb78]/5 rounded-3xl border border-[#32bb78]/10 text-center">
                    <span className="text-[#32bb78] text-3xl font-black tracking-tighter italic block mb-2">+ 300 ZŁ</span>
                    <span className="text-zinc-500 text-[9px] font-black uppercase tracking-widest">Bonus na badania / start</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call Banner */}
      <section className="bg-black py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-zinc-600 text-xs font-black uppercase tracking-[0.6em] mb-12 italic">Czekamy na Ciebie w zespole G&K</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="text-left">
              <span className="text-white text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">Dołącz do <br /> <span className="text-[#32bb78]">najlepszych.</span></span>
            </div>
            <div className="h-px w-20 bg-zinc-800 hidden md:block"></div>
            <a href="tel:+48881218462" className="group flex flex-col items-end">
               <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">Dzwoń bezpośrednio</span>
               <span className="text-white text-3xl md:text-5xl font-black tracking-tighter group-hover:text-[#32bb78] transition-colors">+48 881 218 462</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoltPage;
