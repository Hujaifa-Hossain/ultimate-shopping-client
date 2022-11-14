import Slider from "react-slick";
import './Header.scss';
import { Link } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineGift } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';
import { HiOutlineUser } from 'react-icons/hi';
import { BsHandbag } from 'react-icons/bs';

const Header = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  const offers = ['SALE: UP TO 50% OFF ON SELECTED STYLES', 'ENJOY FREE DELIVERY ON ALL ORDERS', 'GET APEX GIFT VOUCHER AT FLAT 25% OFF']

  return (
    <nav className='header'>
      {/* header top */}
      <Slider {...settings} className='header-top'>
        {offers.map((offer, i) => <p key={i}>{offer}</p>)}
      </Slider>

      {/* real header  */}
      <div className="header-real">
        <Link to='/' className="logo">
          ShopKeeper
        </Link>
        <div className="search">
          <input type="text" />
          <BiSearchAlt className="icon" />
        </div>
        <div className="icon-boxes">
          <Link to='/' className="box">
            <AiOutlineGift className='icon' />
            <span>Ultimate Rewards</span>
          </Link>
          <Link to='/' className="box">
            <FiMapPin className='icon' />
            <span>Store Locations</span>
          </Link>
          <Link to='/login' className="box">
            <HiOutlineUser className='icon' />
            <span>Login/Register</span>
          </Link>
          <Link to='/cart' className="box">
            <BsHandbag className='icon' />
            <p className="label">0</p>
            <span>Bag</span>
          </Link>
        </div>
      </div>

      {/* mega menu  */}
      <ul className="mega-menu">
        <li className='nav-link'><Link to='/'>Sale</Link></li>
        <li className='nav-link mega-link'><Link to='/men'>Men</Link></li>
        <li className='nav-link mega-link'><Link to='/women'>Women</Link></li>


        <li className='nav-link mega-link'><Link to='/kids'>Kids</Link></li>
        <li className='nav-link'><Link to='/gift'>Gift Voucher</Link></li>
        {/* <li className='nav-link'><Link to='/exclusive'>Online Exclusive</Link></li> */}
      </ul>

    </nav>
  );
};

export default Header;