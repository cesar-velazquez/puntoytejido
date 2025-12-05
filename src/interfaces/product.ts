export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  category: string;
  stock: number;
  available: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartStoreState {
  cartItems: CartItem[]; // Ahora es un array de CartItem[]

  // Acciones actualizadas para manejar cantidades
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  clearCart: () => void;
}
