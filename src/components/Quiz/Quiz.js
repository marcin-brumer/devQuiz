import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import Question from "./Question/Question";
import QuestionCount from "./QuestionCount/QuestionCount";
import AnswerOption from "./AnswerOption/AnswerOption";

const quiz = props => {
  const currentQuestion = props.questions[props.questionId];
  const answerOptions = currentQuestion.answers.map((answer, index) => {
    return (
      <AnswerOption
        key={answer}
        text={`${String.fromCharCode(index + 65)}. ${answer}`}
        clicked={props.answerSelected(index)}
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
        <QuestionCount
          questionId={props.questionId}
          totalQuestions={props.totalQuestions}
        />
        <Question text={currentQuestion.question} />
        <div>{answerOptions}</div>
      </div>
    </CSSTransitionGroup>
  );
};

export default quiz;
