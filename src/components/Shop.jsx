import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Navbar } from './Navbar.jsx';

function Product({ details }) {

  return (
    <div className="box">
      <img className="img" src={details.image} />
      <h2 className="product-title">{details.title}</h2>
      <div><label htmlFor="amount">Amount: <input id="amount" className="amount" type="number" name="amount" size="3" /></label></div>
      <p>{`$${details.price}`}</p>
      <button className="button">Add to Cart</button>
    </div>
  );
}

Product.propTypes = {
  details: PropTypes.object,
};

function ProductBox({ items }) {

  return (
    <div className="container">
      {items.map(item => {
        return <Product key={item.id} details={item} />
      })}
    </div>
  );
}

ProductBox.propTypes = {
  items: PropTypes.array,
};

function Shop() {
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

  if (loading) {
    return (
      <>
        <Navbar />
        <h1>Shop</h1>
        <p>Loading...</p>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <h1>Shop</h1>
        <p>An error has occurred.</p>
        <p>{`${error}`}</p>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <h1>Shop</h1>
      <ProductBox items={items} />
    </>
  );
}

export { Shop };