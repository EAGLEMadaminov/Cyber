export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  brand: string;
  images: string[];
  rating: number;
  thumbnail: string;
}

// Define the interface for the API response
export interface ProductsResponse {
  total: number; // Total number of products
  products: Product[]; // Array of products
}

export type ProductFormInputs = {
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string; // URL of the image
};
