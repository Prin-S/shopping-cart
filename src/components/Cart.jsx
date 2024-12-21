import { Link } from 'react-router';
import { useOutletContext } from "react-router-dom";
import PropTypes from 'prop-types';

function CartItem({ details, onChangeValue, onClickX }) {

  return (
    <div id={details.id} className="cart-box">
      <img className="cart-img" src={details.image} />
      <p className="product-title cart-item-name"><strong>{details.title}</strong></p>
      <p>{`$${details.price}`}</p>
      <label htmlFor="amount">Amount: <input id={details.id} type="number" name="amount" min="1" size="3" defaultValue={details.count} onChange={onChangeValue} /></label>
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

  if (items.every(item => item.count == 0)) {
    return 'The cart is empty.';
  }

  return (
    <div className="container">
      {items.map(item => {
        if (item.count > 0) {
          return <CartItem key={item.id} details={item} onChangeValue={onChangeValue} onClickX={onClickX} />
        }
      })}
      <div className="container-nav">
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