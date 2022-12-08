import './Gift.scss'

const Gift = () => {
  return (
    <div className='gift'>
      <ul>
        <li className='drop'>menu1
          <ul>
            <li>sub1</li>
            <li>sub2</li>
          </ul>
        </li>
        <li>menu2</li>
      </ul>
    </div>
  );
};

export default Gift;