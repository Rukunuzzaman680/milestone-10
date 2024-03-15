import { Button } from 'react-bootstrap';
import qzon1 from '../../../assets/qZone1.png';
import qzon2 from '../../../assets/qZone2.png';
import qzon3 from '../../../assets/qZone3.png';
import '../Qzone/Qzone.css';

const Qzon = () => {
  return (
    <div>
      <div className="bg-secondary text-center my-4 py-3">
        <h3>Qzone</h3>
        <div>
          <img src={qzon1} alt="" />
          <img src={qzon2} alt="" />
          <img src={qzon3} alt="" />
        </div>
      </div>
      <div className="lower-part text-center text-white">
        <div className="heading-text">
          <h2>Create an</h2>
          <h2>Amazing</h2>
          <h2>Newspaper</h2>
        </div>
        <p className="p">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <Button className="button mx-7" variant="danger">
          Danger
        </Button>
      </div>
    </div>
  );
};

export default Qzon;
