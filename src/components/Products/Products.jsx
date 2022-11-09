import { useRef } from 'react';
import Slider from "react-slick";
import './Products.scss'
import Product from '../Product/Product';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../shared/Loading/Loading';

const Products = () => {

  const { data: products, isLoading } = useQuery(['product'], () => fetch('http://localhost:8080/api/product', {
    method: 'GET',
  }).then(res => res.json()));


  const sliderRef = useRef(null);

  if (isLoading) {
    return <Loading />
  } else {
    console.log(products);
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 250,
    slidesToShow: 4,
    slidesToScroll: 4,
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
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  };

  // const products = [
  //   {
  //     name: 'appex',
  //     description: 'lorem ipsum dolar sit',
  //     image: ''
  //   },
  //   {
  //     name: 'appex',
  //     description: 'lorem ipsum dolar sit',
  //     image: ''
  //   },
  //   {
  //     name: 'appex',
  //     description: 'lorem ipsum dolar sit',
  //     image: ''
  //   },
  //   {
  //     name: 'appex',
  //     description: 'lorem ipsum dolar sit',
  //     image: ''
  //   },
  //   {
  //     name: 'appex',
  //     description: 'lorem ipsum dolar sit',
  //     image: ''
  //   },
  // ]
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexFlow: 'end',
          justifyContent: "end",
          padding: "20px",
          marginTop: '10px',
        }}
      >
        <div style={{ display: "flex" }}>
          <button
            style={{
              width: 35,
              height: 35,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              cursor: "pointer",
            }}
            className="buttons"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <BsArrowLeftCircleFill />
          </button>
          <button
            style={{
              width: 35,
              height: 35,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              cursor: "pointer",
            }}
            className="buttons"
            onClick={() => sliderRef.current.slickNext()}
          >
            <BsArrowRightCircleFill />
          </button>
        </div>
      </div>
      <div style={{ margin: 10 }}>
        <Slider {...settings}
          ref={sliderRef}
          arrows={false}
          customPaging={(i) => (
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "-10px",
                opacity: 0,
              }}
            >
              {i}
            </div>
          )}
        >
          {products?.map((product, _id) => <Product key={_id} product={product} />)}
        </Slider>
      </div>
    </div>



  );
};

export default Products;