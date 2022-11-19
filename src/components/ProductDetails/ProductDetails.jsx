import './ProductDetails.scss';
import Support from '../support/Support';
import { useParams } from 'react-router-dom';
import shoe1 from '../../assets/shoes/shoe1.jpg';
import shoe2 from '../../assets/shoes/shoe2.jpg';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Rating from 'react-rating';

const ProductDetails = () => {
  const { productId } = useParams();
  

  // const { _id, title, price, color, size, category } = products;

  return (
    <div className='product-details'>
      {/* <div className="details">
        <div className='left'>

        </div>
        <div className='right'>


          <div className="details-box">
            <p className="title">
              {title}
            </p>
            <span className='sku'>SKU - {_id?.slice(0, 7)}</span>


            <div className='item'>
              <p>Rating</p>
              <Rating
                initialRating={3}
                emptySymbol={<AiOutlineStar/>}
                fullSymbol={<AiFillStar/>}
                readonly
              />
            </div>

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
                <CiCircleMinus className='arrow' />
                <span>1</span>
                <CiCirclePlus className='arrow' />
              </div>
            </div>

            <button>Add to cart</button>
          </div>

        </div>
      </div> */}

      <Support />
    </div>
  );
};

export default ProductDetails;