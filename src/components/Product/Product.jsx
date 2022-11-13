import './Product.scss';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import {RiShoppingCartLine } from 'react-icons/ri';
import shoe1 from '../../assets/shoes/shoe4.jpg';

const Product = ({ product }) => {
  const { _id, name, price, image } = product;
  return (
    <div className='product'>

      <Link to={`/products/${_id}`}>
        <img src={shoe1} alt="" />
      </Link>

      <div className='info'>
        <h5>{name}</h5>
        <div className="icons">
          <RiShoppingCartLine/>
        <h5>${price}</h5>
          {/* <AiOutlineHeart /> */}
          {/* <AiOutlineShoppingCart /> */}
        </div>
      </div>
    </div>
  );
};

export default Product;