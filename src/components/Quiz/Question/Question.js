import React from "react";
import styles from "./Question.module.css";

const question = props => <div className={styles.Question}>{props.text}</div>;

export default question;
