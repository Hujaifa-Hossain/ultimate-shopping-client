import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './Header.scss';

const Header = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  const offers = ['SALE: UP TO 50% OFF ON SELECTED STYLES', 'ENJOY FREE DELIVERY ON ALL ORDERS', 'GET APEX GIFT VOUCHER AT FLAT 25% OFF']

  return (
    <div>


      <Slider {...settings} className='header-top'>
        {offers.map(offer => <p>{offer}</p>)}
      </Slider>



      {/* <div className="logo">
        <Link to='/'>LOGO</Link>
      </div>
      <ul className="menu">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul> */}
    </div>
  );
};

export default Header;