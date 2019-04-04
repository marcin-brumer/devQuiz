import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actions";
import Technologies from "./Technologies/Technologies";
import styles from "./WelcomeScreen.module.css";
import QuestionsSlider from "./QuestionsSlider/QuestionsSlider";

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
      <h1>Welcome to devQuiz</h1>
      <h3>First select the technologies from which you want to make a quiz</h3>
      <Technologies />
      <h3>and decide how many questions you want to answer</h3>
      <QuestionsSlider />
      <button
        className={styles.StartBtn}
        onClick={() =>
          props.startGame(props.totalQuestions, props.technologies)
        }
        disabled={!gameReady}>
        Start
      </button>
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
