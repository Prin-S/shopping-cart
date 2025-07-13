import { App } from './components/App.jsx';
import { Home } from './components/Home.jsx';
import { Shop } from './components/Shop.jsx';
import { Cart } from './components/Cart.jsx';
import { Checkout } from './components/Checkout.jsx';
import { ProductDetails } from './components/ProductDetails.jsx';
import { Category } from './components/Category.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'shop/:id', element: <ProductDetails /> },
      { path: 'shop/category/:category', element: <Category /> },
    ],
  },
];

export { routes };