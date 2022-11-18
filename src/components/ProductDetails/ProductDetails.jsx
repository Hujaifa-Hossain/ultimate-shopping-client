import './ProductDetails.scss';
import Support from '../support/Support';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import shoe1 from '../../assets/shoes/shoe1.jpg';
import shoe2 from '../../assets/shoes/shoe2.jpg';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Rating from 'react-rating';

const ProductDetails = () => {
  const { productId } = useParams();

  const { data: products, isLoading } = useQuery(['products'], () => fetch(`http://localhost:8080/api/products/find/${productId}`, {
    method: 'GET',
  }).then(res => res.json()));

  const { _id, title, price, color, size, category } = products;

  return (
    <div className='product-details'>
      <div className="details">
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


          {/* <h6 className='title'>{title}</h6>
          <p>SKU - {_id?.slice(0, 7)}</p>
          <h6>Local product, <span>International commitment</span></h6>
          <h6>Price: ${price}
            <span className='off'> (10% OFF)</span>
          </h6>
          <p>Color</p>
          <hr style={{ backgroundColor: `${color}`, height: '30px', width: '30px', cursor: 'pointer' }}></hr>
          <p>SELECt SIZE</p>
          <div className="size-box">
            {size && size?.map((s, i) => <div className='size' key={i}>{s}</div>)}
          </div>
          <div className='buttons'>
            <button>Add to Bag</button>
            <button>Buy Now</button>
          </div>
          <h6 className="offer">
            Free Delivery for All Orders! <br />

            Enjoy 10% Nagad Cashback Offer, UP TO 200 Taka!
          </h6> */}
        </div>
      </div>

      <Support />
    </div>
  );
};

export default ProductDetails;