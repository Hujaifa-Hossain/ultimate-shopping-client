import './Cart.scss';
import shoe2 from '../../assets/shoes/shoe2.jpg';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Cart = () => {
  return (
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

            <tr>
              <td className='image-box'>
                <img src={shoe2} alt="" />
                <div>
                  <h6>Shoe</h6>
                  <p>color: Grey</p>
                  <p>Size: 40</p>
                </div>
              </td>
              <td><p>$200</p></td>
              <td className='quantity'>
                <button className='add'>-</button>
                <button className='value'>1</button>
                <button className='remove'>+</button>
              </td>
              <td><p>$220</p></td>
              <td><AiOutlineCloseCircle /></td>
            </tr>
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

        <p><span style={{fontWeight: 'bold'}}>Note:</span> The shipping charges will be calculated in checkout based on shipping address</p>

        <button>
          <span>Continue</span>
          <span className='dot'>.</span>
          <span>$200</span>
          </button>
      </div>

    </div>
  );
};

export default Cart;