import React from 'react';
import LoginForm from '../components/LoginForm';

function Login() {

  return (
    <>
      <div className='logInContainer'>
        <div className='logInTitle'>
          <h2>Ingreso</h2>
        </div>
        <div className='logInBody'>
          <LoginForm/>
        </div>
      </div>
    </>
  );
}

export default Login;
