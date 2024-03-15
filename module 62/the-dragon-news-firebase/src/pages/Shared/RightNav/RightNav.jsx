import { Button, ListGroup } from 'react-bootstrap';
import {
  FaGoogle,
  FaGithub,
  FaInstagramSquare,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa';
import Qzon from '../Qzone/Qzone';

const RightNav = () => {
  return (
    <div>
      <div className="mb-6">
        <h3>Log with</h3>
        <Button className="mb-3" variant="outline-primary">
          <FaGoogle /> <span className="ml-2">Login with Google</span>
        </Button>
        <Button variant="outline-secondary">
          <FaGithub /> <span className="ml-2">Login with Github</span>
        </Button>
      </div>
      <div>
        <h3>Fine on Us</h3>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagramSquare />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter />
            Instragam
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Qzon></Qzon>
      </div>
    </div>
  );
};

export default RightNav;
