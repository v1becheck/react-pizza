import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Home from './ui/Home';
import Cart from './features/cart/Cart';
import Order from './features/order/Order';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import { loader as orderLoader } from './features/order/Order';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order',
        element: <Order />,
      },
      {
        path: '/order/:id',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
