import './Home.scss';
import Slider from "react-slick";
import Products from '../../components/Products/Products';

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
    <div>
      <Slider {...settings} className='home'>
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
      <Products/>
    </div>
  );
};

export default Home;