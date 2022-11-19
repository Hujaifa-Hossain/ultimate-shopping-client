import { useRef } from 'react';
import Slider from "react-slick";
import './Products.scss'
import Product from '../Product/Product';
import { IoArrowUndoOutline, IoArrowRedoOutline } from 'react-icons/io5';
import Loading from '../../shared/Loading/Loading';
import { useGetProductsQuery } from '../../redux/apiSlice';

const Products = () => {

  const { data: products, error, isLoading } = useGetProductsQuery()


  const sliderRef = useRef(null);

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
          slidesToScroll: 2
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

  return (
    <div className='products'>
      <div
        style={{
          display: "flex",
          flexFlow: 'end',
          justifyContent: "space-between",
          padding: "10px",
          marginTop: '10px',
        }}
      >
        <h4>What's New</h4>
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
            <IoArrowUndoOutline />
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
            <IoArrowRedoOutline />
          </button>
        </div>
      </div>
      <div>
        <Slider {...settings}
          ref={sliderRef}
          arrows={false}
          customPaging={(i) => (
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "-10px",
                // opacity: 0,
              }}
            >
              {i}
            </div>
          )}
        >
          {products && products?.slice(0, 7).map((product, _id) => <Product key={_id} product={product} />)}
        </Slider>
      </div>
    </div>


  );
};

export default Products;