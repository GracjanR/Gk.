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
      path: cat.id === 'roadside' ? '/pomoc-drogowa' : `/kategoria/${cat.id}`,
      id: cat.id
    })),
    { name: 'Kontakt', path: '/kontakt' }
  ];

  return (
    <nav className="bg-black border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-4 group">
              <span className="text-3xl font-black text-yellow-400 tracking-tighter group-hover:scale-105 transition-transform uppercase">G&K</span>
              <div className="flex flex-col border-l border-zinc-700 pl-4 hidden sm:flex h-8 justify-center">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Rapita & Wochna</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.path;
              const isRoadside = link.path === '/pomoc-drogowa';
              // @ts-ignore
              const isBolt = link.id === 'bolt';
              
              let linkClasses = "px-3 py-2 text-[10px] uppercase tracking-widest font-black transition-all ";
              
              if (isActive) {
                if (isRoadside) {
                  linkClasses += "text-red-600 bg-red-600/10 rounded-lg shadow-[0_0_15px_rgba(220,38,38,0.2)]";
                } else if (isBolt) {
                  linkClasses += "text-[#32bb78] bg-[#32bb78]/10 rounded-lg shadow-[0_0_15px_rgba(50,187,120,0.2)]";
                } else {
                  linkClasses += "text-yellow-400";
                }
              } else {
                if (isRoadside) {
                  linkClasses += "text-red-500/80 hover:text-red-600";
                } else if (isBolt) {
                  linkClasses += "text-[#32bb78]/80 hover:text-[#32bb78]";
                } else {
                  linkClasses += "text-zinc-400 hover:text-white";
                }
              }
              
              return (
                <Link 
                  key={idx}
                  to={link.path} 
                  className={linkClasses}
                >
                  {isRoadside && <span className="inline-block w-1.5 h-1.5 bg-red-600 rounded-full mr-1.5 animate-pulse"></span>}
                  {isBolt && !isActive && <span className="inline-block w-1.5 h-1.5 bg-[#32bb78] rounded-full mr-1.5"></span>}
                  {link.name}
                </Link>
              );
            })}
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
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.path;
              const isRoadside = link.path === '/pomoc-drogowa';
              // @ts-ignore
              const isBolt = link.id === 'bolt';

              let mobileClasses = "block px-4 py-4 text-sm font-black uppercase tracking-widest border-b border-zinc-900 last:border-0 ";
              
              if (isActive) {
                if (isRoadside) {
                  mobileClasses += "text-red-600 bg-red-600/5";
                } else if (isBolt) {
                  mobileClasses += "text-[#32bb78] bg-[#32bb78]/5";
                } else {
                  mobileClasses += "text-yellow-400";
                }
              } else {
                if (isRoadside) {
                  mobileClasses += "text-red-500";
                } else if (isBolt) {
                  mobileClasses += "text-[#32bb78]";
                } else {
                  mobileClasses += "text-white";
                }
              }

              return (
                <Link 
                  key={idx}
                  onClick={() => setIsOpen(false)} 
                  to={link.path} 
                  className={mobileClasses}
                >
                  <div className="flex items-center">
                    {isRoadside && <span className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></span>}
                    {isBolt && <span className="w-2 h-2 bg-[#32bb78] rounded-full mr-3"></span>}
                    {link.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;