
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CATEGORIES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Start', path: '/' },
    ...CATEGORIES.map(cat => ({ 
      name: cat.title, 
      path: cat.id === 'roadside' ? '/pomoc-drogowa' : `/kategoria/${cat.id}` 
    })),
    { name: 'Kontakt', path: '/kontakt' }
  ];

  return (
    <nav className="bg-black border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <span className="text-3xl font-black text-yellow-400 tracking-tighter group-hover:scale-105 transition-transform">G&K</span>
              <div className="h-6 w-[1px] bg-zinc-700 hidden sm:block"></div>
              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] hidden sm:block">Rapita & Wochna</span>
            </Link>
          </div>
          
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link, idx) => (
              <Link 
                key={idx}
                to={link.path} 
                className={`px-3 py-2 text-[10px] uppercase tracking-widest font-black transition ${location.pathname === link.path ? 'text-yellow-400' : 'text-zinc-400 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="xl:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-yellow-400 hover:bg-zinc-900"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-zinc-950 border-b border-zinc-800 absolute w-full max-h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, idx) => (
              <Link 
                key={idx}
                onClick={() => setIsOpen(false)} 
                to={link.path} 
                className={`block px-3 py-4 text-sm font-black uppercase tracking-widest border-b border-zinc-900 last:border-0 ${location.pathname === link.path ? 'text-yellow-400' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
