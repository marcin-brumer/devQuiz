import React from "react";
import Technologies from "./Technologies/Technologies";
import styles from "./WelcomeScreen.module.css";

const welcomeScreen = props => {
  const techValues = Object.values(props.technologies);
  let gameReady = false;
  techValues.forEach(val => {
    if (val === true) {
      gameReady = true;
    }
  });

  return (
    <>
      <h1>Welcome to devQuiz</h1>
      <h3>First select the technologies from which you want to make a quiz</h3>
      <Technologies
        technologies={props.technologies}
        technologyChecked={props.technologyChecked}
      />
      <button
        className={styles.StartBtn}
        onClick={props.gameStarted}
        disabled={!gameReady}
      >
        Start
      </button>
    </>
  );
};

export default welcomeScreen;
