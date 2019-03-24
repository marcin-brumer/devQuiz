import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransitionGroup } from "react-transition-group";
import WelcomeScreen from "../../components/WelcomeScreen/WelcomeScreen";
import ResultScreen from "../../components/ResultScreen/ResultScreen";
import Quiz from "../../components/Quiz/Quiz";

class Game extends Component {
  answerSelectedHandler = index => e => {
    const { questions, questionId } = this.state;
    const parentNode = e.target.parentNode;
    let oldScore = this.state.score;
    // Answers are numbered from 1, not from 0, so we need to substract 1
    const correctAnswer = questions[questionId].correct - 1;

    if (correctAnswer === index) {
      // Prevent other answers from being clicked
      parentNode.style.pointerEvents = "none";
      e.target.style.backgroundColor = "#C4FFCA";

      // Wait some time for UX
      setTimeout(() => {
        if (this.state.questionId <= this.state.totalQuestions - 2) {
          this.setState({ score: oldScore + 1, questionId: questionId + 1 });
          parentNode.style.pointerEvents = "auto";
        } else {
          this.setState({ score: oldScore + 1, phase: "resultScreen" });
        }
      }, 1000);
    } else {
      // Prevent other answers from being clicked
      parentNode.style.pointerEvents = "none";
      parentNode.childNodes[correctAnswer].style.backgroundColor = "#C4FFCA";
      e.target.style.backgroundColor = "#FF969F";

      // Wait some time for UX
      setTimeout(() => {
        if (this.state.questionId <= this.state.totalQuestions - 2) {
          this.setState({ questionId: questionId + 1 });
          parentNode.style.pointerEvents = "auto";
        } else {
          this.setState({ phase: "resultScreen" });
        }
      }, 2000);
    }
  };

  renderGame = () => {
    const phase = this.props.phase;
    switch (phase) {
      case "welcomeScreen":
        return <WelcomeScreen />;
      case "quiz":
        return <Quiz />;
      case "resultScreen":
        return <ResultScreen />;
      default:
        return null;
    }
  };

  render() {
    return (
      <CSSTransitionGroup
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}>
        <div key={this.props.phase}>{this.renderGame()}</div>
      </CSSTransitionGroup>
    );
  }
}

const mapStateToProps = state => ({
  phase: state.phase
});

export default connect(mapStateToProps)(Game);
