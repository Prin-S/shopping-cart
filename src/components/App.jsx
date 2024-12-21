import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import { Navbar } from './Navbar.jsx';
import '../styles/styles.css';

function useFetchProducts() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', {mode: 'cors'})
      .then(response => response.json())
      .then(response => setItems(response))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { items, error, loading };
}

function App() {
  const { items, error, loading } = useFetchProducts();
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart(e) {
    e.preventDefault();
    setCartCount(cartCount + Number(e.target[0].value));
  }

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Outlet context={{ items, error, loading, handleAddToCart }} />
    </>
  );
}

export { App };