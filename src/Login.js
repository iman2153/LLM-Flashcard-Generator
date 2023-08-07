import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from './login.module.css';
import GoogleButton from 'react-google-button'

const Login = ({ show, handleClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    // Perform login logic here with 'username' and 'password' state values
    // For example, you can call an API to authenticate the user
    console.log('Perform login with username:', username, 'and password:', password);
    event.preventDefault();
    // After successful login, you can close the login modal
    // handleClose();
  };

  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Enter Username" value={username} onChange={handleUsernameChange} />
        </Form.Group>
        <br/>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" value={password} onChange={handlePasswordChange}/>
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit" onClick={handleLogin}>Submit</Button>
        <br/>
        <br/>
        {/*<Button variant="primary" type="submit" onClick={handleCancel}>Cancel</Button>*/}

        {/* we can use the div text-divider or the <hr> tag dividing line*/}
        {/*<p style={{textAlign: 'center', color: '#bbb'}}> or </p>*/}
        {/*<hr style={{borderTop: '3px solid #bbb'}}/>*/}
        <div className={styles['text-divider']}>or</div>
        <br/>
        <GoogleButton
          type="dark" // can be light or dark
          onClick={() => { console.log('Google button clicked') }}
        />
      </Form>
    </div>
  );
};

export default Login;
