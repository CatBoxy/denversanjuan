import { useState, useEffect, useContext, createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

initializeApp(firebaseConfig);

const auth = getAuth();

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isLoggedin, setIsLoggedin ] = useState();
  const [ error, setError ] = useState();

  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      user != null ? setIsLoggedin(true) : setIsLoggedin(false);
    })
  },[])

  const logIn = async (values, callback) => {
    const email = values.email;
    const password = values.password;
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      callback();
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      setError(true);
      setIsLoading(false);
    });
  };

  const logOut = async (values) => {
    signOut(auth)
      .then(() =>{
        setIsLoggedin(false);
        console.log('user logged out')
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

return (
    <AuthContext.Provider
      value = {{
        logIn,
        logOut,
        setError,
        error,
        isLoading,
        isLoggedin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthState = () => useContext(AuthContext);
