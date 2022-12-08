import './ProductDetails.scss';
import Support from '../support/Support';
import { useParams } from 'react-router-dom';
import shoe2 from '../../assets/shoes/shoe6.jpg';
import Rating from 'react-rating';
import { BsPatchMinus, BsPatchPlus } from 'react-icons/bs';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useGetProductQuery } from '../../redux/apiSlice';
import Loading from '../../shared/Loading/Loading';

const ProductDetails = () => {
  const { productId } = useParams();

  const { data: product, isLoading } = useGetProductQuery(`${productId}`)

  if (isLoading) {
    return <Loading />
  }


  const { _id, title, price, color, size, category, description } = product;

  return (
    <div className='product-details'>
      <div className="details">
        <div className='left'>
          <img src={shoe2} alt="" />
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
                emptySymbol={<AiOutlineStar />}
                fullSymbol={<AiFillStar />}
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
                <BsPatchMinus className='arrow' />
                <span>1</span>
                <BsPatchPlus className='arrow' />
              </div>
            </div>

            <button>Add to cart</button>

          </div>
            <div className='item'>
              <p>Description</p>
              <p>{description}</p>
            </div>

        </div>
      </div>

      <Support />
    </div>
  );
};

export default ProductDetails;