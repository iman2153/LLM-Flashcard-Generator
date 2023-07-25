import React, { useState } from 'react';
import styles from './flashCard.module.css';

const FlashCard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`${styles.flashCard} ${isFlipped ? styles.flipped : ''}`} onClick={handleCardClick}>
      <div className={styles.front}>
        <h2>{question}</h2>
        <p>Click to reveal the answer</p>
      </div>
      <div className={styles.back}>
        <h2>{answer}</h2>
        <p>Click to see the question again</p>
      </div>
    </div>
  );
};

export default FlashCard;