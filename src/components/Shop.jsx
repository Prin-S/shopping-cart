import { useState } from 'react';
import { Navbar } from './Navbar.jsx';

function Product() {

  return (
    <div className="box">
      <h2>Product name</h2>
      <div><img className="img" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" /></div>
      <div><label htmlFor="amount">Amount: <input id="amount" className="amount" type="number" name="amount" size="3" /></label></div>
      <button className="button">Add to Cart</button>
    </div>
  );
}

function ProductBox() {
  
  return (
    <div className="container">
      <Product />
      <Product />
      <Product />
    </div>
  );
}

function Shop() {

  return (
    <>
      <Navbar />
      <h1>Shop</h1>
      <ProductBox />
    </>
  );
}

export { Shop };