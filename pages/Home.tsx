
import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1920" 
            className="w-full h-full object-cover grayscale brightness-50" 
            alt="Toyota Corolla - G&K Fleet" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-yellow-400"></div>
              <span className="text-yellow-400 text-xs font-black uppercase tracking-[0.5em]">G&K Spółka Cywilna</span>
            </div>
            <h1 className="text-6xl md:text-[10rem] font-black text-white mb-6 tracking-tighter leading-[0.85]">
              FLOTA <br />
              <span className="text-yellow-400">GK.</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-400 mb-12 max-w-3xl font-medium leading-relaxed">
              Jesteśmy firmą, która redefiniuje standardy mobilności i wsparcia drogowego. Od luksusowych aut sportowych, przez kompleksową flotę Bolt, aż po niezawodną pomoc drogową 24/7 – G&K to Twój sprawdzony partner w każdej trasie.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#uslugi-gk" className="bg-yellow-400 text-black px-12 py-5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white transition-all">
                Przejrzyj kategorie
              </a>
              <Link to="/pomoc-drogowa" className="border border-red-900/50 text-white px-12 py-5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-red-900/20 transition-all flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                Pomoc drogowa 24h
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Categories Grid */}
      <section id="uslugi-gk" className="py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <div className="flex items-end justify-between border-b border-zinc-900 pb-10">
            <div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-2">Usługi <span className="text-yellow-400">GK</span></h2>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Wybierz segment mobilności</p>
            </div>
            <div className="hidden md:block text-right">
              <span className="text-yellow-400 text-4xl font-black">08</span>
              <span className="text-zinc-700 text-xs font-black uppercase block tracking-widest">Kategorii głównych</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-t border-zinc-900">
          {CATEGORIES.map((cat, idx) => (
            <Link 
              key={cat.id} 
              to={cat.id === 'roadside' ? '/pomoc-drogowa' : `/kategoria/${cat.id}`}
              className="group relative h-[500px] border-r border-b border-zinc-900 overflow-hidden transition-all duration-700"
            >
              <img 
                src={cat.icon} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              
              <div className="absolute inset-0 p-10 flex flex-col justify-between">
                <span className="text-zinc-800 text-6xl font-black group-hover:text-yellow-400/20 transition-colors">0{idx + 1}</span>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-yellow-400 transition-colors">{cat.title}</h3>
                  <p className="text-zinc-500 text-xs font-bold leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {cat.description}
                  </p>
                  <div className="w-8 h-1 bg-yellow-400 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Roadside Assistance Hotline Bar */}
      <section className="bg-red-600 py-16 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="flex whitespace-nowrap animate-pulse">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-8xl font-black text-white mr-20">24H EMERGENCY SERVICE</span>
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4 italic">
                AWARIA? KOLIZJA? <br /> <span className="text-black">ZADZWOŃ TERAZ.</span>
              </h2>
              <p className="text-white/80 font-bold uppercase tracking-widest text-sm">Laweta dostępna natychmiast: Toruń • Bydgoszcz • Cała PL</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <a href="tel:+48692913640" className="flex-1 bg-black text-white px-8 py-6 rounded-2xl flex flex-col items-center justify-center hover:scale-105 transition-transform shadow-2xl">
                <span className="text-[10px] font-black opacity-60 uppercase mb-1">Kacper Wochna</span>
                <span className="text-xl font-black">+48 692 913 640</span>
              </a>
              <a href="tel:+48881218462" className="flex-1 bg-white text-red-600 px-8 py-6 rounded-2xl flex flex-col items-center justify-center hover:scale-105 transition-transform shadow-2xl">
                <span className="text-[10px] font-black opacity-60 uppercase mb-1">Gracjan Rapita</span>
                <span className="text-xl font-black">+48 881 218 462</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bolt Fleet Section */}
      <section className="bg-zinc-950 py-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                  Bonus +300 PLN na start
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight uppercase">
                  TWOJA PRACA, <br /> <span className="text-yellow-400">TWOJE ZASADY.</span>
                </h2>
                <div className="h-1 w-20 bg-yellow-400 mt-6"></div>
              </div>
              
              <div className="space-y-6">
                <p className="text-zinc-400 text-xl leading-relaxed">
                  Jesteśmy partnerem, który stawia na Twój zysk. Oferujemy najkorzystniejszy model współpracy na rynku: <span className="text-white font-black">70% dla Ciebie / 30% dla floty</span>. Jeździsz naszymi autami kiedy chcesz – praca idealna również dla uczniów!
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Elastyczny grafik', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                    { label: 'Rozliczenie co tydzień', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                    { label: 'Pełne ubezpieczenie', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                    { label: 'Mechanik i serwis w cenie', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
                    { label: 'Autolaweta w cenie', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                    { label: 'Idealna praca dla ucznia', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' }
                  ].map((perk, i) => (
                    <div key={i} className="flex items-center gap-3 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={perk.icon} /></svg>
                      <span className="text-zinc-300 text-xs font-bold uppercase tracking-tighter">{perk.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 border-t border-zinc-900 pt-12">
                <Link to="/kontakt" className="inline-block bg-yellow-400 text-black px-12 py-5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-yellow-400/10 text-center">
                  Dowiedz się więcej - Napisz do nas
                </Link>
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-black text-white italic">70/30</div>
                  <div className="text-zinc-600 text-[8px] uppercase font-black tracking-widest leading-tight">Najwyższy podział <br /> w regionie</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-zinc-900 border border-zinc-800 flex items-center justify-center p-4">
                <img 
                  src="https://images.unsplash.com/photo-1590650516494-2c8e4a442152?q=80&w=1200" 
                  className="w-full h-full object-cover grayscale" 
                  alt="Bolt Fleet Taxi GK" 
                />
              </div>
              <div className="absolute -bottom-10 -left-10 hidden md:block z-20">
                <div className="bg-yellow-400 p-8 shadow-2xl">
                   <span className="text-black font-black text-4xl block">+300 PLN</span>
                   <span className="text-black/60 font-black text-[10px] uppercase tracking-widest">Za badania na taxi</span>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 hidden md:block">
                <div className="w-40 h-40 border-8 border-yellow-400 flex items-center justify-center">
                   <span className="text-yellow-400 font-black text-4xl">BOLT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
