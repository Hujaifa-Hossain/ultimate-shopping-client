import { Link } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
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
    <nav className='header'>
      {/* header top */}
      <Slider {...settings} className='header-top'>
        {offers.map(offer => <p>{offer}</p>)}
      </Slider>

      {/* real header  */}
      <div className="header-real">
        <div className="logo">
          Ultimate Shopping
        </div>
        <div className="search">
          <input type="text" />
          <BiSearchAlt />
        </div>
        <div className="icon-boxes">
          <div className="box">
            <img src="" alt="f" />
            <span>Ultimate Rewards</span>
          </div>
          <div className="box">
            <img src="" alt="f" />
            <span>Store Locations</span>
          </div>
          <div className="box">
            <img src="" alt="f" />
            <span>Login/Register</span>
          </div>
          <div className="box">
            <img src="" alt="f" />
            <span>Bag</span>
          </div>
        </div>
      </div>

      {/* mega menu  */}
      <ul className="mega-menu">
        <li className='nav-link'><Link to='/'>Sale</Link></li>
        <li className='nav-link mega-link'><Link to='/men'>Men</Link></li>
        <li className='nav-link mega-link'><Link to='/women'>Women</Link></li>
        <li className='nav-link mega-link'><Link to='/kids'>Kids</Link></li>
        <li className='nav-link'><Link to='/gift'>Gift Voucher</Link></li>
        <li className='nav-link'><Link to='/exclusive'>Online Exclusive</Link></li>
      </ul>

    </nav>
  );
};

export default Header;