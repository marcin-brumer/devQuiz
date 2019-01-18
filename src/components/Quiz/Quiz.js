import React from "react";
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
    <>
      <QuestionCount
        questionId={props.questionId}
        totalQuestions={props.totalQuestions}
      />
      <Question text={currentQuestion.question} />
      <div>{answerOptions}</div>
    </>
  );
};

export default quiz;
