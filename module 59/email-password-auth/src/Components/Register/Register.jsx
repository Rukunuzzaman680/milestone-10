import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = event => {
    // 1. prevent page refresh
    event.preventDefault();
    setSuccess('');
    setError('');

    // 2. collect from data
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    // validate
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Please enter at least 2 Uppercase');
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError('please add at least 2 numbers');
      return;
    } else if (password.length < 6) {
      setError('At least enter 6 numbers');
      return;
    }

    // create user in fb
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const loginUser = result.user;
        console.log(loginUser);
        setError('');
        event.target.reset();
        setSuccess('Use has created successfully');
        sendVerificationEmail(result.user);
      })
      .catch(error => {
        console.error(error.message);
        setError(error.message);
      });
  };

  const sendVerificationEmail = user => {
    sendEmailVerification(user).then(result => {
      console.log(result);
      alert('please verify your email address');
    });
  };

  const handleEmailChange = event => {
    console.log(event.target.value);
    // setEmail(event.target.value);
  };

  const handlePasswordBlur = event => {
    console.log(event.target.value);
  };

  return (
    <div className="w-100 max-auto">
      <h3>Please Register</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="w-50 mb-2 ps-2 rounded bg-white border-primary text-black"
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="email"
          placeholder="Please email"
          required
        />
        <br />
        <input
          className="w-50 mb-2 ps-2 rounded bg-white border-primary text-black"
          onBlur={handlePasswordBlur}
          type="password"
          name="password"
          id="password"
          placeholder="password"
          required
        />
        <br />
        <input
          className="btn btn-primary w-auto text-start"
          type="submit"
          value="Register"
        />
      </form>
      <p>
        <small>
          Already have an account ? Please <Link to="/login">Login</Link>
        </small>
      </p>
      <p className="text-danger">{error}</p>
      <p className="text-primary">{success}</p>
    </div>
  );
};

export default Register;
