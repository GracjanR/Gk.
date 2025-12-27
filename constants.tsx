
import { Category, Vehicle } from './types';

export const CATEGORIES: Category[] = [
  { 
    id: 'passenger', 
    title: 'Auta Osobowe', 
    description: 'Codzienna wygoda w standardzie premium.', 
    icon: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1200' 
  },
  { 
    id: 'replacement', 
    title: 'Auta Zastępcze', 
    description: 'Mobilność bez przerw z OC sprawcy.', 
    icon: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1200' 
  },
  { 
    id: 'roadside', 
    title: 'Pomoc Drogowa 24h', 
    description: 'Wsparcie techniczne i holowanie o każdej porze. Profesjonalna laweta w gotowości.', 
    icon: 'https://images.unsplash.com/photo-1620050861184-70b05b3806a5?q=80&w=1200' 
  },
  { 
    id: 'buses', 
    title: 'Busy', 
    description: 'Transport osób i towarów bez kompromisów. Nowoczesne busy dostawcze.', 
    icon: 'https://images.unsplash.com/photo-1620714223084-8dfacc6dfdca?q=80&w=1200' 
  },
  { 
    id: 'trailers', 
    title: 'Przyczepy', 
    description: 'Profesjonalne lawety i naczepy transportowe do ciężkich zadań.', 
    icon: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200' 
  },
  { 
    id: 'sports', 
    title: 'Auta Sportowe', 
    description: 'Moc, która definiuje charakter.', 
    icon: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200' 
  },
  { 
    id: 'wedding', 
    title: 'Auta do Ślubu', 
    description: 'Elegancja godna najważniejszych chwil. Legendarny Mustang dowiezie Was do ołtarza.', 
    icon: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200' 
  },
  { 
    id: 'bolt', 
    title: 'Flota Bolt', 
    description: 'Zarządzanie flotą i wynajem dla kierowców. Gotowe auta do pracy w Taxi/Bolt.', 
    icon: 'https://images.unsplash.com/photo-1590650516494-2c8e4a442152?q=80&w=1200' 
  },
];

export const INITIAL_VEHICLES: Vehicle[] = [
  {
    id: '1',
    categoryId: 'sports',
    name: 'BMW M4 Competition',
    description: 'Agresywny design i niesamowite osiągi. Idealny dla fanów prędkości.',
    pricePerDay: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1606148332571-30c784c1f0ac?q=80&w=800',
    features: ['Skórzana tapicerka', 'Napęd xDrive'],
    power: '510 KM',
    seats: 4,
    transmission: 'Automatyczna'
  },
  {
    id: '2',
    categoryId: 'wedding',
    name: 'Ford Mustang GT Wedding',
    description: 'Legendarny Mustang gotowy, by dowieźć Cię do ołtarza w wielkim stylu.',
    pricePerDay: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800',
    features: ['Dekoracje ślubne', 'Kierowca w cenie'],
    power: '450 KM',
    seats: 4,
    transmission: 'Automatyczna'
  },
  {
    id: '3',
    categoryId: 'bolt',
    name: 'Toyota Corolla Hybrid',
    description: 'Najpopularniejszy wybór dla kierowców Bolt. Niskie spalanie, wysoki komfort.',
    pricePerDay: 150,
    imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=800',
    features: ['Hybryda', 'Serwis w cenie'],
    power: '122 KM',
    seats: 5,
    transmission: 'Automatyczna (e-CVT)'
  },
  {
    id: '4',
    categoryId: 'roadside',
    name: 'Auto Laweta Mercedes-Benz',
    description: 'Profesjonalny sprzęt do holowania aut osobowych i dostawczych.',
    pricePerDay: 300,
    imageUrl: 'https://images.unsplash.com/photo-1620050861184-70b05b3806a5?q=80&w=800',
    features: ['Wciągarka', 'Pomoc 24/7'],
    power: '190 KM',
    seats: 3,
    transmission: 'Manualna'
  }
];
