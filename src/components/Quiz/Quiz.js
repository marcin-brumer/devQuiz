import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actions";
import { CSSTransitionGroup } from "react-transition-group";
import Question from "./Question/Question";
import QuestionCount from "./QuestionCount/QuestionCount";
import AnswerOption from "./AnswerOption/AnswerOption";

const quiz = props => {
  const currentQuestion = props.questions.get(props.questionId);
  const answerOptions = currentQuestion.get("answers").map((answer, index) => {
    return (
      <AnswerOption
        key={answer}
        text={`${String.fromCharCode(index + 65)}. ${answer}`}
        clicked={event =>
          props.answerSelected(index, event, props.questions, props.questionId)
        }
      />
    );
  });
  return (
    <CSSTransitionGroup
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}>
      <div key={props.questionId}>
        <QuestionCount questionId={props.questionId} />
        <Question
          text={currentQuestion.get("question")}
          hasCode={currentQuestion.get("code")}
        />
        <div>{answerOptions}</div>
      </div>
    </CSSTransitionGroup>
  );
};

const mapStateToProps = state => ({
  questions: state.get("questions"),
  questionId: state.get("questionId")
});

const mapDispatchToProps = dispatch => ({
  answerSelected: (index, event, questions, questionId) =>
    dispatch(actionCreators.answerSelected(index, event, questions, questionId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(quiz);
