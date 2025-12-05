// store.js (o cartStore.js)
import { create } from "zustand";
import { CartItem, CartStoreState, Product } from "@/src/interfaces/product";

const cartStore = create<CartStoreState>((set, get) => ({
  // Estado inicial
  cartItems: [],

  // Añade un producto al carrito. Si ya existe, incrementa la cantidad.
  addToCart: (product: Product) => {
    set((state) => {
      const existingItem = state.cartItems.find((item) => item.id === product.id);

      if (existingItem) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }

      const newItem: CartItem = { ...product, quantity: 1 };
      return { cartItems: [...state.cartItems, newItem] };
    });
  },

  // Elimina un producto del carrito por id
  removeFromCart: (productId: number) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== productId),
    }));
  },

  // Incrementa la cantidad de un producto en el carrito
  increaseQuantity: (productId: number) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  },

  // Decrementa la cantidad; si llega a 0, lo elimina
  decreaseQuantity: (productId: number) => {
    set((state) => ({
      cartItems: state.cartItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0),
    }));
  },

  // Vacía el carrito
  clearCart: () => {
    set({ cartItems: [] });
  },
}));

export default cartStore;