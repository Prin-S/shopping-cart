import { Link } from 'react-router';
import { useOutletContext, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { Error } from './Error.jsx';

function ProductDetails() {
  const { items, handleAddToCart } = useOutletContext();
  const { id } = useParams();
  const currProduct = items.find(item => item.id == id);

  if(!currProduct) { // If the product does not exist,
    return (
        <Error />
    );
  }

  return (
    <>
      <h1>{currProduct.title}</h1>
      <div className="container">
        <div className="container-product-details">
          <img className="product-details-img" src={currProduct.image} />
          <div className="product-details-text">
            <p><strong>${currProduct.price.toFixed(2)}</strong></p>
            <p>{currProduct.description}</p>
            <br />
            <form id={currProduct.id} onSubmit={handleAddToCart}>
              <label className="quantity-box" htmlFor="amount"><input type="number" name="amount" min="1" size="1" defaultValue="1" /></label>
              <button className="button" type="submit">Add to Cart</button>
            </form>
            <br />
            <p><strong>Category:</strong> <Link to={`/shop/category/${currProduct.categoryLink}`}>{currProduct.category}</Link></p>
            <p><strong>Rating:</strong> {currProduct.rating.rate} from {currProduct.rating.count} votes</p>
          </div>
        </div>
      </div>
    </>
  );
}

ProductDetails.propTypes = {
  items: PropTypes.array,
  handleAddToCart: PropTypes.func,
};

export { ProductDetails };