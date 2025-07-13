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
      .then(response => {
        response.map(item => {
          item.count = 0;
          item.subtotal = 0;
          item.categoryLink = item.category.replaceAll(' ', '-').replaceAll(`'`,'');
        });
        setItems(response);
      })
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
    items.find(item => item.id == e.target.id).count += Number(e.target[0].value);
    items.find(item => item.id == e.target.id).subtotal += Number(e.target[0].value) * items.find(item => item.id == e.target.id).price;
    setCartCount(cartCount + Number(e.target[0].value));
  }

  function handleChangeInCart(e) {
    const valueToDecrease = items.find(item => item.id == e.target.id).count;
    items.find(item => item.id == e.target.id).count = Number(e.target.value);
    items.find(item => item.id == e.target.id).subtotal = Number(e.target.value) * items.find(item => item.id == e.target.id).price;
    setCartCount(cartCount - valueToDecrease + Number(e.target.value));
  }

  function handleRemoveFromCart(e) {
    const valueToDecrease = items.find(item => item.id == e.target.id).count;
    items.find(item => item.id == e.target.id).count = 0;
    items.find(item => item.id == e.target.id).subtotal = 0;
    setCartCount(cartCount - valueToDecrease);
  }

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Outlet context={{ items, error, loading, handleAddToCart, handleChangeInCart, handleRemoveFromCart }} />
    </>
  );
}

export { App };