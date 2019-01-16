import React from "react";
import Question from "./Question/Question";

const quiz = props => (
  <>
    <Question text={props.questions[props.questionId].question} />
  </>
);

export default quiz;
