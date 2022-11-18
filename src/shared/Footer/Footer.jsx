import './Footer.scss';
import { Link } from 'react-router-dom';
import pay from '../../assets/common/pay.png';
import footer from '../../assets/common/footer-logo.jpg';

import { MdAttachEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaUserTie } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-main">
        <div className="logo-box">
          <Link to='/'>
          <img src={footer} alt="" />
          </Link>
          <div className="social">
            <a href='https://github.com/Hujaifa-Hossain' target='_blank' rel="noreferrer">
              <FaGithub />
            </a>
            <a href='https://linkedin.com/in/Hujaifa-Hossain' target='_blank' rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href='mailto:hujaifa.webdev@gmail.com'>
              <MdAttachEmail />
            </a>
            <a href='https://hujaifa-hossain-portfolio.netlify.app' target='_blank' rel="noreferrer">
              <FaUserTie />
            </a>
          </div>
        </div>

        <div className="footer-category">
          <h6>Categories</h6>
          <Link to='/products'>Men</Link>
          <Link to='/products'>women</Link>
          <Link to='/products'>Kids</Link>
        </div>

        <div className="pages">
          <h6>Pages</h6>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/cart'>Cart</Link>
        </div>

        <div className="quick">
          <h6>Quick links</h6>
          <Link to='/'>Checkout</Link>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </div>

        <div className="about">
          <h6>About Me</h6>
          <p>Hi, I'm Hujaifa Hossain. Always a junior web developer to learn more and more advance things in JavaScript & React JS.</p>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© ULTIMATE SHOPPING</p>
        <img src={pay} alt="" />
      </div>
    </footer>
  );
};

export default Footer;