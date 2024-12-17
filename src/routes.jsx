import { App } from './components/App.jsx';
import { Shop } from './components/Shop.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'shop',
    element: <Shop />,
  },
];

export { routes };