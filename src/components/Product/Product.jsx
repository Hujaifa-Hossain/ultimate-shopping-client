import { Link } from 'react-router-dom';
import './Product.scss';

const Product = ({ product }) => {
  const { _id, name, description, image } = product;
  return (
    <Link to={`/products/${_id}`} className='product'>
      <h4>{name}</h4>
      <p>{description}</p>
    </Link>
  );
};

export default Product;