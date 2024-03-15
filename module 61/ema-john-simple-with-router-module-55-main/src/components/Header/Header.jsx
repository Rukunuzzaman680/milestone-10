import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(result => {})
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/login">Login</Link>
        {user && (
          <span className="welcome">
            Welcome to<span className="email">{user.email}</span>
            <button className="logOut" onClick={handleLogOut}>
              Log Out
            </button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;