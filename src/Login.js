import React from 'react'
import "./Login.css";
import Button from '@mui/material/Button';
import { auth,provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [{},dispatch]= useStateValue();

    const signIn=()=> {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            });
        })
        .catch((error) => alert(error.message));
    };
  return (
    <div className='login'>
        <div className='login__container'>
            <img src="https://www.xtremegym.co.uk/wp-content/uploads/2020/07/whatsapp-icon-logo-6E793ACECD-seeklogo.com_.png" alt="WhatsApp Logo" />

            <div className='login__text'>
                <h1>Sign in to WhatsApp</h1>
            </div>

            <Button onClick={signIn}>
                Sign In with Google
            </Button>
        </div>
    </div>
  )
}

export default Login;