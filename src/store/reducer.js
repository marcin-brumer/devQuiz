import * as actionTypes from "./actions";

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
  phase: "welcomeScreen"
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
      return { ...state, questions: action.questions, phase: "quiz" };

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
          return { ...state, score: oldScore + 1, phase: "resultScreen" };
        }
      } else {
        if (state.questionId <= state.totalQuestions - 2) {
          return { ...state, questionId: state.questionId + 1 };
        } else {
          return { ...state, phase: "resultScreen" };
        }
      }

    case actionTypes.RESET_GAME:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
