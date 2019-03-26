import * as actionTypes from "./actionTypes";
import shuffleQuestions from "../../utils/shuffleQuestions";
import questionsData from "../../data/questions";

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
  const questions = [];
  Object.keys(technologies).forEach(tech => {
    if (technologies[tech]) {
      questions.push(...questionsData[tech]);
    }
  });
  // Shuffles questions array and takes first {totalQuestions} amount
  const sortedQuestions = shuffleQuestions(questions).slice(0, totalQuestions);
  return {
    type: actionTypes.START_GAME,
    questions: sortedQuestions
  };
};

export const answerSelected = index => {
  return {
    type: actionTypes.ANSWER_SELECTED,
    index: index
  };
};

export const resetGame = () => ({
  type: actionTypes.RESET_GAME
});

export const loadWelcomeScreen = () => ({
  type: actionTypes.LOAD_WELCOME_SCREEN
});
