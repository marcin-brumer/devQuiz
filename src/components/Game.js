import React from "react";
import { connect } from "react-redux";
import { CSSTransitionGroup } from "react-transition-group";
import { gamePhase } from "../constants";
import WelcomeScreen from "./WelcomeScreen/WelcomeScreen";
import ResultScreen from "./ResultScreen/ResultScreen";
import Quiz from "./Quiz/Quiz";

const game = props => {
  let gameScreen;

  switch (props.phase) {
    case gamePhase.WELCOME_SCREEN:
      gameScreen = <WelcomeScreen />;
      break;
    case gamePhase.QUIZ_SCREEN:
      gameScreen = <Quiz />;
      break;
    case gamePhase.RESULT_SCREEN:
      gameScreen = <ResultScreen />;
      break;
    default:
      gameScreen = null;
  }

  return (
    <CSSTransitionGroup
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}>
      <div key={props.phase}>{gameScreen}</div>
    </CSSTransitionGroup>
  );
};

const mapStateToProps = state => ({
  phase: state.get("phase")
});

export default connect(mapStateToProps)(game);
