import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

const AuthContext = createContext();
const auth = getAuth(app);
//google sign in
const googleProvider=new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    // const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  
   //signin or login  with password
const login=(email, password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
}

//log-out defining
 const logOut=()=>{
  return signOut(auth)
 }

  const authInfo = {
    user,
    loading,
    createUser,
    signInWithGoogle,
    login,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
