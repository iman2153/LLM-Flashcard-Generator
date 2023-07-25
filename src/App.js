import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import APIFetcher from './APIFetcher.js';

const App = () => {
  return (
    <div className="app-container">
      {/* Render the APIFetcher component */}
      <APIFetcher />
    </div>
  );
};

export default App;
