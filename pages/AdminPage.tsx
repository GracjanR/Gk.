
import React, { useState, useEffect, useRef } from 'react';
import { CATEGORIES } from '../constants';
import { getVehicles, addVehicle, deleteVehicle } from '../services/storage';
import { CategoryId, Vehicle } from '../types';
import VehicleCard from '../components/VehicleCard';

const AdminPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    categoryId: 'passenger' as CategoryId,
    description: '',
    pricePerDay: 0,
    imageUrl: '',
    features: '',
    power: '',
    seats: 5,
    transmission: 'Automatyczna'
  });

  useEffect(() => {
    const authStatus = sessionStorage.getItem('gk_secure_access_token');
    if (authStatus === 'authorized_admin_session_active') {
      setIsLoggedIn(true);
      setVehicles(getVehicles());
    }
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setLoginError('');

    setTimeout(() => {
      if (loginForm.username === 'Rapita' && loginForm.password === 'RapitaWochna123!!') {
        setIsLoggedIn(true);
        setIsAuthenticating(false);
        sessionStorage.setItem('gk_secure_access_token', 'authorized_admin_session_active');
        setVehicles(getVehicles());
      } else {
        setLoginError('ODMOWA DOSTĘPU: Nieprawidłowe poświadczenia administratora.');
        setIsAuthenticating(false);
      }
    }, 800);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, imageUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const newVehicle: Vehicle = {
      id: Date.now().toString(),
      name: formData.name,
      categoryId: formData.categoryId,
      description: formData.description,
      pricePerDay: formData.pricePerDay,
      imageUrl: formData.imageUrl || 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800',
      features: formData.features.split(',').map(s => s.trim()).filter(s => s !== ''),
      power: formData.power,
      seats: formData.seats,
      transmission: formData.transmission
    };

    const updated = addVehicle(newVehicle);
    setVehicles(updated);
    setFormData({ 
      name: '', 
      categoryId: 'passenger', 
      description: '', 
      pricePerDay: 0, 
      imageUrl: '', 
      features: '',
      power: '',
      seats: 5,
      transmission: 'Automatyczna'
    });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDelete = (id: string) => {
    if (confirm('POTWIERDŹ USUNIĘCIE: Czy na pewno chcesz trwale usunąć ten pojazd z bazy danych G&K?')) {
      const updated = deleteVehicle(id);
      setVehicles(updated);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('gk_secure_access_token');
    setLoginForm({ username: '', password: '' });
  };

  if (!isLoggedIn) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 opacity-20"></div>
        <div className="max-w-md w-full">
          <div className="bg-zinc-900 border-2 border-zinc-800 p-12 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block p-4 rounded-2xl bg-zinc-800 mb-6 border border-zinc-700">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8-0v4h8z" />
                </svg>
              </div>
              <h1 className="text-white text-2xl font-black uppercase tracking-tighter mb-2">Secure Access</h1>
              <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em]">G&K Fleet Management System</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest ml-1">Admin ID</label>
                <input required disabled={isAuthenticating} type="text" value={loginForm.username} onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white text-sm focus:border-yellow-400 focus:outline-none transition-all disabled:opacity-50" placeholder="Username" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest ml-1">Access Key</label>
                <input required disabled={isAuthenticating} type="password" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white text-sm focus:border-yellow-400 focus:outline-none transition-all disabled:opacity-50" placeholder="••••••••" />
              </div>
              {loginError && (
                <div className="bg-red-900/20 border border-red-900/50 p-4 rounded-xl">
                  <p className="text-red-500 text-[10px] font-black uppercase text-center tracking-widest leading-relaxed">{loginError}</p>
                </div>
              )}
              <button type="submit" disabled={isAuthenticating} className="w-full bg-yellow-400 text-black font-black py-5 rounded-2xl hover:bg-white transition-all duration-500 uppercase text-xs tracking-[0.2em] disabled:bg-zinc-800 disabled:text-zinc-600 shadow-xl shadow-yellow-400/10">
                {isAuthenticating ? 'Weryfikacja...' : 'Autoryzuj Dostęp'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-yellow-400 text-black text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Authorized Session</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
            <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">G&K / <span className="text-yellow-400 not-italic font-black">CONTROL PANEL</span></h1>
            <p className="text-zinc-500 uppercase text-[10px] font-black tracking-[0.3em] mt-3">Zalogowany jako: {loginForm.username || 'Rapita'}</p>
          </div>
          <button onClick={handleLogout} className="group flex items-center gap-3 text-zinc-500 hover:text-white text-[10px] font-black uppercase tracking-widest border border-zinc-800 px-8 py-4 rounded-full hover:bg-zinc-900 transition-all">
            <span>Zakończ Sesję</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-900 p-10 rounded-[2.5rem] border border-zinc-800 sticky top-32 shadow-2xl overflow-y-auto max-h-[85vh]">
              <h2 className="text-xl font-black mb-8 text-white flex items-center uppercase tracking-tighter">
                <span className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center mr-4 text-black text-xl">＋</span>
                Nowa Jednostka
              </h2>
              <form onSubmit={handleAdd} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 col-span-2">
                    <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest ml-1">Pełna Nazwa</label>
                    <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white text-sm focus:border-yellow-400 focus:outline-none transition-all" placeholder="Np. Mercedes Sprinter" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2 col-span-2">
                    <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest ml-1">Kategoria</label>
                    <select value={formData.categoryId} onChange={(e) => setFormData({...formData, categoryId: e.target.value as CategoryId})} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white text-sm focus:border-yellow-400 focus:outline-none transition-all appearance-none">
                      {CATEGORIES.map(cat => (
                        <option key={cat.id} value={cat.id} className="bg-zinc-900">{cat.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest ml-1">Moc (KM)</label>
                    <input type="text" value={formData.power} onChange={(e) => setFormData({...formData, power: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-4 py-4 text-white text-sm focus:border-yellow-400 transition-all" placeholder="150 KM" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest ml-1">Miejsca</label>
                    <input type="number" value={formData.seats} onChange={(e) => setFormData({...formData, seats: Number(e.target.value)})} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-4 py-4 text-white text-sm focus:border-yellow-400 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest ml-1">Skrzynia</label>
                    <select value={formData.transmission} onChange={(e) => setFormData({...formData, transmission: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-4 py-4 text-white text-sm focus:border-yellow-400 appearance-none">
                      <option value="Automatyczna">Auto</option>
                      <option value="Manualna">Manual</option>
                      <option value="Półautomatyczna">Pół-auto</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest ml-1">Cena Doba</label>
                    <input required type="number" value={formData.pricePerDay} onChange={(e) => setFormData({...formData, pricePerDay: Number(e.target.value)})} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white text-sm focus:border-yellow-400 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest ml-1">Tagi</label>
                    <input type="text" value={formData.features} onChange={(e) => setFormData({...formData, features: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white text-sm focus:border-yellow-400 transition-all" placeholder="Klima, LED" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest ml-1">Wgraj Zdjęcie</label>
                  <div className="relative group">
                    <input 
                      ref={fileInputRef}
                      type="file" 
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="vehicle-image-upload"
                    />
                    <label 
                      htmlFor="vehicle-image-upload"
                      className="flex flex-col items-center justify-center w-full h-40 bg-zinc-950 border-2 border-dashed border-zinc-800 rounded-2xl cursor-pointer group-hover:border-yellow-400 transition-all overflow-hidden"
                    >
                      {formData.imageUrl ? (
                        <img src={formData.imageUrl} className="w-full h-full object-cover" alt="Preview" />
                      ) : (
                        <div className="flex flex-col items-center text-zinc-500 group-hover:text-yellow-400 transition-colors">
                          <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-[10px] uppercase font-black tracking-widest">Kliknij aby wybrać plik</span>
                        </div>
                      )}
                    </label>
                    {formData.imageUrl && (
                      <button 
                        type="button"
                        onClick={() => setFormData({...formData, imageUrl: ''})}
                        className="absolute top-2 right-2 bg-red-600 text-white p-1.5 rounded-full hover:scale-110 transition-transform shadow-lg"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </button>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest ml-1">Specyfikacja / Opis</label>
                  <textarea required value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white text-sm focus:border-yellow-400 h-24 resize-none transition-all" placeholder="Wpisz szczegóły techniczne..." />
                </div>

                <button type="submit" className="w-full bg-yellow-400 text-black font-black py-5 rounded-2xl hover:bg-white transition-all duration-500 uppercase text-[10px] tracking-widest shadow-xl shadow-yellow-400/20 mt-4">
                  Zaktualizuj Bazę Pojazdów
                </button>
              </form>
            </div>
          </div>

          {/* List Side */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Aktualny Stan Floty</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {vehicles.map(v => (
                <VehicleCard key={v.id} vehicle={v} isAdmin onDelete={handleDelete} />
              ))}
            </div>
            {vehicles.length === 0 && (
              <div className="text-center py-40 bg-zinc-900/30 border-2 border-dashed border-zinc-800 rounded-[3rem]">
                <p className="text-zinc-500 font-black uppercase text-xs tracking-[0.4em]">Baza danych jest pusta</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
