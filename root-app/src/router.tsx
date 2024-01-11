import CartApp from 'cart-app/App';
import ProductApp from 'product-app/App';
import { createBrowserRouter } from 'react-router-dom';
import AboutPage from './components/AboutPage';
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
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
