import React, { useState } from 'react';
import './LoginForm.css'
function LoginForm({ onSignUpClick }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateSignIn = () => {
    if (username === 'Ekip' && password === 'Ekip@123') {
      alert('Sign-in successful!');
      // Update state or perform other actions as needed
      // Instead of direct DOM manipulation, you can manage the state and perform actions accordingly
    } else if (username === '' || password === '') {
      alert('Please enter your credentials or click the Sign Up button.');
      // Update state or perform other actions as needed
    } else {
      alert('Please enter correct credentials.');
      // Update state or perform other actions as needed
    }
  };

  return (
    <div>
      {/* Render your SignIn form JSX here */}
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={validateSignIn}>Sign In</button>
      <button onClick={onSignUpClick}>Sign Up</button>
    </div>
  );
}

export default LoginForm;
