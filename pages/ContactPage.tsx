
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Symulacja wysyłania
    console.log('Form submitted:', formState);
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Header */}
      <section className="relative h-[40vh] flex items-center overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920')] bg-cover bg-center grayscale brightness-[0.2]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-yellow-400"></div>
            <span className="text-yellow-400 text-xs font-black uppercase tracking-[0.5em]">Skontaktuj się z nami</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none">
            KONTAKT <span className="text-yellow-400">.</span>
          </h1>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="space-y-16">
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-8 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-4 text-black text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                </span>
                Bezpośredni Kontakt
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 hover:border-yellow-400/50 transition-all group">
                  <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">Gracjan Rapita</p>
                  <a href="tel:+48881218462" className="text-xl font-black text-white group-hover:text-yellow-400 transition-colors">+48 881 218 462</a>
                </div>
                <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 hover:border-yellow-400/50 transition-all group">
                  <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">Kacper Wochna</p>
                  <a href="tel:+48692913640" className="text-xl font-black text-white group-hover:text-yellow-400 transition-colors">+48 692 913 640</a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-8 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-4 text-black text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </span>
                Nasze Bazy
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-6 p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/50">
                  <div className="text-yellow-400 font-black text-2xl italic">01.</div>
                  <div>
                    <p className="text-white font-black uppercase tracking-tighter">Zławieś Mała</p>
                    <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest">Główna siedziba operacyjna</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/50">
                  <div className="text-yellow-400 font-black text-2xl italic">02.</div>
                  <div>
                    <p className="text-white font-black uppercase tracking-tighter">Toruń / Bydgoszcz</p>
                    <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest">Punkty odbioru i zwrotu</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 bg-yellow-400 rounded-[3rem]">
              <h3 className="text-black font-black text-2xl uppercase tracking-tighter mb-2">Pomoc drogowa 24/7</h3>
              <p className="text-black/70 text-sm font-bold uppercase tracking-widest mb-6">Jesteśmy do Twojej dyspozycji o każdej porze dnia i nocy.</p>
              <a href="tel:+48881218462" className="inline-block bg-black text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">Zadzwoń teraz</a>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-zinc-900 p-12 rounded-[4rem] border border-zinc-800 relative shadow-2xl">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-10">Napisz do nas</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest ml-1">Twoje Imię i Nazwisko</label>
                <input 
                  required
                  type="text" 
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 text-white text-sm focus:border-yellow-400 focus:outline-none transition-all" 
                  placeholder="Jan Kowalski" 
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest ml-1">Email</label>
                  <input 
                    required
                    type="email" 
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 text-white text-sm focus:border-yellow-400 focus:outline-none transition-all" 
                    placeholder="kontakt@twojmail.pl" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest ml-1">Numer Telefonu</label>
                  <input 
                    required
                    type="tel" 
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 text-white text-sm focus:border-yellow-400 focus:outline-none transition-all" 
                    placeholder="+48 000 000 000" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest ml-1">Wiadomość</label>
                <textarea 
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 text-white text-sm focus:border-yellow-400 focus:outline-none h-40 resize-none transition-all" 
                  placeholder="W czym możemy pomóc?" 
                />
              </div>

              {isSent && (
                <div className="bg-green-500/10 border border-green-500/50 p-6 rounded-2xl text-center">
                  <p className="text-green-500 font-black uppercase text-xs tracking-widest">Wiadomość została wysłana pomyślnie!</p>
                </div>
              )}

              <button 
                type="submit" 
                className="w-full bg-yellow-400 text-black font-black py-6 rounded-2xl hover:bg-white transition-all duration-500 uppercase text-xs tracking-[0.2em] shadow-xl shadow-yellow-400/10"
              >
                Wyślij zapytanie
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
