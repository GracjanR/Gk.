
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
  power?: string;       
  seats?: number;      
  transmission?: string; 
  isActive: boolean; // Nowe pole do sterowania widocznością
}

export interface Category {
  id: CategoryId;
  title: string;
  description: string;
  icon: string;
}
