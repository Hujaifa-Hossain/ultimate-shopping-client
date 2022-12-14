import { useGetProductsQuery } from '../../redux/apiSlice';
import Loading from '../../shared/Loading/Loading';
import Product from '../Product/Product';
import './ProductsList.scss';

const ProductsList = () => {
  
  const { data: products, isLoading } = useGetProductsQuery()

  if (isLoading) {
    <Loading />
  }

  return (
    <div className="products-list">
      <div className="features">
        <div className="filter">
          <h5>Filter</h5>
          <select name="" id="">
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <select name="" id="">
            <option value="orange">Orange</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
          </select>
        </div>
        <div className="sort">
          <h5>Sort</h5>
          <select name="" id="">
            <option value="orange">Low to high</option>
            <option value="blue">High to low</option>
          </select>
        </div>
      </div>
      <div className="products">
        { products && products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
    </div>
  );
};

export default ProductsList;