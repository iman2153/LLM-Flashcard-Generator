import React, { useState, useEffect } from 'react';
import FlashCard from './flashcard.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchData from './fetch.js';
import FileUpload from './file_upload.js';
import './App.css';

const APIFetcher = () => {
    const [apiPrompt, setApiPrompt] = useState('');
    const [apiResponse, setApiResponse] = useState('');
    const [apiMessages, setApiMessages] = useState([]);
    const [dictionary, setDictionary] = useState({});

    useEffect(() => {
      console.log("API Messages:", apiMessages);
    }, [apiMessages]);

    useEffect(() => {
      console.log("Dictionary:", dictionary);
    }, [dictionary]);

    const handleAPIClick = async () => {
      const response = await fetchData(apiPrompt);
      setApiResponse(response);
      setApiMessages([...apiMessages, response]);

      try {
        const parsedDictionary = JSON.parse(response);
        setDictionary(parsedDictionary);
      } catch (error) {
        console.error("Error parsing API response:", error);
        // Handle the error condition here
      }
    };

    const handlePromptChange = (event) => {
      setApiPrompt(event.target.value);
    };

    return (
      <div className="main-container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ marginBottom: '1rem', fontFamily: 'Arial', fontWeight: 'bold', fontSize: '5rem' }}>Cardify Pro</h1>
          <p style={{ marginBottom: '1rem', fontSize: '1rem' }}>Paste in your notes below to convert them into flashcards</p>
          {/* Rest of your existing code... */}
          <input
            type="text"
            value={apiPrompt}
            onChange={handlePromptChange}
            className="form-control mb-3"
            style={{ width: '300px', fontSize: '1rem' }}
          />
          <button onClick={handleAPIClick} className="btn btn-primary mb-3">Create Flashcards</button>
          {/* Flashcards are displayed here */}
          <div className="flashcard-container" style={{ display: 'flex' }}>
            {Object.entries(dictionary).map(([term, definition]) => (
              <FlashCard key={term} question={term} answer={definition} style={{ marginRight: '10px' }} />
            ))}
          </div>
        </div>
      </div>
    );
  };

export default APIFetcher;
