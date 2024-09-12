export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
  image: string;
  country: string;
  university: string;
}

// Define the interface for the API response
export interface UsersResponse {
  total: number; // Total number of products
  users: User[]; // Array of products
}
