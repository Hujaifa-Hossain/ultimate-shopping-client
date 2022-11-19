import './Gift.scss';
import { slide as Menu } from 'react-burger-menu'
import ImageGallery from 'react-image-gallery';
import shoe1 from '../../assets/shoes/shoe1.jpg';
import shoe2 from '../../assets/shoes/shoe2.jpg';
import shoe3 from '../../assets/shoes/shoe3.jpg';

// const images = [
//   shoe1,
//   shoe2,
//   shoe3
// ]

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];


const Gift = () => {
  return (
    <div>
      <Menu >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a className="menu-item--small" href="">Settings</a>
      </Menu >
      <ImageGallery items={images} showFullscreenButton={false}/>
    </div>
  );
};

export default Gift;