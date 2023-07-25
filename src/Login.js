import React, { useState } from 'react';

const Login = ({ show, handleClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here with 'username' and 'password' state values
    // For example, you can call an API to authenticate the user
    console.log('Perform login with username:', username, 'and password:', password);
    // After successful login, you can close the login modal
    handleClose();
  };

  return (
    <div className={`login-modal ${show ? 'show' : 'hide'}`}>
      <div className="login-content">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Login;
