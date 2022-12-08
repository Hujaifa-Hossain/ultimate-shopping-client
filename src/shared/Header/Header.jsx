import './Header.scss';
import logo from '../../assets/common/logo.jpg';
import Slider from "react-slick";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineGift } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';
import { HiOutlineUser } from 'react-icons/hi';
import { BsHandbag } from 'react-icons/bs';
import { IoMenu } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'
import { useGetUserQuery } from "../../redux/apiSlice";
import { useSelector } from 'react-redux';

const Header = () => {

  const quantity = useSelector(state => state.persistedReducer.cart.quantity);

  // const current = useSelector(state => console.log(state.ultimate))

  const [open, setOpen] = useState(true);

  const { data: user, isLoading } = useGetUserQuery('637e7025229ffe6ac939aa5c');

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

  const offers = ['SALE: UP TO 50% OFF ON SELECTED STYLES', 'ENJOY FREE DELIVERY ON ALL ORDERS', 'GET ULTIMATE GIFT VOUCHER AT FLAT 25% OFF']

  const links = [
    {
      name: "Men",
      submenu: true,
      sublinks: [
        {
          Head: "Topwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "Bottomwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "innerwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },

        {
          Head: "sleepwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "footwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
      ],
    },
    {
      name: "Women",
      submenu: true,
      sublinks: [
        {
          Head: "Topwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "Bottomwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "innerwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },

        {
          Head: "sleepwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "footwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
      ],
    },
    {
      name: "Kid's",
      submenu: true,
      sublinks: [
        {
          Head: "Top wear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "Bottom wear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "inner wear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },

        {
          Head: "sleep wear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "footwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
      ],
    },
  ];

  return (
    <nav className='header'>
      {/* header top */}
      <Slider {...settings} className='header-top'>
        {offers.map((offer, i) => <p key={i}>{offer}</p>)}
      </Slider>

      {/* real header  */}
      <div className="header-real">
        <div className="logo">
          <div className='mobile-icon' onClick={() => setOpen(!open)}>
            {open ? <IoMenu /> : <IoMdClose />}
          </div>
          <Link to='/'>
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="search">
          <input type="text" />
          <BiSearchAlt className="icon" />
        </div>

        <div className="icon-boxes">
          <Link to='gift' className="box">
            <AiOutlineGift className='icon' />
            <span>Ultimate Rewards</span>
          </Link>

          <Link to='locations' className="box">
            <FiMapPin className='icon' />
            <span>Store Locations</span>
          </Link>

          <Link to='login' className="box">
            <HiOutlineUser className='icon' />
            <span>{user ? 'Hi, ' + user.firstName : 'Login/Register'}</span>
          </Link>

          <Link to='cart' className="box">
            <BsHandbag className='icon' />
            <p className="label">{quantity}</p>
            <span>Bag</span>
          </Link>
        </div>
      </div>

      {/* mega menu  */}
      <ul className="mega-box">
        <li className='nav-link'><Link to='/'>Sale</Link></li>







        {/* <li className='nav-link mega-link'>
          <Link to='/products'>
            Men
            <div className='mega-menu'>
              g
            </div>
          </Link></li> */}
        <li className='nav-link mega-link'><Link to='/products'>Women</Link></li>
        <li className='nav-link mega-link'><Link to='/products'>Kids</Link></li>







        <li className='nav-link'><Link to='/gift'>Gifts</Link></li>
      </ul>

    </nav>
  );
};

export default Header;