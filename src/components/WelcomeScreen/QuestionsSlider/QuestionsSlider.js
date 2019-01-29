import React from "react";
import styles from "./QuestionsSlider.module.css";

const QuestionsSlider = props => {
  return (
    <div className={styles.QuestionsSlider}>
      <input
        className={styles.Range}
        type="range"
        min="1"
        max="20"
        value={props.totalQuestions}
        onChange={props.selectTotalQuestions}
      />
      <span className={styles.Value}>{props.totalQuestions}</span>
    </div>
  );
};

export default QuestionsSlider;
