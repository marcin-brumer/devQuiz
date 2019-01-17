import React from "react";
import styles from "./AnswerOption.module.css";

const answerOption = props => (
  <div className={styles.AnswerOption} onClick={props.clicked}>
    {props.text}
  </div>
);

export default answerOption;
