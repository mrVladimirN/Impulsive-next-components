/* eslint-disable no-unused-vars */
import { Product } from '@/types/walmart';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type CartState = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
};

const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        addToCart: (product) => {
          set((state) => ({
            cart: [...state.cart, product]
          }));
        },
        removeFromCart: (product) => {
          const productToRemove = get().cart.findIndex(
            (p) => p.meta.sku === product.meta.sku
          );
          set((state) => {
            const newCart = [...state.cart];
            newCart.splice(productToRemove, 1);
            return { cart: newCart };
          });
        }
      }),
      { name: 'shopping-cart-storage' }
    )
  )
);
export default useCartStore;
