import useCartStore from 'store-app/store';
import { Product } from '../store/useProducts';
import CartIcon from './CartIcon';

const ProductItem = ({ product }: { product: Product }) => {
  const { addToCart } = useCartStore();
  return (
    <div className="w-full flex flex-col shadow-md rounded-md cursor-pointer group">
      <div className="relative w-full aspect-square overflow-hidden rounded-md rounded-b-none">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-full object-cover rounded-md rounded-b-none group-hover:scale-125 group-hover:filter transition-all duration-200"
        />
      </div>
      <div className="flex justify-between items-start p-3">
        <div className="flex flex-col">
          <p className="font-medium">{product.title}</p>
          <p className="font-thin text-gray-400 text-sm">{product.type}</p>
          <p className="font-thin text-gray-400 text-sm">{product.variants}</p>
        </div>
        <div className="flex flex-col items-between">
          <p className="">${product.price}</p>
          <button className="p-2" onClick={() => addToCart(product)}>
            <CartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
