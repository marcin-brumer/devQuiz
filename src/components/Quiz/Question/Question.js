import React, { useEffect } from "react";
import styles from "./Question.module.css";
import Prism from "prismjs";

const question = props => {
  useEffect(() => Prism.highlightAll(), []);

  let displayedQuestion;

  if (props.hasCode) {
    displayedQuestion = (
      <>
        <div className={styles.Question}>
          What will be printed in the console?
        </div>
        <pre style={{ margin: "0 20px" }}>
          <code className="language-javascript">{props.text}</code>
        </pre>
      </>
    );
  } else {
    displayedQuestion = <div className={styles.Question}>{props.text}</div>;
  }

  return <>{displayedQuestion}</>;
};

export default question;
