import React, { useState } from 'react';
import styles from '../styles/Quiz.module.css';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Berlin', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the tallest mountain in the world?',
      answerOptions: [
        { answerText: 'Mount Kilimanjaro', isCorrect: false },
        { answerText: 'Mount Everest', isCorrect: true },
        { answerText: 'Mount Denali', isCorrect: false },
        { answerText: 'Mount Fuji', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the currency of Japan?',
      answerOptions: [
        { answerText: 'Dollar', isCorrect: false },
        { answerText: 'Yen', isCorrect: true },
        { answerText: 'Euro', isCorrect: false },
        { answerText: 'Pound', isCorrect: false },
      ],
    },
  ];

  const handleAnswerOptionClick = (isCorrect:any) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className={styles.quiz}>
      {showScore ? (
        <div className={styles.scoresection}>
          <p>You scored {score} out of {questions.length}</p>
        </div>
      ) : (
        <>
          <div>
            <div className={styles.questioncount}>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div>
            <div className={styles.questiontext}>{questions[currentQuestion].questionText}</div>
            </div>
          </div>
          <div className={styles.answersection}>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button className={styles.answerbutton} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
          <img id="chat-img" src="/chatbox.png"/>
        </>
      )}
    </div>
  );
};
