
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center mb-10">
          <span className="text-5xl font-black text-yellow-400 tracking-tighter mb-2">G&K</span>
          <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-black">Gracjan Rapita & Kacper Wochna</span>
        </div>
        <div className="grid md:grid-cols-3 gap-12 text-zinc-500 text-xs font-bold uppercase tracking-widest mb-16">
          <div className="flex flex-col gap-2">
            <span className="text-zinc-400">Lokalizacje</span>
            <span className="text-white">Toruń / Bydgoszcz / Zławieś Mała</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-zinc-400">Kontakt</span>
            <span className="text-white whitespace-nowrap">+48 881 218 462 / +48 692 913 640</span>
          </div>
          <Link to="/admin" className="flex flex-col gap-2 group transition-all">
            <span className="text-zinc-400 group-hover:text-zinc-300">Administracja</span>
            <span className="text-yellow-400 font-black group-hover:text-white transition-colors">Panel Zarządzania</span>
          </Link>
        </div>
        <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} G&K Spółka Cywilna. Design for speed and performance.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
