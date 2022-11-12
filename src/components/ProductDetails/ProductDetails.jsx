import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import './ProductDetails.scss';

const ProductDetails = () => {
  const {productId} = useParams()
  console.log(productId)


  const { data: product, isLoading } = useQuery(['products'], () => fetch(`http://localhost:8080/api/product/${productId}`, {
    method: 'GET',
  }).then(res => res.json()));

  console.log(product);

  // const {name, description} = product

  return (
    <div className='ProductDetails'>
      <h1>{product?.name}</h1>
      <h4>{product?.description}</h4>
    </div>
  );
};

export default ProductDetails;