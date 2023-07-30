import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes instead of Switch
import Home from './Homepage';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes> {/* Use Routes component instead of Switch */}
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
