import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actions";
import styles from "./ResultScreen.module.css";

class ResultScreen extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const score = (
      (this.props.score / this.props.totalQuestions) *
      100
    ).toFixed(0);
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
        <button className={styles.ResetBtn} onClick={this.props.resetGame}>
          Try Again
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  totalQuestions: state.totalQuestions,
  score: state.score
});

const mapDispatchToProps = dispatch => ({
  resetGame: () => dispatch(actionCreators.resetGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultScreen);
