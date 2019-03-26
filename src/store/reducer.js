import * as actionTypes from "./actions/actionTypes";
import { gamePhase } from "../constants";

const initialState = {
  technologies: {
    HTML: false,
    CSS: false,
    JavaScript: false
  },
  questions: [],
  questionId: 0,
  totalQuestions: 10,
  score: 0,
  phase: gamePhase.WELCOME_SCREEN
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TECHNOLOGY_CHECKED:
      const oldTech = state.technologies[action.technology];
      const newTech = !oldTech;
      const updatedTechnologies = { ...state.technologies };
      updatedTechnologies[action.technology] = newTech;
      return { ...state, technologies: updatedTechnologies };

    case actionTypes.TOTAL_QUESTIONS_SELECTED:
      return { ...state, totalQuestions: action.value };

    case actionTypes.START_GAME:
      return {
        ...state,
        questions: action.questions,
        phase: gamePhase.QUIZ_SCREEN
      };

    case actionTypes.ANSWER_SELECTED:
      let oldScore = state.score;
      // Answers are numbered from 1, not from 0, so we need to substract 1
      const correctAnswer = state.questions[state.questionId].correct - 1;
      if (correctAnswer === action.index) {
        if (state.questionId <= state.totalQuestions - 2) {
          return {
            ...state,
            score: oldScore + 1,
            questionId: state.questionId + 1
          };
        } else {
          return {
            ...state,
            score: oldScore + 1,
            phase: gamePhase.RESULT_SCREEN
          };
        }
      } else {
        if (state.questionId <= state.totalQuestions - 2) {
          return { ...state, questionId: state.questionId + 1 };
        } else {
          return { ...state, phase: gamePhase.RESULT_SCREEN };
        }
      }

    case actionTypes.LOAD_WELCOME_SCREEN:
      return { ...state, phase: gamePhase.WELCOME_SCREEN };

    case actionTypes.RESET_GAME:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
