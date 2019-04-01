import { takeEvery, put, delay } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import shuffleQuestions from "../../utils/shuffleQuestions";
import questionsData from "../../data/questions";

export function* rootSaga() {
  yield takeEvery(actionTypes.INIT_START_GAME, startGameSaga);
  yield takeEvery(actionTypes.ANSWER_SELECTED, answerSelectedSaga);
}

export function* startGameSaga(action) {
  const { technologies, totalQuestions } = action;
  const questions = [];
  yield Object.keys(technologies).forEach(tech => {
    if (technologies[tech]) {
      questions.push(...questionsData[tech]);
    }
  });
  // Shuffles questions array and takes first {totalQuestions} amount
  const sortedQuestions = shuffleQuestions(questions).slice(0, totalQuestions);
  yield put({ type: actionTypes.START_GAME, questions: sortedQuestions });
}

export function* answerSelectedSaga(action) {
  const { index, event, questions, questionId } = action;
  const parentNode = event.target.parentNode;
  const correctAnswer = questions[questionId].correct - 1;

  if (index === correctAnswer) {
    // Prevent other answers from being clicked
    yield (parentNode.style.pointerEvents = "none");
    yield (event.target.style.backgroundColor = "#C4FFCA");
    yield delay(1000);
    yield (parentNode.style.pointerEvents = "auto");
    yield put({ type: actionTypes.CORRECT_ANSWER_SELECTED });
  } else {
    // Prevent other answers from being clicked
    yield (parentNode.style.pointerEvents = "none");
    yield (parentNode.childNodes[correctAnswer].style.backgroundColor =
      "#C4FFCA");
    yield (event.target.style.backgroundColor = "#FF969F");
    yield delay(2000);
    yield (parentNode.style.pointerEvents = "auto");
    yield put({ type: actionTypes.WRONG_ANSWER_SELECTED });
  }
}
