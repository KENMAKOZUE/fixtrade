export interface Listing {
  id?: string;
  title: string;
  category: string;
  photos: string[];
  description: string;
  characteristics: Record<string, string>;
  price: number;
  userId?: string;
  createdAt?: Date;
  status?: 'draft' | 'published';
}

export interface ListingStepData {
  category?: string;
  photos?: string[];
  description?: string;
  characteristics?: Record<string, string>;
  price?: number;
  title?: string;
}
