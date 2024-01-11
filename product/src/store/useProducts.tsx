import { create } from 'zustand';
import { PRODUCTS } from '../data';

export type Product = (typeof PRODUCTS)[0];

export interface IProductStore {
  products: Product[];
}

const useStore = create<IProductStore>((_, get) => ({
  products: PRODUCTS,
  getProductById: (id: string) => get().products.find(p => p.id === id),
}));

export default useStore;
