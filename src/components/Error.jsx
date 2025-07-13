import { Link } from 'react-router';

function Error() {
  return (
    <>
      <h1>404 Not Found</h1>
      <div className="container">
        <p>This page does not exist!</p>
        <Link to="/shop">Go back to Shop</Link>
      </div>
    </>
  );
}

export { Error };