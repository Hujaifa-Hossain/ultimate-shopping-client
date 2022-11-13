import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-menu">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>Home</Link></li>
        </ul>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>Home</Link></li>
        </ul>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>Home</Link></li>
        </ul>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>Home</Link></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© Shopkeeper Limited 2022</p>
      </div>
    </footer>
  );
};

export default Footer;