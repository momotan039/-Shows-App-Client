import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'; // Import CSS file for styling

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    // Handle sign-up logic here, e.g. dispatching a Redux action
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      console.log('Sign up with email:', email, 'and password:', password);
    }
  };

  return (
    <div className="content">
      <h1 className="title">Sign Up</h1>
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
