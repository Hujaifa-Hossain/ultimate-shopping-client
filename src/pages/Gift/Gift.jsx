import './Gift.scss';
import { Zoom } from 'react-slideshow-image';

const Gift = () => {

  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  const indicators = 1
  return (
    <div className="gift">
      <Zoom indicators={indicators} >

        {images?.map(img => <div>
          <div style={{ 'backgroundImage': `url(${img})`, height: '500px', backgroundRepeat: 'no-repeat'}}>
            <span>Slide 1</span>
          </div>
        </div>)}
      </Zoom>
    </div>
  );
};

export default Gift;