import './Product.scss';
import { Link } from 'react-router-dom';
import { BsPatchMinus, BsPatchPlus } from 'react-icons/bs';
import shoe1 from '../../assets/shoes/shoe6.jpg';
import { useState } from 'react';

const Product = ({ product }) => {
  const { _id, title, price, img, category, color } = product;

  let [cart, setCart] = useState(0);

  const increase = () => {
    setCart(cart + 1)
  }
  const decrease = () => {
    if (cart > 0) {
      setCart(cart - 1)
    } else {
      setCart(cart = 0)
    }
  }

  return (

    <div className='product'>
      <Link to={`/products/${_id}`}>
        <img src={shoe1} alt="" />
      </Link>

      <Link to={`/products/${_id}`} className='title'>{title}</Link>

      <div className='item'>
        <p>Category</p>
        <p>{category}</p>
      </div>

      <div className='item'>
        <p>Color</p>
        <span className='color' style={{ backgroundColor: `${color}` }}>&nbsp;</span>
      </div>

      <div className='item'>
        <p>$ {price}</p>
        <div className='value'>
          <BsPatchMinus onClick={decrease} className='arrow' />
          <span>{cart}</span>
          <BsPatchPlus onClick={increase} className='arrow' />
        </div>
      </div>

      <button>Add to cart</button>

    </div>
  );
};

export default Product;