import React, { useState, useEffect } from 'react';
import styles from '../styles/Correct.module.css';

export default function Correct() {
  const [currentFrame, setCurrentFrame] = useState(0);

  function nextFrame() {
    setCurrentFrame(currentFrame => (currentFrame + 1) % 8);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextFrame();
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <h2>Results</h2>
      <div className={styles.animationwrapper}>
        <div className={styles.animation} style={{'--current-frame': currentFrame}}></div>
      </div>
      <button className={styles.nextbtn}>Next</button>
      <div className={styles.chatwrapper}>
        <img id="chat-img" src="/chatbox.png" />
        <div className={styles.feedback}> 
          <p>Bullseye, partner!<br />Your answer was correct.</p>
        </div>
      </div>
    </div>
  );
}
