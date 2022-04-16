import React from 'react';
import { signInWithGoogle } from '../firebase/config';
import logo from '../components/images/logo.png'

const Login = () => {
   return (
      <div className="login">
         <img src={logo} alt="logo" loading='lazy' /> <br />
         <button className='loginBtn' onClick={signInWithGoogle}>Sign in with google</button>
      </div>
   );
};


export default Login;