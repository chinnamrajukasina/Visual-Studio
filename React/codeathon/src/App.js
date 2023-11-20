// App.js
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

function App() {
  const [isSignIn, setIsSignIn] = useState(true);

  const onSignUpClick = () => {
    setIsSignIn(false);
  };

  const onSignInClick = () => {
    setIsSignIn(true);
  };

  return (
    <div>
      {isSignIn ? (
        <LoginForm onSignUpClick={onSignUpClick} />
      ) : (
        <SignUpForm onSignInClick={onSignInClick} />
      )}
    </div>
  );
}

export default App;
