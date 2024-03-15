import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import app from '../../Firebass/firebase.init';
import { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState([null]);
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loginUser = result.user;
        console.log(loginUser);
        setUser(loginUser);
      })
      .catch(error => {
        console.log('error', error.message);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .then(error => {
        console.log('error', error.message);
      });
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(result => {
        console.log(result);
        setUser(null);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      {/* user ? login: logout */}

      {user ? (
        <button onClick={handleGoogleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Google Login</button>
          <button onClick={handleGithubSignIn}>Github Login</button>
        </>
      )}
      {user && (
        <div>
          <h2>Name: {user.displayName}</h2>
          <h3>E-mail: {user.email}</h3>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
