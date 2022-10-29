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
        <div>
          <img src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=300,height=300,quality=75,format=auto,fit=cover,g=top/in-resources/25c7d1c6-73be-4ff9-b000-0bf110b5c461/Images/ProductImages/Source/92233A20_1_2_nw.jpeg" alt="" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Shopkeeper Limited 2022</p>
      </div>
    </footer>
  );
};

export default Footer;