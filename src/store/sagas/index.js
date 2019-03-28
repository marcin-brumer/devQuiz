import { takeEvery, put } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import shuffleQuestions from "../../utils/shuffleQuestions";
import questionsData from "../../data/questions";

export function* rootSaga() {
  yield takeEvery(actionTypes.INIT_START_GAME, startGameSaga);
}

export function* startGameSaga(action) {
  const questions = [];
  yield Object.keys(action.technologies).forEach(tech => {
    if (action.technologies[tech]) {
      questions.push(...questionsData[tech]);
    }
  });
  // Shuffles questions array and takes first {totalQuestions} amount
  const sortedQuestions = shuffleQuestions(questions).slice(
    0,
    action.totalQuestions
  );
  yield put({ type: actionTypes.START_GAME, questions: sortedQuestions });
}
