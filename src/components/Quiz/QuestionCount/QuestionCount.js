import React from "react";
import { connect } from "react-redux";
import styles from "./QuestionCount.module.css";

const questionCount = props => (
  <div className={styles.QuestionCount}>
    Question {props.questionId + 1}/{props.totalQuestions}
  </div>
);

const mapStateToProps = state => {
  return {
    totalQuestions: state.get("totalQuestions")
  };
};
export default connect(mapStateToProps)(questionCount);
