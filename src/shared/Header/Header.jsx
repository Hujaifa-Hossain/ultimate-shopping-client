import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className="logo">
        <Link to='/'>LOGO</Link>
      </div>
      <ul className="menu">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </header>
  );
};

export default Header;