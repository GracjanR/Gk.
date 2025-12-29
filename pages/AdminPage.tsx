
import React, { useState, useEffect, useCallback } from 'react';
import { CATEGORIES } from '../constants';
import { getVehicles, addVehicle, deleteVehicle, toggleVehicleStatus, clearAllVehicles } from '../services/storage';
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

  // Odświeżanie z bazy localStorage
  const refreshVehicles = useCallback(() => {
    const data = getVehicles();
    setVehicles(data);
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
    if (loginForm.username === 'Rapita' && loginForm.password === 'RapitaWochna123!!') {
      setIsLoggedIn(true);
      sessionStorage.setItem('authorized_rapita_session', 'active');
      refreshVehicles();
      showNotification("Witaj w systemie G&K");
    } else {
      setLoginError('BŁĘDNE DANE');
    }
    setIsAuthenticating(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFormData({ ...formData, imageUrl: reader.result as string });
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.imageUrl) {
      showNotification("Podaj nazwę i dodaj zdjęcie!", "error");
      return;
    }

    const newVehicle: Vehicle = {
      id: `id-${Date.now()}`,
      name: formData.name,
      categoryId: formData.categoryId,
      description: formData.description,
      pricePerDay: formData.pricePerDay,
      imageUrl: formData.imageUrl,
      features: formData.features.split(',').map(s => s.trim()).filter(s => s !== ''),
      power: formData.power || 'N/A',
      seats: Number(formData.seats) || 5,
      transmission: formData.transmission || 'Automatyczna',
      isActive: true
    };

    const updatedList = addVehicle(newVehicle);
    setVehicles(updatedList); // Natychmiastowa aktualizacja stanu
    setFormData({ 
      name: '', categoryId: 'passenger', description: '', pricePerDay: 0, 
      imageUrl: '', features: '', power: '', seats: 5, transmission: 'Automatyczna' 
    });
    showNotification("Pojazd dodany do bazy");
  };

  const handleDelete = useCallback((id: string) => {
    if (window.confirm("UWAGA: Czy na pewno trwale usunąć to auto z całej bazy danych?")) {
      const updatedList = deleteVehicle(id);
      setVehicles(updatedList); // Natychmiastowa aktualizacja stanu
      showNotification("Usunięto trwale z systemu");
    }
  }, []);

  const handleToggle = useCallback((id: string) => {
    const updatedList = toggleVehicleStatus(id);
    setVehicles(updatedList);
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center p-6 font-inter">
        <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 p-12 rounded-[3.5rem] shadow-2xl text-center">
          <h1 className="text-white text-3xl font-black italic uppercase mb-8 tracking-tighter">G&K <span className="text-yellow-400">ADMIN</span></h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input required type="text" placeholder="Użytkownik" value={loginForm.username} onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })} className="w-full bg-black border border-zinc-800 rounded-2xl px-6 py-5 text-white" />
            <input required type="password" placeholder="Hasło" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} className="w-full bg-black border border-zinc-800 rounded-2xl px-6 py-5 text-white" />
            <button type="submit" className="w-full bg-yellow-400 text-black font-black py-5 rounded-2xl uppercase tracking-widest hover:bg-white transition-all">ZALOGUJ</button>
            {loginError && <p className="text-red-500 text-[10px] font-black uppercase mt-4 tracking-widest">{loginError}</p>}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen py-16 font-inter">
      {notification && (
        <div className="fixed top-24 right-6 z-[100] px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest bg-yellow-400 text-black shadow-2xl animate-pulse">
          {notification.message}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-center border-b border-zinc-900 pb-10 gap-8">
          <h1 className="text-5xl font-black text-white italic tracking-tighter uppercase">SYSTEM / <span className="text-yellow-400">FLOTA</span></h1>
          <button onClick={() => { sessionStorage.removeItem('authorized_rapita_session'); setIsLoggedIn(false); }} className="text-zinc-600 hover:text-white text-[9px] font-black uppercase tracking-[0.4em] border border-zinc-800 px-8 py-4 rounded-full transition-all">Wyloguj Panel</button>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="flex justify-between items-center mb-10 border-l-4 border-yellow-400 pl-6">
               <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">Twoja Flota ({vehicles.length})</h2>
               {vehicles.length > 0 && (
                 <button onClick={() => { if(window.confirm("CZY NA PEWNO USUNĄĆ WSZYSTKO?")) setVehicles(clearAllVehicles()); }} className="text-red-600 text-[9px] font-black uppercase tracking-widest hover:underline">Wyczyść listę</button>
               )}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {vehicles.map(v => (
                <VehicleCard key={v.id} vehicle={v} isAdmin onToggle={handleToggle} onDelete={handleDelete} />
              ))}
              {vehicles.length === 0 && <div className="col-span-2 py-20 text-center border-2 border-dashed border-zinc-900 rounded-[3rem] text-zinc-700 font-black uppercase text-xs tracking-widest italic">Brak aut w bazie. Dodaj pierwsze auto po prawej stronie.</div>}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-zinc-900 p-8 md:p-10 rounded-[3.5rem] border border-zinc-800 sticky top-32 shadow-2xl">
              <h2 className="text-2xl font-black text-white italic mb-8 uppercase tracking-tighter">Nowa Jednostka</h2>
              <form onSubmit={handleAdd} className="space-y-4">
                <input type="file" onChange={handleFileUpload} className="hidden" id="v-up-real" accept="image/*" />
                <label htmlFor="v-up-real" className="block w-full h-44 bg-black border-2 border-dashed border-zinc-800 rounded-3xl cursor-pointer hover:border-yellow-400 overflow-hidden group">
                  {formData.imageUrl ? <img src={formData.imageUrl} className="w-full h-full object-cover" /> : <div className="h-full flex items-center justify-center text-zinc-800 text-[10px] font-black uppercase tracking-widest group-hover:text-yellow-400">Dodaj zdjęcie pojazdu</div>}
                </label>
                
                <input required type="text" placeholder="Model (np. Mercedes Sprinter)" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-black border border-zinc-800 rounded-2xl px-6 py-4 text-white text-sm outline-none focus:border-yellow-400" />
                
                <div className="grid grid-cols-2 gap-4">
                  <input required type="number" placeholder="PLN / Doba" value={formData.pricePerDay || ''} onChange={(e) => setFormData({...formData, pricePerDay: Number(e.target.value)})} className="w-full bg-black border border-zinc-800 rounded-2xl px-6 py-4 text-white text-sm outline-none" />
                  <select value={formData.categoryId} onChange={(e) => setFormData({...formData, categoryId: e.target.value as CategoryId})} className="w-full bg-black border border-zinc-800 rounded-2xl px-6 py-4 text-white text-[10px] font-black uppercase outline-none">
                    {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <input type="text" placeholder="KM" value={formData.power} onChange={(e) => setFormData({...formData, power: e.target.value})} className="bg-black border border-zinc-800 rounded-2xl px-4 py-4 text-white text-xs outline-none" />
                  <input type="number" placeholder="Miejsc" value={formData.seats} onChange={(e) => setFormData({...formData, seats: Number(e.target.value)})} className="bg-black border border-zinc-800 rounded-2xl px-4 py-4 text-white text-xs outline-none" />
                  <select value={formData.transmission} onChange={(e) => setFormData({...formData, transmission: e.target.value})} className="bg-black border border-zinc-800 rounded-2xl px-4 py-4 text-white text-[9px] font-black uppercase outline-none">
                    <option value="Automatyczna">Auto</option>
                    <option value="Manualna">Manual</option>
                  </select>
                </div>

                <input type="text" placeholder="Cechy (np. Klimatyzacja, Tempomat)" value={formData.features} onChange={(e) => setFormData({...formData, features: e.target.value})} className="w-full bg-black border border-zinc-800 rounded-2xl px-6 py-4 text-white text-sm outline-none" />
                
                <textarea placeholder="Szczegółowy opis..." value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full bg-black border border-zinc-800 rounded-2xl px-6 py-4 text-white text-sm h-24 resize-none outline-none" />
                
                <button type="submit" className="w-full bg-yellow-400 text-black font-black py-6 rounded-3xl uppercase text-xs tracking-widest hover:bg-white transition-all shadow-xl mt-4">ZAPISZ TRWALE NA STRONIE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
