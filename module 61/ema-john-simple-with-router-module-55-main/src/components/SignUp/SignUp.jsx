import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const SignUp = () => {
  const [error, setError] = useState('');

  const { createUser } = useContext(AuthContext);

  const handleSignUp = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    setError('');
    if (password !== confirm) {
      setError('Your password did not match');
      return;
    } else if (password.length < 6) {
      setError('password must be 6 character or longer');
    }

    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset('');
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>

        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" required />
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p>
        <small>
          New to Ema-john? <Link to="/login">Create New Account</Link>
        </small>
      </p>
      <p>
        <small className="error">{error}</small>
      </p>
    </div>
  );
};

export default SignUp;
