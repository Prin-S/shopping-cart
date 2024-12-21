import { App } from './components/App.jsx';
import { Home } from './components/Home.jsx';
import { Shop } from './components/Shop.jsx';
import { Cart } from './components/Cart.jsx';
import { Checkout } from './components/Checkout.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
    ],
  },
  {
    path: 'shop/:id',
    element: <App />
  },
];

export { routes };