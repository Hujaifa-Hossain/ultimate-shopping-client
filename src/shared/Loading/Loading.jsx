import ReactLoading from 'react-loading';
import './Loading.scss';

const Loading = () => {
  return (
    <div className='loading'>
      <ReactLoading type='bars' color="#000" delay={5} />
    </div>
  );
};

export default Loading;