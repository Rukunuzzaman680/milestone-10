import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useRef, useState } from 'react';
import app from '../../Firebase/firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const emailRef = useRef();

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setError('');
    setSuccess('');

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Please enter two Uppercase');
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError('Please add special character');
      return;
    } else if (password.length < 6) {
      setError('Enter at least six character');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess('User login successful.');
        setError('');
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert('Please provide your email address to reset passord');
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Please check your email');
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <br />
      <br />
      <h2>Please Login Form</h2>
      <br />
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            ref={emailRef}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <div className="input-group">
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              id="exampleInputPassword1"
              required
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <br />
      <p>
        <small>
          New to this website ? Please <Link to="/register">Register</Link>
        </small>
      </p>
      <p>
        <small>
          Forget password ? Please
          <button onClick={handleResetPassword} className="btn btn-link">
            Reset Password
          </button>
        </small>
      </p>
      <p className="text-danger">{error}</p>
      <p className="text-primary">{success}</p>
    </div>
  );
};

export default Login;
