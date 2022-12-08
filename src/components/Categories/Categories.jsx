import './Categories.scss';
import Category from '../Category/Category';

import category1 from '../../assets/categories/category1.webp';
import category2 from '../../assets/categories/category2.webp';
import category3 from '../../assets/categories/category3.webp';
import category4 from '../../assets/categories/category4.webp';
import category5 from '../../assets/categories/category5.webp';
import category6 from '../../assets/categories/category6.webp';
import category7 from '../../assets/categories/category7.webp';
import category8 from '../../assets/categories/category8.webp';

const Categories = () => {

  const categories = [
    { id: 1, link: 'products', label: 'casual', img: category1 },
    { id: 2, link: 'products', label: 'slider', img: category2 },
    { id: 3, link: 'products', label: 'pumped', img: category3 },
    { id: 5, link: 'products', label: 'shoe', img: category4 },
    { id: 4, link: 'products', label: 'soft', img: category5 },
    { id: 6, link: 'products', label: 'sandals', img: category6 },
    { id: 7, link: 'products', label: 'on go', img: category7 },
    { id: 8, link: 'products', label: 'heels', img: category8 },
  ]

  return (
    <div className='categories'>
      {categories.map(category => <Category key={category.id} category={category} />)}
    </div>
  );
};

export default Categories;