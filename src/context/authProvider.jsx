import { useState, useEffect, useContext, createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDBMrOBeBpYqgM4SOTIY3RUiCOi7Q1ONL0",
  authDomain: "denver-sanjuan.firebaseapp.com",
  projectId: "denver-sanjuan",
  storageBucket: "denver-sanjuan.appspot.com",
  messagingSenderId: "336235159528",
  appId: "1:336235159528:web:b6d4403a44fe37ce5cce5d"
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
