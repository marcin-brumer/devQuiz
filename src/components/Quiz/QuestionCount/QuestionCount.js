import React from "react";
import styles from "./QuestionCount.module.css";

const questionCount = props => (
  <div className={styles.QuestionCount}>
    Question {props.questionId + 1}/{props.totalQuestions}
  </div>
);

export default questionCount;
