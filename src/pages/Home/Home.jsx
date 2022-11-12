import './Home.scss';
import Slider from "react-slick";
import Products from '../../components/Products/Products';
import Categories from '../../components/Categories/Categories';

import shoe4 from '../../assets/shoes/shoe4.jpg';
import shoe5 from '../../assets/shoes/shoe5.jpg';
import shoe8 from '../../assets/shoes/shoe8.jpg';
import shoe7 from '../../assets/shoes/shoe7.jpg';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className='home'>
      <Slider {...settings} className='home-banner'>
        <div>
          <img src="https://storage.sg.content-cdn.io/in-resources/25c7d1c6-73be-4ff9-b000-0bf110b5c461/Images/userimages/banners/oct2022/fashion_week_hm_d2210.jpg" alt="" />
        </div>
        <div>
          <img src="https://storage.sg.content-cdn.io/in-resources/25c7d1c6-73be-4ff9-b000-0bf110b5c461/Images/userimages/banners/sept2022/sustainable_shoes_hmbanr_d0809.jpg" alt="" />
        </div>
        <div>
          <img src="https://storage.sg.content-cdn.io/in-resources/25c7d1c6-73be-4ff9-b000-0bf110b5c461/Images/userimages/banners/oct2022/home_banr_03_d2010.jpg" alt="" />
        </div>
      </Slider>
      <Categories/>
      <Products />

      <section className='fashion-grid'>
        <div className='left'>
          <img src={shoe4} alt="" />
        </div>
        <div className='right'>
          <div><img src={shoe8} alt="" /></div>
          <div className='item'>
            <div><img src={shoe5} alt="" /></div>
            <div><img src={shoe7} alt="" /></div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;