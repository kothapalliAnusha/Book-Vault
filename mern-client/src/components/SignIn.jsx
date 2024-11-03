import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const GoogleSignIn = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        console.log('Redirecting to Google Sign-In...');
      })
      .catch((error) => {
        console.error('Error during Google Sign-In:', error);
      });
  };

  return (
    <button onClick={handleGoogleSignIn} className="bg-blue-500 text-white rounded-md px-2 py-1">
      Sign In with Google
    </button>
  );
};

export default GoogleSignIn;
