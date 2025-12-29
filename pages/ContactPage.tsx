
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);
    setIsSent(false);

    try {
      const response = await fetch("https://formspree.io/f/mwpqvlpa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          message: formState.message,
          _subject: `Nowe zapytanie G&K FLEET: ${formState.name}`,
        }),
      });

      if (response.ok) {
        setIsSent(true);
        setFormState({ name: '', email: '', phone: '', message: '' });
        // Ukryj komunikat sukcesu po 6 sekundach
        setTimeout(() => setIsSent(false), 6000);
      } else {
        const data = await response.json();
        // Fixed: Replaced Object.hasOwn with a more compatible property check for environments where ES2022 is not the target
        if (data && typeof data === 'object' && 'errors' in data) {
          setError((data as any).errors.map((err: any) => err.message).join(", "));
        } else {
          throw new Error("Wystąpił błąd podczas wysyłania. Spróbuj ponownie później.");
        }
      }
    } catch (err: any) {
      setError(err.message || "Błąd połączenia. Sprawdź internet i spróbuj ponownie.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920')] bg-cover bg-center grayscale brightness-[0.2]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <div className="h-px w-12 bg-yellow-400"></div>
            <span className="text-yellow-400 text-xs font-black uppercase tracking-[0.5em]">G&K FLEET / Kontakt</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none">
            KONTAKT <span className="text-yellow-400">.</span>
          </h1>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          
          {/* Left Side: Direct Contact & Roadside Window */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic mb-8 border-l-4 border-yellow-400 pl-6">Kontakt Bezpośredni</h2>
              <div className="grid gap-6">
                {/* Unified Contact Card */}
                <div className="group bg-zinc-900/40 p-8 md:p-12 rounded-[3rem] border border-zinc-800 hover:border-yellow-400 transition-all shadow-xl">
                  <div className="flex flex-col sm:flex-row gap-10 sm:gap-0">
                    {/* Gracjan */}
                    <div className="flex-1 text-center sm:text-left">
                      <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Koordynator Floty / Bolt</p>
                      <p className="text-white text-xs font-black uppercase tracking-widest mb-1">Gracjan Rapita</p>
                      <a href="tel:+48881218462" className="text-xl md:text-2xl font-black text-white group-hover:text-yellow-400 transition-colors tracking-tighter italic block">+48 881 218 462</a>
                    </div>
                    
                    {/* Vertical Divider */}
                    <div className="hidden sm:block w-px h-16 bg-zinc-800 mx-8 self-center"></div>
                    <div className="block sm:hidden h-px w-full bg-zinc-800"></div>
                    
                    {/* Kacper */}
                    <div className="flex-1 text-center sm:text-left sm:pl-4">
                      <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2 italic">Pomoc Drogowa / Wynajem</p>
                      <p className="text-white text-xs font-black uppercase tracking-widest mb-1">Kacper Wochna</p>
                      <a href="tel:+48692913640" className="text-xl md:text-2xl font-black text-white group-hover:text-yellow-400 transition-colors tracking-tighter italic block">+48 692 913 640</a>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900/40 p-8 md:p-10 rounded-[3rem] border border-zinc-800 flex flex-col items-center sm:items-start gap-2 group hover:border-yellow-400 transition-all shadow-xl">
                  <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1 italic">E-mail firmowy</p>
                  <a href="mailto:tymczasowy@gmail.com" className="text-lg md:text-xl xl:text-2xl font-black text-white group-hover:text-yellow-400 transition-colors tracking-widest italic break-all">tymczasowy@gmail.com</a>
                </div>
              </div>
            </div>

            {/* ROADSIDE ASSISTANCE WINDOW */}
            <Link to="/pomoc-drogowa" className="group relative block bg-red-600 p-1 rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(220,38,38,0.25)] transition-transform hover:scale-[1.02]">
              <div className="relative bg-black rounded-[2.8rem] p-10 md:p-14 overflow-hidden flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-10">
                <div className="absolute top-0 right-0 w-64 h-64 opacity-5 rotate-12 translate-x-12 -translate-y-12 pointer-events-none">
                   <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z"/></svg>
                </div>
                
                <div className="relative z-10 flex-1">
                  <div className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 animate-pulse shadow-lg">
                    STATUS: ONLINE 24H
                  </div>
                  <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.85] italic mb-6">
                    POTRZEBUJESZ <br /> <span className="text-red-600">POMOCY?</span>
                  </h3>
                  <div className="flex items-center justify-center md:justify-start gap-4 text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em]">
                    <div className="w-10 h-px bg-zinc-800 hidden sm:block"></div>
                    Zadzwoń po holownik 24/7
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-red-600 rounded-full flex items-center justify-center text-white shadow-[0_0_50px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-zinc-900 p-10 md:p-14 rounded-[4rem] border border-zinc-800 relative shadow-2xl">
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-4 w-1 bg-yellow-400"></div>
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">Napisz do nas</h2>
              </div>
              <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em] ml-4">Zostaw wiadomość - oddzwonimy ekspresowo</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest ml-2 italic">Imię i Nazwisko / Firma</label>
                <input 
                  required 
                  name="name"
                  type="text" 
                  placeholder="Twoje dane..."
                  value={formState.name} 
                  onChange={(e) => setFormState({...formState, name: e.target.value})} 
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 text-white text-sm focus:border-yellow-400 focus:outline-none transition-all placeholder:text-zinc-800" 
                />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest ml-2 italic">Adres E-mail</label>
                  <input 
                    required 
                    name="email"
                    type="email" 
                    placeholder="kontakt@twoja-firma.pl"
                    value={formState.email} 
                    onChange={(e) => setFormState({...formState, email: e.target.value})} 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 text-white text-sm focus:border-yellow-400 focus:outline-none placeholder:text-zinc-800" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest ml-2 italic">Numer Telefonu</label>
                  <input 
                    required 
                    name="phone"
                    type="tel" 
                    placeholder="+48 000 000 000"
                    value={formState.phone} 
                    onChange={(e) => setFormState({...formState, phone: e.target.value})} 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 text-white text-sm focus:border-yellow-400 focus:outline-none placeholder:text-zinc-800" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest ml-2 italic">Twoja wiadomość</label>
                <textarea 
                  required 
                  name="message"
                  placeholder="W czym możemy pomóc? Opisz swoje zapytanie..."
                  value={formState.message} 
                  onChange={(e) => setFormState({...formState, message: e.target.value})} 
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 text-white text-sm focus:border-yellow-400 focus:outline-none h-44 resize-none placeholder:text-zinc-800" 
                />
              </div>
              
              {isSent && (
                <div className="bg-green-500/10 border border-green-500/50 p-6 rounded-2xl text-center animate-pulse">
                  <p className="text-green-500 font-black uppercase text-xs tracking-widest italic">Wiadomość wysłana pomyślnie! Dziękujemy.</p>
                </div>
              )}
              {error && (
                <div className="bg-red-500/10 border border-red-500/50 p-6 rounded-2xl text-center">
                  <p className="text-red-500 font-black uppercase text-xs tracking-widest italic">{error}</p>
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSending} 
                className="w-full bg-yellow-400 text-black font-black py-7 rounded-3xl hover:bg-white transition-all duration-500 uppercase text-[11px] tracking-[0.4em] shadow-xl italic shadow-yellow-400/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    PRZESYŁANIE...
                  </span>
                ) : 'WYŚLIJ ZAPYTANIE DO G&K'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
