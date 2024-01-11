import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Product = {
  id: string;
  title: string;
  type: string;
  variants: string;
  img: string;
  price: number;
};

export type CartProduct = {
  quantity: number;
  subTotal: number;
} & Product;

type CartStore = {
  products: CartProduct[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
};

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      products: [],
      addToCart: (product: Product) => {
        const isExisting = get().products.some(p => p.id === product.id);
        set({
          products: isExisting
            ? get().products.map(p => {
                return p.id === product.id
                  ? {
                      ...p,
                      quantity: p.quantity + 1,
                      subTotal: p.subTotal + product.price,
                    }
                  : { ...p };
              })
            : [
                ...get().products,
                { ...product, quantity: 1, subTotal: product.price },
              ],
        });
      },
      removeFromCart: (product: Product) => {
        const existingProduct = get().products.find(p => p.id === product.id);

        set({
          products:
            !existingProduct || existingProduct.quantity === 1
              ? get().products.filter(p => p.id !== product.id)
              : get().products.map(p => {
                  return p.id === product.id
                    ? {
                        ...p,
                        quantity: p.quantity - 1,
                        subTotal: p.subTotal - product.price,
                      }
                    : { ...p };
                }),
        });
      },
      clearCart: () => set({ products: [] }),
    }),
    {
      name: 'cart-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
