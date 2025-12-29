
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
    description: 'Wsparcie techniczne i holowanie o każdej porze. Profesjonalny Mercedes Atego w gotowości.', 
    icon: 'https://images.unsplash.com/photo-1621905238294-48c4d284f9a0?q=80&w=1200' 
  },
  { 
    id: 'buses', 
    title: 'Busy / Dostawcze', 
    description: 'Niezawodne busy dostawcze i furgony. Idealne do logistyki miejskiej, transportu towarów i przeprowadzek.', 
    icon: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200' 
  },
  { 
    id: 'trailers', 
    title: 'Przyczepy', 
    description: 'Lekkie przyczepki samochodowe oraz profesjonalne naczepy transportowe.', 
    icon: 'https://images.unsplash.com/photo-1622321458261-268e0d55e8d5?q=80&w=1200' 
  },
  { 
    id: 'sports', 
    title: 'Auta Sportowe', 
    description: 'Moc, która definiuje charakter.', 
    icon: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=1200' 
  },
  { 
    id: 'wedding', 
    title: 'Auta do Ślubu', 
    description: 'Elegancja godna najważniejszych chwil. Nowoczesny Ford Mustang VI generacji dowiezie Was do ołtarza w niepowtarzalnym stylu.', 
    icon: 'https://images.unsplash.com/photo-1547038577-da80abbc4f19?q=80&w=1200' 
  },
  { 
    id: 'bolt', 
    title: 'Flota Bolt', 
    description: 'Zarządzanie flotą i wynajem dla kierowców. Gotowe auta do pracy w Taxi/Bolt.', 
    icon: 'https://images.unsplash.com/photo-1593950315186-76a92975b60c?q=80&w=1200' 
  },
];

export const INITIAL_VEHICLES: Vehicle[] = [
  {
    id: '1',
    categoryId: 'sports',
    name: 'BMW M2 Coupe',
    description: 'Kompaktowa bestia z rodziny M. Precyzyjne prowadzenie i rasowy dźwięk silnika.',
    pricePerDay: 800,
    imageUrl: 'https://images.unsplash.com/photo-1606611013016-969c19ba27bb?q=80&w=800',
    features: ['Aktywny wydech', 'M Drive Professional'],
    power: '410 KM',
    seats: 4,
    transmission: 'Automatyczna',
    isActive: true
  },
  {
    id: '2',
    categoryId: 'wedding',
    name: 'Ford Mustang GT VI Gen',
    description: 'Najnowsza linia VI generacji. Mustang GT w wersji ślubnej łączy brutalną siłę silnika Coyote V8 z luksusowym wykończeniem wnętrza.',
    pricePerDay: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1547038577-da80abbc4f19?q=80&w=800',
    features: ['V8 Coyote 5.0', 'Kierowca w cenie', 'Dekoracja Premium'],
    power: '450 KM',
    seats: 4,
    transmission: 'Automatyczna',
    isActive: true
  },
  {
    id: '3',
    categoryId: 'bolt',
    name: 'Auto Miejskie (Taxi/Bolt)',
    description: 'Najpopularniejszy wybór dla kierowców Bolt. Niskie spalanie, wysoki komfort i niezawodność.',
    pricePerDay: 150,
    imageUrl: 'https://images.unsplash.com/photo-1593950315186-76a92975b60c?q=80&w=800',
    features: ['Niskie spalanie', 'Serwis w cenie'],
    power: '122 KM',
    seats: 5,
    transmission: 'Automatyczna',
    isActive: true
  },
  {
    id: '4',
    categoryId: 'roadside',
    name: 'Mercedes Atego - Holownik Ciężki',
    description: 'Profesjonalna autolaweta na podwoziu Mercedesa. Idealna do transportu aut luksusowych, SUV-ów oraz busów.',
    pricePerDay: 500,
    imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800',
    features: ['Wciągarka hydrauliczna', 'Pomoc 24/7', 'Widły do holowania'],
    power: '240 KM',
    seats: 3,
    transmission: 'Manualna',
    isActive: true
  },
  {
    id: '5',
    categoryId: 'buses',
    name: 'Peugeot Boxer L3H2',
    description: 'Profesjonalny furgon dostawczy o dużej ładowności. Idealnie utrzymany technicznie, gotowy do najdłuższych tras.',
    pricePerDay: 300,
    imageUrl: 'https://images.unsplash.com/photo-1580697230188-43997635a90d?q=80&w=800',
    features: ['Przestrzeń 13m3', 'Klimatyzacja', 'Tempomat'],
    power: '140 KM',
    seats: 3,
    transmission: 'Manualna',
    isActive: true
  }
];
