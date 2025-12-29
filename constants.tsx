
import { Category, Vehicle } from './types';

export const CATEGORIES: Category[] = [
  { 
    id: 'passenger', 
    title: 'Auta Osobowe', 
    description: 'Codzienna wygoda w standardzie premium.', 
    icon: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200' 
  },
  { 
    id: 'replacement', 
    title: 'Auta Zastępcze', 
    description: 'Mobilność bez przerw z OC sprawcy.', 
    icon: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200' 
  },
  { 
    id: 'roadside', 
    title: 'Pomoc Drogowa 24h', 
    description: 'Wsparcie techniczne i holowanie o każdej porze. Profesjonalny sprzęt w gotowości.', 
    icon: 'https://images.unsplash.com/photo-1621905238294-48c4d284f9a0?q=80&w=1200' 
  },
  { 
    id: 'buses', 
    title: 'Busy / Dostawcze', 
    description: 'Niezawodne busy dostawcze i furgony. Idealne do logistyki miejskiej i przeprowadzek.', 
    icon: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?q=80&w=1200' 
  },
  { 
    id: 'trailers', 
    title: 'Przyczepy / Lawety', 
    description: 'Lekkie przyczepki samochodowe oraz profesjonalne naczepy i lawety transportowe.', 
    icon: 'https://images.unsplash.com/photo-1594731802111-070fb7557762?q=80&w=1200' 
  },
  { 
    id: 'sports', 
    title: 'Auta Sportowe', 
    description: 'Moc, która definiuje charakter.', 
    icon: 'https://images.unsplash.com/photo-1544636331-e268592033c2?q=80&w=1200' 
  },
  { 
    id: 'wedding', 
    title: 'Auta do Ślubu', 
    description: 'Elegancja godna najważniejszych chwil. Wyjątkowe samochody w niepowtarzalnym stylu.', 
    icon: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200' 
  },
  { 
    id: 'bolt', 
    title: 'Flota Bolt', 
    description: 'Zarządzanie flotą i wynajem dla kierowców. Gotowe auta do pracy w Taxi/Bolt.', 
    icon: 'https://images.unsplash.com/photo-1593950315186-76a92975b60c?q=80&w=1200' 
  },
];

export const INITIAL_VEHICLES: Vehicle[] = [];
