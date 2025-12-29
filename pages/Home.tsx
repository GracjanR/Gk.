
import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../constants';

const Home: React.FC = () => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('uslugi-sekcja');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const boltBenefits = [
    { text: '70% DLA KIEROWCY / 30% DLA FLOTY', icon: 'M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
    { text: 'DARMOWY SERWIS I MECHANIK 24/7', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
    { text: 'ROZLICZENIA CO 7 DNI NA KONTO', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { text: 'AUTO Z LICENCJĄ TAXI W CENIE', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1920" 
            className="w-full h-full object-cover grayscale brightness-50" 
            alt="Flota G&K" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-yellow-400"></div>
              <span className="text-yellow-400 text-xs font-black uppercase tracking-[0.5em]">G&K Spółka Cywilna Gracjan Rapita & Kacper Wochna</span>
            </div>
            <h1 className="text-6xl md:text-[10rem] font-black text-white mb-6 tracking-tighter leading-[0.85] uppercase">
              G&K <br />
              <span className="text-yellow-400">FLEET.</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-400 mb-12 max-w-3xl font-medium leading-relaxed uppercase">
              Profesjonalny wynajem aut, naczep i busów. <br />
              <span className="text-white font-bold">Oficjalny Partner Bolt Toruń & Bydgoszcz.</span> Zarządzamy Twoim sukcesem na drodze.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToServices}
                className="bg-yellow-400 text-black px-12 py-5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white transition-all text-center cursor-pointer shadow-xl shadow-yellow-400/10"
              >
                Przejrzyj flotę
              </button>
              <Link to="/pomoc-drogowa" className="border border-red-600/50 text-white px-12 py-5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all flex items-center gap-2 text-center">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                Pomoc drogowa
              </Link>
              <Link to="/kategoria/bolt" className="border border-[#32bb78]/50 text-white px-12 py-5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-[#32bb78] hover:text-white transition-all flex items-center gap-3 text-center">
                <span className="w-2 h-2 bg-[#32bb78] rounded-full shadow-[0_0_10px_#32bb78]"></span>
                Praca Bolt
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section id="uslugi-sekcja" className="py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <div className="flex items-end justify-between border-b border-zinc-900 pb-10">
            <div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-4">Segmenty <span className="text-yellow-400">G&K</span></h2>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest italic">G&K Spółka Cywilna Gracjan Rapita & Kacper Wochna</p>
            </div>
            <div className="hidden md:block text-right">
              <span className="text-[#32bb78] text-4xl font-black italic">BOLT</span>
              <span className="text-zinc-700 text-xs font-black uppercase block tracking-widest">Partner Flotowy</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-t border-zinc-900">
          {CATEGORIES.map((cat, idx) => {
            const isRoadside = cat.id === 'roadside';
            const isBolt = cat.id === 'bolt';
            return (
              <Link 
                key={cat.id} 
                to={isRoadside ? '/pomoc-drogowa' : `/kategoria/${cat.id}`}
                className={`group relative h-[500px] border-r border-b border-zinc-900 overflow-hidden transition-all duration-700 ${
                  isRoadside ? 'hover:border-red-600/30' : isBolt ? 'hover:border-[#32bb78]/30' : 'hover:border-yellow-400/30'
                }`}
              >
                <img 
                  src={cat.icon} 
                  alt={cat.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                
                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <span className={`text-zinc-800 text-6xl font-black transition-colors ${
                    isRoadside ? 'group-hover:text-red-600/20' : isBolt ? 'group-hover:text-[#32bb78]/20' : 'group-hover:text-yellow-400/20'
                  }`}>0{idx + 1}</span>
                  <div>
                    <h3 className={`text-2xl font-black text-white uppercase tracking-tighter mb-2 transition-colors ${
                      isRoadside ? 'group-hover:text-red-600' : isBolt ? 'group-hover:text-[#32bb78]' : 'group-hover:text-yellow-400'
                    }`}>
                      {cat.title}
                    </h3>
                    <p className="text-zinc-500 text-xs font-bold leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {cat.description}
                    </p>
                    <div className={`w-8 h-1 transition-all duration-500 group-hover:w-full ${
                      isRoadside ? 'bg-red-600' : isBolt ? 'bg-[#32bb78]' : 'bg-yellow-400'
                    }`}></div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* EMERGENCY BANNER - ALIGNED NUMBERS */}
        <div className="relative mt-2 overflow-hidden bg-zinc-950">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/40 via-black to-black"></div>
          </div>

          <div className="relative z-10 w-full border-y border-red-600 shadow-[0_0_100px_rgba(220,38,38,0.15)]">
            <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
              <div className="flex flex-col items-center text-center mb-20 space-y-6">
                <div className="inline-flex items-center gap-4 bg-red-600/20 border border-red-600/40 px-8 py-3 rounded-full mx-auto">
                  <span className="w-3 h-3 bg-red-600 rounded-full animate-ping"></span>
                  <span className="text-red-600 text-xs font-black uppercase tracking-[0.5em]">Alarmowa Pomoc Drogowa 24H</span>
                </div>
                <h2 className="text-6xl md:text-[11rem] font-black text-white tracking-tighter uppercase leading-[0.75] italic">
                  HOLOWANIE <br /> <span className="text-red-600">NA JUŻ.</span>
                </h2>
                <div className="h-1 w-48 bg-red-600/30 mx-auto mt-10"></div>
                <p className="text-zinc-500 text-sm md:text-lg font-black uppercase tracking-[0.5em] italic">
                  TORUŃ • BYDGOSZCZ • AUTOSTRADA A1 • S5 • S10 • DK80
                </p>
              </div>

              {/* NUMBERS ALIGNED FLUSH TO CONTAINER */}
              <div className="grid md:grid-cols-2 gap-8 w-full max-w-full">
                <a href="tel:+48692913640" className="group relative bg-red-600 p-12 md:p-16 rounded-[4rem] flex flex-col items-center md:items-start justify-center transition-all hover:scale-[1.02] hover:shadow-[0_40px_100px_rgba(220,38,38,0.4)] overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 opacity-10 rotate-45 translate-x-10 -translate-y-10">
                    <div className="w-full h-full bg-[repeating-linear-gradient(-45deg,#000,#000_15px,#fff_15px,#fff_30px)]"></div>
                  </div>
                  <div className="flex items-center gap-3 mb-6 bg-white/10 px-6 py-2 rounded-full border border-white/20">
                    <span className="text-white text-[10px] font-black uppercase tracking-widest italic">KACPER WOCHNA</span>
                  </div>
                  <span className="text-black/40 text-[10px] font-black uppercase tracking-[0.4em] mb-4">DYSPOZYTORNIA GŁÓWNA</span>
                  <div className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter group-hover:scale-110 transition-transform origin-left whitespace-nowrap">
                    +48 692 913 640
                  </div>
                  <div className="h-px w-24 bg-white/40 mt-10"></div>
                  <p className="text-red-100 text-[11px] font-black uppercase tracking-widest mt-6 opacity-80 italic">Holowanie aut osobowych i dostawczych</p>
                </a>

                <a href="tel:+48881218462" className="group bg-zinc-900 border border-zinc-800 p-12 md:p-16 rounded-[4rem] flex flex-col items-center md:items-start justify-center transition-all hover:border-red-600/50 hover:bg-zinc-900/80">
                   <div className="flex items-center gap-3 mb-6 bg-zinc-800 px-6 py-2 rounded-full border border-zinc-700">
                    <span className="text-zinc-400 text-[10px] font-black uppercase tracking-widest italic">GRACJAN RAPITA</span>
                  </div>
                  <span className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">LOGISTYKA I FLOTA</span>
                  <div className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter group-hover:text-red-600 transition-colors origin-left whitespace-nowrap">
                    +48 881 218 462
                  </div>
                  <div className="h-px w-24 bg-zinc-800 mt-10"></div>
                  <p className="text-zinc-500 text-[11px] font-black uppercase tracking-widest mt-6 italic">Specjalista ds. transportu i lawet</p>
                </a>
              </div>

              <div className="mt-24 pt-16 border-t border-zinc-900 flex flex-wrap justify-between items-center gap-10 opacity-30">
                <span className="text-zinc-600 font-black text-[10px] uppercase tracking-[0.6em] italic">AUTOLAWETA 24H</span>
                <span className="text-zinc-600 font-black text-[10px] uppercase tracking-[0.6em] italic">AWARYJNE URUCHAMIANIE</span>
                <span className="text-zinc-600 font-black text-[10px] uppercase tracking-[0.6em] italic">TRANSPORT MASZYN</span>
                <span className="text-zinc-600 font-black text-[10px] uppercase tracking-[0.6em] italic">G&K FLEET ASSISTANCE</span>
              </div>
            </div>
          </div>
        </div>

        {/* PRZEJRZYSTA SEKCJA BOLT - REDESIGNED */}
        <div className="relative mt-24 overflow-hidden bg-black">
          <div className="max-w-7xl mx-auto px-4 py-24">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              
              {/* Kolumna Lewa: Tekst i Korzyści */}
              <div className="space-y-12 order-2 lg:order-1">
                <div>
                  <div className="inline-flex items-center gap-3 bg-[#32bb78]/10 border border-[#32bb78]/20 px-6 py-2 rounded-full mb-8">
                    <span className="w-2 h-2 bg-[#32bb78] rounded-full"></span>
                    <span className="text-[#32bb78] text-[10px] font-black uppercase tracking-[0.3em]">Partner Flotowy Toruń & Bydgoszcz</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8] italic mb-8">
                    ZOSTAŃ <br /> <span className="text-[#32bb78]">KIEROWCĄ.</span>
                  </h2>
                  <p className="text-zinc-500 text-lg font-medium max-w-lg uppercase tracking-widest border-l-2 border-[#32bb78] pl-6">
                    Najbardziej przejrzyste warunki na rynku. <br /> Zarabiaj bez ukrytych kosztów.
                  </p>
                </div>

                {/* Earnings Module */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-10 flex flex-col sm:flex-row items-center justify-between gap-8 group hover:border-[#32bb78]/30 transition-all duration-500">
                  <div className="text-center sm:text-left">
                    <p className="text-[#32bb78] text-6xl font-black tracking-tighter italic">70%</p>
                    <p className="text-zinc-500 text-[9px] font-black uppercase tracking-widest mt-1">Dla Ciebie (Zysk)</p>
                  </div>
                  <div className="h-px w-full sm:w-px sm:h-16 bg-zinc-800"></div>
                  <div className="text-center sm:text-right">
                    <p className="text-white text-6xl font-black tracking-tighter italic">30%</p>
                    <p className="text-zinc-500 text-[9px] font-black uppercase tracking-widest mt-1">Dla Floty G&K</p>
                  </div>
                </div>

                {/* List of Benefits */}
                <div className="space-y-6">
                  {boltBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-5 group/item">
                      <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-[#32bb78] group-hover/item:bg-[#32bb78] group-hover/item:text-black transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={benefit.icon}/>
                        </svg>
                      </div>
                      <span className="text-white text-[11px] font-black uppercase tracking-widest">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-6 pt-6">
                  <Link to="/kategoria/bolt" className="bg-[#32bb78] text-black px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all text-center shadow-xl shadow-[#32bb78]/10">
                    Sprawdź szczegóły
                  </Link>
                  <a href="tel:+48881218462" className="border border-zinc-800 text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-zinc-900 transition-all text-center flex items-center justify-center gap-3">
                    <svg className="w-4 h-4 text-[#32bb78]" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                    Zadzwoń teraz
                  </a>
                </div>
              </div>

              {/* Kolumna Prawa: Czysty Visual */}
              <div className="order-1 lg:order-2 relative group">
                <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden border border-zinc-900 shadow-2xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1593950315186-76a92975b60c?q=80&w=1400" 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                    alt="Bolt Taxi"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  
                  {/* Badge Bonus */}
                  <div className="absolute top-10 right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <span className="text-[#32bb78] text-4xl font-black tracking-tighter leading-none">+300zł</span>
                    <span className="text-black text-[9px] font-black uppercase tracking-widest mt-1">Na badania / start</span>
                  </div>

                  <div className="absolute bottom-12 left-12 right-12 bg-black/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl">
                    <p className="text-white text-2xl font-black tracking-tighter uppercase italic leading-tight">Zapewniamy nową flotę i darmowy serwis.</p>
                    <div className="h-1 w-12 bg-[#32bb78] mt-4"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom decorative bar */}
        <div className="w-full h-1 bg-red-600">
             <div className="h-full w-1/3 bg-white animate-[fast_1.5s_infinite_linear]"></div>
        </div>
      </section>

      <style>{`
        @keyframes fast {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
};

export default Home;
