import './Product.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPatchMinus, BsPatchPlus } from 'react-icons/bs';
import shoe1 from '../../assets/shoes/shoe6.jpg';

import { addProduct } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

const Product = ({ product }) => {
  const { _id, title, price, img, category, color } = product;

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else if(quantity <= 2) {
      setQuantity(quantity +1)
    } 
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product })
    );
  };

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
          <BsPatchMinus  onClick={() => handleQuantity("dec")} className='arrow' />
          <span>{quantity}</span>
          <BsPatchPlus onClick={() => handleQuantity("inc")} className='arrow' />
        </div>
      </div>

      <button onClick={handleClick}>Add to cart</button>

    </div>
  );
};

export default Product;