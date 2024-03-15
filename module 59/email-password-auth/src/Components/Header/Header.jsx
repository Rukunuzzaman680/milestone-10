import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/react-bootstrap">ReactBootstrap</Link>
      <Link to="/bootstrap">Bootstrap</Link>
    </nav>
  );
};

export default Header;
