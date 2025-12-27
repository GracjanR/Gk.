
export type CategoryId = 
  | 'passenger' 
  | 'replacement' 
  | 'roadside' 
  | 'buses' 
  | 'trailers' 
  | 'sports' 
  | 'wedding' 
  | 'bolt';

export interface Vehicle {
  id: string;
  categoryId: CategoryId;
  name: string;
  description: string;
  pricePerDay: number;
  imageUrl: string;
  features: string[];
  power?: string;       // Moc (np. 150 KM)
  seats?: number;      // Ilość miejsc
  transmission?: string; // Typ skrzyni
}

export interface Category {
  id: CategoryId;
  title: string;
  description: string;
  icon: string;
}
