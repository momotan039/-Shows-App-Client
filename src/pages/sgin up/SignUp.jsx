import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../../redux/actions/authActions';
import { hideLoader, showLoader } from '../../redux/actions/loaderActions';
import './SignUp.css'; 

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const {success}=useSelector(state=>state.account)
  const {error:authErorr}=useSelector(state=>state.app)
  const dispatch=useDispatch()
  const navigator=useNavigate()
  const handleSignUp = async () => {
    dispatch(hideError())
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      console.log('Sign up with name:', name, 'email:', email, 'and password:', password);
      dispatch(showLoader())
      await signUp({name,email,password},dispatch)
      dispatch(hideLoader())
    }
  };

useEffect(()=>{
  setError(authErorr)
},[authErorr])

useEffect(()=>{
  if(success)
{
  alert(success)
  navigator('/')
}
},[success])

  return (
    <div className="content">
      <h1 className="title">Sign Up</h1>
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          className="input"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="button" type="button" onClick={handleSignUp}>
          Sign Up
        </button>
        {error && <div className="error">{error}</div>}
      </form>
      <div>
        <span className="linkText">Already have an account? </span>
        <Link to="/" className="link">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
