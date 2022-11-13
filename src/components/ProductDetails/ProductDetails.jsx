import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import shoe1 from '../../assets/shoes/shoe1.jpg';
import Support from '../support/Support';
import './ProductDetails.scss';

const ProductDetails = () => {
  const { productId } = useParams()
  console.log(productId)


  const { data: product, isLoading } = useQuery(['products'], () => fetch(`http://localhost:8080/api/product/${productId}`, {
    method: 'GET',
  }).then(res => res.json()));

  console.log(product);

  const { _id, name, price, color, size, description, } = product

  return (
    <div className='ProductDetails'>
      <div className="details">
        <div className='left'>
          <img src={shoe1} alt="" />
        </div>
        <div className='right'>
          <h5 className='title'>{name}</h5>
          <p>SKU - {_id?.slice(0, 12)}</p>
          <h6>Price: ${price}
            <span className='off'> (10% OFF)</span>
          </h6>
          <p>Color</p>
          <hr style={{backgroundColor: `${color}`, height: '30px', width: '30px', cursor: 'pointer'}}></hr>
          <p>SELECt SIZE</p>
          <div className="size-box">
          {size&& size?.map((s, i) => <div className='size' key={i}>{s}</div>)}
          </div>
          <div className='buttons'>
            <button>Add to Bag</button>
            <button>Buy Now</button>
          </div>
          <h6 className="offer">
            Free Delivery for All Orders! <br />

            Enjoy 10% Nagad Cashback Offer, UP TO 200 Taka!
          </h6>
        </div>
      </div>

      <Support/>
    </div>
  );
};

export default ProductDetails;