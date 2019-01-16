import React from "react";
import Question from "./Question/Question";
import QuestionCount from "./QuestionCount/QuestionCount";
import AnswerOption from "./AnswerOption/AnswerOption";

const quiz = props => {
  const currentQuestion = props.questions[props.questionId];
  const answerOptions = currentQuestion.answers.map((answer, index) => {
    return (
      <AnswerOption
        key={index}
        text={`${String.fromCharCode(index + 65)}. ${answer}`}
      />
    );
  });

  return (
    <>
      <QuestionCount
        questionId={props.questionId}
        totalQuestions={props.totalQuestions}
      />
      <Question text={currentQuestion.question} />
      <div style={{ borderBottom: "1px solid #eee" }}>{answerOptions}</div>
    </>
  );
};

export default quiz;
