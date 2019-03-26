import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import Technologies from "./Technologies/Technologies";
import styles from "./WelcomeScreen.module.css";
import QuestionsSlider from "./QuestionsSlider/QuestionsSlider";

class WelcomeScreen extends Component {
  componentDidMount() {
    this.props.resetGame();
  }

  render() {
    const techValues = Object.values(this.props.technologies);
    let gameReady = false;
    techValues.forEach(val => {
      if (val === true) {
        gameReady = true;
      }
    });
    return (
      <>
        <h1>Welcome to devQuiz</h1>
        <h3>
          First select the technologies from which you want to make a quiz
        </h3>
        <Technologies />
        <h3>and decide how many questions you want to answer</h3>
        <QuestionsSlider />
        <button
          className={styles.StartBtn}
          onClick={() =>
            this.props.startGame(
              this.props.totalQuestions,
              this.props.technologies
            )
          }
          disabled={!gameReady}>
          Start
        </button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  technologies: state.technologies,
  totalQuestions: state.totalQuestions
});

const mapDispatchToProps = dispatch => ({
  startGame: (totalQuestions, technologies) =>
    dispatch(actionCreators.startGame(totalQuestions, technologies)),
  resetGame: () => dispatch(actionCreators.resetGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeScreen);
