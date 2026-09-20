export interface Product {
  id: string;
  name: string;
  price: number;
  image: string; 
  category: string;
}
export interface CartItem extends Product {
  quantity: number;
}

export type RequestStatus = "idle" | "loading" | "succeeded" | "failed";

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
