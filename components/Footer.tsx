import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center mb-10">
          <span className="text-5xl font-black text-yellow-400 tracking-tighter mb-2 uppercase">G&K</span>
          <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-black italic">
            Spółka Wochna & Rapita — Wynajem Aut • Busy • Naczepy
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-12 text-zinc-500 text-xs font-bold uppercase tracking-widest mb-16">
          <div className="flex flex-col gap-2">
            <span className="text-zinc-400">Lokalizacje</span>
            <span className="text-white">Toruń / Bydgoszcz / Zławieś Mała</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-zinc-400">Kontakt (24H)</span>
            <div className="flex flex-col">
              <span className="text-white whitespace-nowrap">+48 692 913 640 / +48 881 218 462</span>
              <a href="mailto:tymczasowy@gmail.com" className="text-yellow-400 font-black lowercase tracking-normal mt-1 hover:text-white transition-colors">tymczasowy@gmail.com</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-8">
          <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} G&K Spółka Wochna & Rapita. Wszelkie prawa zastrzeżone.
          </p>
          
          <Link 
            to="/admin" 
            className="inline-flex items-center gap-3 px-8 py-3 border border-zinc-900 rounded-full group hover:border-yellow-400 hover:bg-zinc-900/50 transition-all duration-500 shadow-xl"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-700 group-hover:text-yellow-400 transition-colors italic">Panel Zarządzania G&K</span>
            <svg className="w-3.5 h-3.5 text-zinc-800 group-hover:text-yellow-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;