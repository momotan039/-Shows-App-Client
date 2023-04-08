import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../redux/actions/authActions';
import { hideLoader, showLoader } from '../../redux/actions/loaderActions';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {user,error:authErorr}=useSelector(state=>state.auth)
  const dispatch=useDispatch()
  useEffect(()=>{
    setError(authErorr)
  },[authErorr])
  const handleSignIn = async () => {
    if (!email || !password) {
      setError('Please enter a valid email and password');
    } else {
      dispatch(showLoader())
      await signIn({email,password},dispatch)
      dispatch(hideLoader())
    }
  };

  return (
    <div className="content">
      <h1 className="title">Sign In</h1>
      <form className="form">
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" type="button" onClick={handleSignIn}>
          Sign In
        </button>
        {error && <div className="error">{error}</div>}
      </form>
      <div>
        <span className="linkText">Don't have an account? </span>
        <Link to="/sign-up" className="link">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
