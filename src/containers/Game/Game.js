import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransitionGroup } from "react-transition-group";
import { gamePhase } from "../../constants";
import WelcomeScreen from "../../components/WelcomeScreen/WelcomeScreen";
import ResultScreen from "../../components/ResultScreen/ResultScreen";
import Quiz from "../../components/Quiz/Quiz";

class Game extends Component {
  renderGame = () => {
    const phase = this.props.phase;
    switch (phase) {
      case gamePhase.WELCOME_SCREEN:
        return <WelcomeScreen />;
      case gamePhase.QUIZ_SCREEN:
        return <Quiz />;
      case gamePhase.RESULT_SCREEN:
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
