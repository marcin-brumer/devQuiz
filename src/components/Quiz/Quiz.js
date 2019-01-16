import React from "react";
import Question from "./Question/Question";
import QuestionCount from "./QuestionCount/QuestionCount";

const quiz = props => (
  <>
    <QuestionCount
      questionId={props.questionId}
      totalQuestions={props.totalQuestions}
    />
    <Question text={props.questions[props.questionId].question} />
  </>
);

export default quiz;
