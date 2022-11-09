import './Product.scss';

const Product = ({ product }) => {
  const { name, description, image } = product;
  return (
    <div className='product'>
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Product;