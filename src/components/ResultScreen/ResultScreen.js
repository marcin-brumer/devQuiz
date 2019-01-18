import React from "react";
import styles from "./ResultScreen.module.css";

const resultScreen = props => {
  const score = ((props.score / props.totalQuestions) * 100).toFixed(0);
  let scoreDescription;

  if (score <= 30) {
    scoreDescription = "You still have a lot to learn!";
  } else if (score > 30 && score <= 50) {
    scoreDescription = "You can do better!";
  } else if (score > 50 && score <= 70) {
    scoreDescription = "Not bad, not bad at all!";
  } else if (score > 70 && score <= 90) {
    scoreDescription = "Good job!";
  } else {
    scoreDescription = "Excellent result!";
  }

  return (
    <div className={styles.ResultScreen}>
      <h1>Your Score:</h1>
      <h1>{score}%</h1>
      <h2>{scoreDescription}</h2>
      <button className={styles.ResetBtn} onClick={props.resetGame}>
        Try Again
      </button>
    </div>
  );
};

export default resultScreen;
