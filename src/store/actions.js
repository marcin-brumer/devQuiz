import shuffleQuestions from "../utils/shuffleQuestions";
import questionsData from "../data/questions";

export const START_GAME = "START_GAME";
export const TOTAL_QUESTIONS_SELECTED = "TOTAL_QUESTIONS_SELECTED";
export const ANSWER_SELECTED = "ANSWER_SELECTED";
export const RESET_GAME = "RESET_GAME";
export const TECHNOLOGY_CHECKED = "TECHNOLOGY_CHECKED";

export const technologyChecked = technology => {
  return {
    type: TECHNOLOGY_CHECKED,
    technology
  };
};

export const totalQuestionsSelected = event => {
  return {
    type: TOTAL_QUESTIONS_SELECTED,
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
    type: START_GAME,
    questions: sortedQuestions
  };
};

export const answerSelected = index => {
  return {
    type: ANSWER_SELECTED,
    index: index
  };
};

export const resetGame = () => ({
  type: RESET_GAME
});
