import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => console.error(error));
  };

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <button className="btn btn-ghost normal-case text-xl">daisyUI</button>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">
          Orders
        </Link>
        {user && (
          <Link className="btn btn-ghost normal-case text-xl" to="/profile">
            Profile
          </Link>
        )}
        <Link className="btn btn-ghost normal-case text-xl" to="./login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="./register">
          Register
        </Link>
        {user ? (
          <>
            <span className="ml-8">{user.email}</span>
            <button
              onClick={handleLogOut}
              className="btn ml-3 btn-sm btn-accent btn-active"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link className="btn ml-3 btn-sm btn-accent btn-active" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
<button className="btn btn-active btn-accent">Accent</button>;
