import {
  About, Cart, Checkout, Orders, Error,
  HomeLayout, Landing, Products, SingleProduct,
  Login, Register
} from './pages';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { loader as landingLoader } from './pages/Landing';
import { loader as singleProductLoader } from './pages/SingleProduct';
import { loader as productsLoader } from './pages/Products';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: landingLoader
        },
        {
          path: 'products',
          element: <Products />,
          loader: productsLoader,
          errorElement: <Error />
        },
        {
          path: 'products/:id',
          element: <SingleProduct />,
          loader: singleProductLoader,
          errorElement: <Error />
        },
        {
          path: 'cart',
          element: <Cart />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'checkout',
          element: <Checkout />
        },
        {
          path: 'orders',
          element: <Orders />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <Error />
    },
    {
      path: '/register',
      element: <Register />,
      errorElement: <Error />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
