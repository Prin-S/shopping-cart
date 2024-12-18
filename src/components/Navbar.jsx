import { Link } from 'react-router';
import PropTypes from 'prop-types';

function NavButton({ link, text }) {
  return (
    <div>
      <Link to={"/" + link}>
        <button className="button">{text}</button>
      </Link>
    </div>
  );
}

NavButton.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
};

function Navbar() {

    return (
      <>
        <div className="container">
          <NavButton link="" text="Home" />
          <NavButton link="shop" text="Shop" />
        </div>
      </>
    )
  }

export { Navbar };