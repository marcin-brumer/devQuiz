import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actions";
import Technologies from "./Technologies/Technologies";
import styles from "./WelcomeScreen.module.css";
import QuestionsSlider from "./QuestionsSlider/QuestionsSlider";
import Button from "../UI/Button/Button";

const welcomeScreen = props => {
  const [...techValues] = props.technologies.values();
  let gameReady = false;
  techValues.forEach(val => {
    if (val === true) {
      gameReady = true;
    }
  });
  return (
    <>
      <div className={styles.Padding}>
        <h1>Welcome to devQuiz</h1>
      </div>
      <div className={styles.Padding}>
        <h3>
          First select the technologies from which you want to make a quiz
        </h3>
      </div>
      <Technologies />
      <div className={styles.Padding}>
        <h3>and decide how many questions you want to answer</h3>
      </div>
      <QuestionsSlider />
      <Button
        clicked={() =>
          props.startGame(props.totalQuestions, props.technologies)
        }
        disabled={!gameReady}
        btnColor="Blue">
        Start
      </Button>
    </>
  );
};

const mapStateToProps = state => ({
  technologies: state.get("technologies"),
  totalQuestions: state.get("totalQuestions")
});

const mapDispatchToProps = dispatch => ({
  startGame: (totalQuestions, technologies) =>
    dispatch(actionCreators.startGame(totalQuestions, technologies))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(welcomeScreen);
