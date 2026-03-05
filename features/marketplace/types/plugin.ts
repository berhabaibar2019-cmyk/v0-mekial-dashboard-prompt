export interface Plugin {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  isActive: boolean;
  icon?: string;
  features: string[];
}

export interface PluginCategory {
  id: string;
  name: string;
  description: string;
}
