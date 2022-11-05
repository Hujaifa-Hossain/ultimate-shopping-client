import './Product.scss';

const Product = ({ product }) => {
  const { title, description, image } = product;
  return (
    <div className='product'>
      Product
    </div>
  );
};

export default Product;