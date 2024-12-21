import { Link } from 'react-router';
import { useOutletContext } from "react-router-dom";
import PropTypes from 'prop-types';

function CartItem({ details, onChangeValue, onClickX }) {

  return (
    <div id={details.id} className="container-cart">
      <Link to={`/shop/${details.id}`}><img className="cart-img" src={details.image} /></Link>
      <h2 className="product-title cart-item-name"><Link to={`/shop/${details.id}`}><strong>{details.title}</strong></Link></h2>
      <p>${details.price}</p>
      <label htmlFor="amount"><input id={details.id} type="number" name="amount" min="1" size="1" defaultValue={details.count} onChange={onChangeValue} /></label>
      <p>${Math.round((details.subtotal + Number.EPSILON) * 100) / 100}</p>
      <div>
        <button id={details.id} className="button" onClick={onClickX}>X</button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  details: PropTypes.object,
  onClickX: PropTypes.func,
  onChangeValue: PropTypes.func,
};

function CartBox({ items, onChangeValue, onClickX }) {
  let total = 0;
  items.map(item => total += item.subtotal);
  total = Math.round((total + Number.EPSILON) * 100) / 100; // https://stackoverflow.com/a/11832950/20189502

  if (items.every(item => item.count == 0)) {
    return (
      <div className="container">The cart is empty.</div>
    );
  }

  return (
    <div className="container">
      <div className="container-cart">
        <p className="cart-product"><strong>Product</strong></p>
        <p><strong>Price</strong></p>
        <p><strong>Quantity</strong></p>
        <p><strong>Subtotal</strong></p>
      </div>
      {items.map(item => {
        if (item.count > 0) {
          return <CartItem key={item.id} details={item} onChangeValue={onChangeValue} onClickX={onClickX} />
        }
      })}
      <div className="container-nav">
        <p><strong>Total:</strong> ${total}</p>
        <Link to="/checkout">
          <button className="button">Check out</button>
        </Link>
      </div>
    </div>
  );
}

CartBox.propTypes = {
  items: PropTypes.array,
  onClickX: PropTypes.func,
  onChangeValue: PropTypes.func,
};

function Cart() {
  const { items, handleChangeInCart, handleRemoveFromCart } = useOutletContext();

  return (
    <>
      <h1>Cart</h1>
      <CartBox items={items} onChangeValue={handleChangeInCart} onClickX={handleRemoveFromCart} />
    </>
  );
}

export { Cart };