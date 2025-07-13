import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { ProductBox } from "./Shop.jsx";
import { Error } from './Error.jsx';

function Category({ items, onAddToCart }) {
  const { category } = useParams();

  if(!items.find(item => item.categoryLink == category)) { // If the category does not exist,
    return (
        <Error />
    );
  }
  
  const catName = items.find(item => item.categoryLink == category).category; // Get item.category (rather than item.categoryLink) to beautify and display as the heading.
  const catNameBeautified = catName.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '); // Split each word, capitalize the first letter, and join the words together.
  const selected = [];

  items.map(item => {
    if(item.categoryLink == category) {
      selected.push(item);
    }
  });

  return (
    <>
      <h1>{catNameBeautified}</h1>
      <ProductBox items={selected} onAddToCart={onAddToCart} />
    </>
  );
}

Category.propTypes = {
  items: PropTypes.array,
  onAddToCart: PropTypes.func,
};

export { Category };