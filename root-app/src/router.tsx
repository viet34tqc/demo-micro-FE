import ProductApp from 'product-app/App';
import CartApp from 'cart-app/App';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductApp />,
      },
      {
        path: 'cart',
        element: <CartApp />,
      },
    ],
  },
]);

export default router;
