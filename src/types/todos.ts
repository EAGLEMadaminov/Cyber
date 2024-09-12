export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  // Add other properties specific to your product
}

// Define the interface for the API response
export interface TodosResponse {
  total: number; // Total number of products
  todos: Todo[]; // Array of products
}
