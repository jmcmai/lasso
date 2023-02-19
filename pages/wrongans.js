import React, { useState, useEffect } from 'react';
import styles from '../styles/Wrong.module.css';

export default function Incorrect() {
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
        <img id="chat-img" src="/chatbox.png"/>
        <div className={styles.feedback}> 
          <p>You missed the mark, pal.<br />Your answer was incorrect.</p>
        </div>
      </div>
    </div>
  );
}