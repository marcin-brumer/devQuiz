import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/actions";
import styles from "./QuestionsSlider.module.css";

const questionsSlider = props => {
  return (
    <div className={styles.QuestionsSlider}>
      <input
        className={styles.Range}
        type="range"
        min="1"
        max="20"
        value={props.totalQuestions}
        onChange={props.totalQuestionsSelected}
      />
      <span className={styles.Value}>{props.totalQuestions}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  totalQuestions: state.totalQuestions
});

const mapDispatchToProps = dispatch => ({
  totalQuestionsSelected: event =>
    dispatch(actionCreators.totalQuestionsSelected(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(questionsSlider);
