import { Link } from 'react-router-dom';
import './Category.scss';

const Category = ({ category }) => {
  const { link, img } = category;
  return (
    <Link to={link} className='category'>
      <div>
        <img src={img} alt="" />
        <button>shop now</button>
      </div>
    </Link>
  );
};

export default Category;