import './Cart.scss';
import shoe2 from '../../assets/shoes/shoe2.jpg';
import empty from '../../assets/common/empty_cart.png';

import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsPatchMinus, BsPatchPlus } from 'react-icons/bs';

import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../../redux/cartSlice';
import { useState } from 'react';

const Cart = () => {
  const cart = useSelector(state => state.persistedReducer.cart);
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
      removeProduct()
    );
  };

  return (

    <div>
      {cart?.products?.length ? 
    <div className="cart">

      <div className="left">
        <h5>SHOPPING BAG</h5>

        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>&nbsp;</th>
            </tr>

            {cart?.products?.map((product, i) => <tr key={i}>

              <td className='image-box'>
                <img src={shoe2} alt="" />
                <div>
                  <h6>{product?.title}</h6>
                  <p>color: {product?.color}</p>
                  <p>Size: 40</p>
                </div>
              </td>
              <td><p>${product?.price}</p></td>
              <td className='quantity'>
                <div className='value'>
                  <BsPatchMinus onClick={() => handleQuantity("dec")} className='arrow' />
                  <span>{quantity}</span>
                  <BsPatchPlus onClick={() => handleQuantity("inc")} className='arrow' />
                </div>
              </td>
              <td><p>${product?.price * quantity}</p></td>
              <td><AiOutlineCloseCircle className='close' onClick={handleClick} /></td>
            </tr>)}

            {/* <tr>
            </tr> */}
          </tbody>
        </table>

      </div>


      <div className="right">
        <h5>ORDER SUMMARY</h5>
        <h6>Bill Details</h6>
        <div className="item">
          <p>Cart Sub Total:</p>
          <p>$ 200</p>
        </div>
        <div className="item">
          <p>Estimated Shipping Charge:</p>
          <p>$ 0.00</p>
        </div>
        <div className="item">
          <p>Total Amount:</p>
          <p>$ 200</p>
        </div>

        <p><span style={{ fontWeight: 'bold' }}>Note:</span> The shipping charges will be calculated in checkout based on shipping address</p>

        <button>
          <span>Continue</span>
          <span className='dot'>.</span>
          <span>$200</span>
        </button>
      </div>

    </div> : <img className='empty' src={empty} alt=''/>}
    </div>


  );
};

export default Cart;