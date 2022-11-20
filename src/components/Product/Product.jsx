import './Product.scss';
import { Link } from 'react-router-dom';
import { BsPatchMinus, BsPatchPlus } from 'react-icons/bs';
import shoe1 from '../../assets/shoes/shoe6.jpg';

const Product = ({ product }) => {
  const { _id, title, price, img, category, color } = product;

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
          <BsPatchMinus className='arrow' />
          <span>1</span>
          <BsPatchPlus className='arrow' />
        </div>
      </div>

      <button>Add to cart</button>

    </div>
    // <div className='product'>

    //   <Link to={`/products/${_id}`}>
    //     <img src={shoe1} alt="" />
    //   </Link>

    //   <div className='info'>
    //   <Link to={`/products/${_id}`}>
    //     {title}
    //   </Link>

    //     <div className="icons">
    //       <RiShoppingCartLine />
    //       <h5>${price}</h5>
    //       <AiOutlineHeart />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Product;