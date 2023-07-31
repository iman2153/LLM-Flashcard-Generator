import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Home Page</h1>
      <Link to="/App">
        <button>Go to App</button>
      </Link>
    </div>
  );
};

export default Home;
