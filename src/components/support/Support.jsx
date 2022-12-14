import './Support.scss';
import {FaShippingFast} from 'react-icons/fa';
import {MdChangeCircle, MdOutlineSupportAgent} from 'react-icons/md';

const Support = () => {
  return (
    <div className='support'>
      <div className="support-box">
        <FaShippingFast className='icon'/>
        <h5>FAST, FREE SHIPPING</h5>
        <p>FREE DELIVERY on All Orders.</p>
      </div>
      
      <div className="support-box">
        <MdOutlineSupportAgent className='icon'/>
        <h5>CUSTOMER CARE</h5>
        <p>Call: <a href="tel:+8801791158039">+8801791158039</a> <br/> 10:00 am - 7:00 pm (everyday)</p>
      </div>

      <div className="support-box">
        <MdChangeCircle className='icon'/>
        <h5>EXCHANGE FROM ANY STORE</h5>
        <p>You can exchange within 15 days from the date of purchase.</p>
      </div>
    </div>
  );
};

export default Support;