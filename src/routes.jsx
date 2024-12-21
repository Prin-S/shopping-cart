import { App } from './components/App.jsx';
import { Home } from './components/Home.jsx';
import { Shop } from './components/Shop.jsx';
import { Cart } from './components/Cart.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
];

export { routes };