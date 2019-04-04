import * as actionTypes from "./actionTypes";

export const technologyChecked = technology => {
  return {
    type: actionTypes.TECHNOLOGY_CHECKED,
    technology
  };
};

export const totalQuestionsSelected = event => {
  return {
    type: actionTypes.TOTAL_QUESTIONS_SELECTED,
    value: event.target.value
  };
};

export const startGame = (totalQuestions, technologies) => {
  return {
    type: actionTypes.INIT_START_GAME,
    totalQuestions,
    technologies
  };
};

export const answerSelected = (index, event, questions, questionId) => {
  return {
    type: actionTypes.ANSWER_SELECTED,
    index,
    event,
    questions,
    questionId
  };
};

export const resetGame = () => ({
  type: actionTypes.RESET_GAME
});
