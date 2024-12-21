import { useOutletContext } from "react-router-dom";
import PropTypes from 'prop-types';

function Product({ details, onAddToCart }) {

  return (
    <div id={details.id} className="box">
      <img className="img" src={details.image} />
      <h2 className="product-title">{details.title}</h2>
      <p>{`$${details.price}`}</p>
      <form id={details.id} onSubmit={onAddToCart}>
        <label htmlFor="amount">Amount: <input type="number" name="amount" min="1" size="3" defaultValue="1" /></label><br />
        <button className="button" type="submit">Add to Cart</button>
      </form>
    </div>
  );
}

Product.propTypes = {
  details: PropTypes.object,
  onAddToCart: PropTypes.func,
};

function ProductBox({ items, onAddToCart }) {

  return (
    <div className="container container-four">
      {items.map(item => {
        return <Product key={item.id} details={item} onAddToCart={onAddToCart} />
      })}
    </div>
  );
}

ProductBox.propTypes = {
  items: PropTypes.array,
  onAddToCart: PropTypes.func,
};

function Shop() {
  const { items, error, loading, handleAddToCart } = useOutletContext();

  if (loading) {
    return (
      <>
        <h1>Shop</h1>
        <div className="container">
          <p>Loading...</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h1>Shop</h1>
        <div className="container">
          <p>An error has occurred.</p>
          <p>{`${error}`}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>Shop</h1>
      <ProductBox items={items} onAddToCart={handleAddToCart} />
    </>
  );
}

export { Shop };