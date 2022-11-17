import './Home.scss';
import Slider from "react-slick";
import Products from '../../components/Products/Products';
import Categories from '../../components/Categories/Categories';
import Support from '../../components/support/Support';

import banner1 from '../../assets/common/banner1.jpg';
import banner2 from '../../assets/common/banner2.jpg';

import shoe4 from '../../assets/shoes/shoe4.jpg';
import shoe5 from '../../assets/shoes/shoe5.jpg';
import shoe8 from '../../assets/shoes/shoe8.jpg';
import shoe7 from '../../assets/shoes/shoe7.jpg';

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className='home'>

      {/* HOME BANNER  */}

      <Slider {...settings} className='home-banner'>
        <img src={banner1} alt="Banner one" />
        <img src={banner2} alt="Banner two" />
      </Slider>

      {/* CATEGORIES  */}
      <Categories />

      {/* PRODUCTS  */}
      <Products />

      {/* FASHION GALLERY  */}
      <section className='fashion-grid'>
        <div className='left'>
          <img src={shoe4} alt="" />
        </div>
        <div className='right'>
          <div>
            <img src={shoe8} alt="" />
          </div>
          <div className='item'>
            <div>
              <img src={shoe5} alt="" />
            </div>
            <div>
              <img src={shoe7} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT CALL TO ACTION */}
      <Support />

    </div>
  );
};

export default Home;