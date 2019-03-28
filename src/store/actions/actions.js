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

export const answerSelected = index => {
  return {
    type: actionTypes.ANSWER_SELECTED,
    index
  };
};

export const resetGame = () => ({
  type: actionTypes.RESET_GAME
});

export const loadWelcomeScreen = () => ({
  type: actionTypes.LOAD_WELCOME_SCREEN
});
