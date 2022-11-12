import './Product.scss';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import shoe1 from '../../assets/shoes/shoe4.jpg';

// style={{backgroundImage: `url(${shoe1})`}}

const Product = ({ product }) => {
  const { _id, name, description, image } = product;
  return (
    <Link to={`/products/${_id}`} className='product' >

      <img src={shoe1} alt="" />

      {/* <p>{description}</p> */}
      <div className='info'>
        <h4>{name}</h4>
        <div className="icons">
          <AiOutlineHeart />
          <AiOutlineShoppingCart />
        </div>
      </div>
    </Link>
  );
};

export default Product;