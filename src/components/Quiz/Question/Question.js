import React, { Component } from "react";
import styles from "./Question.module.css";
import Prism from "prismjs";

class Question extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    let displayedQuestion;

    if (this.props.hasCode) {
      displayedQuestion = (
        <>
          <div className={styles.Question}>
            What will be printed in the console?
          </div>
          <pre style={{ margin: "0 20px" }}>
            <code className="language-javascript">{this.props.text}</code>
          </pre>
        </>
      );
    } else {
      displayedQuestion = (
        <div className={styles.Question}>{this.props.text}</div>
      );
    }

    return <>{displayedQuestion}</>;
  }
}

export default Question;
