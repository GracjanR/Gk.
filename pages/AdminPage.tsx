
import React, { useState, useEffect, useCallback } from 'react';
import { CATEGORIES } from '../constants';
import { getVehicles, addVehicle, deleteVehicle, toggleVehicleStatus, clearAllVehicles, resetToDefaults } from '../services/storage';
import { CategoryId, Vehicle } from '../types';
import VehicleCard from '../components/VehicleCard';

const AdminPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  
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

  const refreshVehicles = useCallback(() => {
    const data = getVehicles();
    setVehicles([...data]);
  }, []);

  useEffect(() => {
    const authStatus = sessionStorage.getItem('authorized_rapita_session');
    if (authStatus === 'active') {
      setIsLoggedIn(true);
      refreshVehicles();
    }
    window.scrollTo(0, 0);
  }, [refreshVehicles]);

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setLoginError('');

    const isValidUser = loginForm.username === 'Rapita';
    const isValidPass = loginForm.password === 'RapitaWochna123!!';
    
    setTimeout(() => {
      if (isValidUser && isValidPass) {
        setIsLoggedIn(true);
        setIsAuthenticating(false);
        sessionStorage.setItem('authorized_rapita_session', 'active');
        refreshVehicles();
        showNotification("Autoryzacja pomyślna");
      } else {
        setLoginError('BŁĘDNE DANE LOGOWANIA.');
        setIsAuthenticating(false);
      }
    }, 800);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Plik jest za duży (max 2MB)");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, imageUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || formData.pricePerDay <= 0 || !formData.imageUrl) {
      showNotification("Wypełnij wymagane pola (Nazwa, Cena, Zdjęcie)", "error");
      return;
    }

    const newVehicle: Vehicle = {
      id: `gk-${Date.now()}`,
      name: formData.name,
      categoryId: formData.categoryId,
      description: formData.description,
      pricePerDay: formData.pricePerDay,
      imageUrl: formData.imageUrl,
      features: formData.features.split(',').map(s => s.trim()).filter(s => s !== ''),
      power: formData.power || 'N/A',
      seats: formData.seats || 5,
      transmission: formData.transmission || 'Automatyczna',
      isActive: true
    };

    addVehicle(newVehicle);
    refreshVehicles();
    setFormData({ 
      name: '', categoryId: 'passenger', description: '', pricePerDay: 0, 
      imageUrl: '', features: '', power: '', seats: 5, transmission: 'Automatyczna' 
    });
    showNotification("Pojazd dodany pomyślnie");
  };

  const handleDelete = useCallback((id: string) => {
    if (window.confirm("CZY NA PEWNO CHCESZ TRWALE USUNĄĆ TEN POJAZD Z BAZY? Tej operacji nie można cofnąć.")) {
      deleteVehicle(id);
      refreshVehicles();
      showNotification("Pojazd usunięty z bazy", "success");
    }
  }, [refreshVehicles]);

  const handleClearAll = () => {
    if (window.confirm("UWAGA! Czy chcesz usunąć WSZYSTKIE auta z bazy? Strona będzie pusta.")) {
      clearAllVehicles();
      refreshVehicles();
      showNotification("Baza danych została wyczyszczona");
    }
  };

  const handleReset = () => {
    if (window.confirm("Czy przywrócić początkową flotę demo G&K?")) {
      resetToDefaults();
      refreshVehicles();
      showNotification("Przywrócono dane domyślne");
    }
  };

  const handleToggle = useCallback((id: string) => {
    toggleVehicleStatus(id);
    refreshVehicles();
    showNotification("Zaktualizowano widoczność");
  }, [refreshVehicles]);

  if (!isLoggedIn) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
          <div className="text-center mb-12">
            <h1 className="text-white text-2xl font-black uppercase tracking-tighter italic">G&K <span className="text-yellow-400">SYSTEM</span></h1>
            <p className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.5em] mt-3">Panel Rapita</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-1">
              <label className="text-[8px] uppercase font-black text-zinc-600 tracking-widest ml-2">Użytkownik</label>
              <input required type="text" value={loginForm.username} onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 text-white text-sm focus:border-yellow-400 outline-none transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-[8px] uppercase font-black text-zinc-600 tracking-widest ml-2">Hasło</label>
              <input required type="password" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 text-white text-sm focus:border-yellow-400 outline-none transition-all" />
            </div>
            {loginError && <p className="text-red-500 text-[10px] font-black uppercase text-center tracking-widest">{loginError}</p>}
            <button type="submit" disabled={isAuthenticating} className="w-full bg-yellow-400 text-black font-black py-6 rounded-2xl uppercase text-[11px] tracking-widest hover:bg-white transition-all shadow-xl">
              {isAuthenticating ? 'LOGOWANIE...' : 'ZALOGUJ SIĘ'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen py-16">
      {notification && (
        <div className={`fixed top-24 right-6 z-[100] px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl animate-bounce ${notification.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
          {notification.message}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-center border-b border-zinc-900 pb-10 gap-8">
          <div>
            <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">G&K / <span className="text-yellow-400 not-italic">ADMIN</span></h1>
            <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.4em] mt-2">Zalogowano: <span className="text-white">Rapita</span></p>
          </div>
          <div className="flex gap-4">
            <button onClick={handleReset} className="text-yellow-400 hover:text-white text-[9px] font-black uppercase tracking-widest border border-yellow-400/30 px-6 py-4 rounded-full transition-all hover:bg-yellow-400/10">Przywróć dane demo</button>
            <button onClick={() => { sessionStorage.removeItem('authorized_rapita_session'); setIsLoggedIn(false); }} className="text-zinc-500 hover:text-white text-[9px] font-black uppercase tracking-widest border border-zinc-800 px-6 py-4 rounded-full transition-all hover:bg-zinc-900">Wyloguj</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic border-l-4 border-yellow-400 pl-6">Lista Pojazdów ({vehicles.length})</h2>
              {vehicles.length > 0 && (
                <button onClick={handleClearAll} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all shadow-lg shadow-red-600/20">
                  Wyczyść całą bazę
                </button>
              )}
            </div>
            
            {vehicles.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {vehicles.map(v => (
                  <VehicleCard key={v.id} vehicle={v} isAdmin onToggle={handleToggle} onDelete={handleDelete} />
                ))}
              </div>
            ) : (
              <div className="bg-zinc-900/50 border border-dashed border-zinc-800 rounded-[3rem] p-24 text-center">
                <p className="text-zinc-600 font-black uppercase text-[10px] tracking-widest mb-6">Baza danych jest pusta</p>
                <button onClick={handleReset} className="bg-zinc-800 text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all">Dodaj auta przykładowe</button>
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="bg-zinc-900 p-10 rounded-[3.5rem] border border-zinc-800 sticky top-32 shadow-2xl">
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic mb-10">Dodaj Nowy Pojazd</h2>
              <form onSubmit={handleAdd} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-zinc-500 tracking-widest ml-1">Zdjęcie</label>
                  <input type="file" onChange={handleFileUpload} className="hidden" id="v-upload" accept="image/*" />
                  <label htmlFor="v-upload" className="block w-full h-44 bg-zinc-950 border-2 border-dashed border-zinc-800 rounded-[2rem] cursor-pointer hover:border-yellow-400 overflow-hidden relative transition-all">
                    {formData.imageUrl ? <img src={formData.imageUrl} className="w-full h-full object-cover" alt="Podgląd" /> : (
                      <div className="h-full flex flex-col items-center justify-center gap-3">
                        <svg className="w-8 h-8 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
                        <span className="text-zinc-700 text-[9px] font-black uppercase tracking-widest">Kliknij aby wgrać</span>
                      </div>
                    )}
                  </label>
                </div>

                <div className="space-y-1">
                  <label className="text-[8px] uppercase font-black text-zinc-600 ml-2">Nazwa modelu</label>
                  <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-white text-sm focus:border-yellow-400 outline-none" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[8px] uppercase font-black text-zinc-600 ml-2">Cena / 24h</label>
                    <input required type="number" value={formData.pricePerDay} onChange={(e) => setFormData({...formData, pricePerDay: Number(e.target.value)})} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-white text-sm focus:border-yellow-400 outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[8px] uppercase font-black text-zinc-600 ml-2">Kategoria</label>
                    <select value={formData.categoryId} onChange={(e) => setFormData({...formData, categoryId: e.target.value as CategoryId})} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-white text-sm uppercase font-black tracking-widest text-[9px] outline-none">
                      {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                    </select>
                  </div>
                </div>

                <button type="submit" className="w-full bg-yellow-400 text-black font-black py-5 rounded-[2rem] uppercase text-[11px] tracking-widest hover:bg-white transition-all shadow-xl">Opublikuj w systemie</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
