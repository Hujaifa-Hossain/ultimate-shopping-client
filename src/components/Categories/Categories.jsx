import './Categories.scss';
import Category from '../Category/Category';

import shoe1 from '../../assets/shoes/shoe1.jpg';
import shoe2 from '../../assets/shoes/shoe2.jpg';
import shoe3 from '../../assets/shoes/shoe3.jpg';
import shoe4 from '../../assets/shoes/shoe4.jpg';
import shoe5 from '../../assets/shoes/shoe5.jpg';
import shoe6 from '../../assets/shoes/shoe6.jpg';
import shoe7 from '../../assets/shoes/shoe7.jpg';
import shoe8 from '../../assets/shoes/shoe8.jpg';

const Categories = () => {

  const categories = [
    { id: 1, link: '', img: shoe1 },
    { id: 2, link: '', img: shoe2 },
    { id: 3, link: '', img: shoe3 },
    { id: 4, link: '', img: shoe4 },
    { id: 5, link: '', img: shoe5 },
    { id: 6, link: '', img: shoe6 },
    { id: 7, link: '', img: shoe7 },
    { id: 8, link: '', img: shoe8 },
  ]

  return (
    <div className='categories'>
      {categories.map(category => <Category key={category.id} category={category} />)}
    </div>
  );
};

export default Categories;