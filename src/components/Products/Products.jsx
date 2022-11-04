import './Products.scss'
import Slider from "react-slick";
import Product from '../Product/Product';

const Products = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const products = [
    {
      name: 'appex',
      description: 'lorem ipsum dolar sit',
      image: ''
    },
    {
      name: 'appex',
      description: 'lorem ipsum dolar sit',
      image: ''
    },
    {
      name: 'appex',
      description: 'lorem ipsum dolar sit',
      image: ''
    },
    {
      name: 'appex',
      description: 'lorem ipsum dolar sit',
      image: ''
    },
    {
      name: 'appex',
      description: 'lorem ipsum dolar sit',
      image: ''
    },
  ]
  return (

    <Slider {...settings} className='products'>
      {products.map((product, i) => <Product key={i} product={product} />)}
    </Slider>
  );
};

export default Products;