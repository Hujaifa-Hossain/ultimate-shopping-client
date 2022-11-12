import { Link } from 'react-router-dom';
import './Category.scss';

const Category = ({ category }) => {
  const { link, img } = category;
  return (
    <Link to={link} className='category'
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', }}>

      <button>shop now</button>
    </Link>
  );
};

export default Category;