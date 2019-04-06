import { fromJS } from "immutable";
import * as actionTypes from "./actions/actionTypes";
import { gamePhase } from "../constants";

const initialState = fromJS({
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
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TECHNOLOGY_CHECKED:
      return state.updateIn(["technologies", action.technology], tech => !tech);

    case actionTypes.TOTAL_QUESTIONS_SELECTED:
      return state.set("totalQuestions", action.value);

    case actionTypes.START_GAME:
      return state
        .set("questions", fromJS(action.questions))
        .set("phase", gamePhase.QUIZ_SCREEN);

    case actionTypes.CORRECT_ANSWER_SELECTED:
      if (state.get("questionId") <= state.get("totalQuestions") - 2) {
        return state
          .set("score", state.get("score") + 1)
          .set("questionId", state.get("questionId") + 1);
      } else {
        return state
          .set("score", state.get("score") + 1)
          .set("phase", gamePhase.RESULT_SCREEN);
      }

    case actionTypes.WRONG_ANSWER_SELECTED:
      if (state.get("questionId") <= state.get("totalQuestions") - 2) {
        return state.set("questionId", state.get("questionId") + 1);
      } else {
        return state.set("phase", gamePhase.RESULT_SCREEN);
      }

    case actionTypes.RESET_GAME:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
