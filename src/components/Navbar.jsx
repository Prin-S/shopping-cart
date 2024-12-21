import { Link } from 'react-router';
import PropTypes from 'prop-types';

function NavButton({ link, text, cartCount }) {
  if (link == 'cart') {
    return (
      <Link to={'/' + link}>
        <button className="button">{text} <span>{cartCount}</span></button>
      </Link>
    );
  }
  
  return (
    <Link to={'/' + link}>
      <button className="button">{text}</button>
    </Link>
  );
}

NavButton.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  cartCount: PropTypes.number,
};

function Navbar({ cartCount }) {
  
  return (
    <div className="container-nav">
      <NavButton link="" text="Home" />
      <NavButton link="shop" text="Shop" />
      <NavButton link="cart" text="Cart" cartCount={cartCount} />
    </div>
  );
}

Navbar.propTypes = {
  cartCount: PropTypes.number,
};

export { Navbar };