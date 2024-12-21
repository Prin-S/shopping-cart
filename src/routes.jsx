import { App } from './components/App.jsx';
import { Shop } from './components/Shop.jsx';
import { Cart } from './components/Cart.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'shop',
    element: <Shop />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
];

export { routes };