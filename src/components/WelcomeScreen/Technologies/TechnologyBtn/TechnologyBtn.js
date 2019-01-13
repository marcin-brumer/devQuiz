import React from "react";
import styles from "./TechnologyBtn.module.css";

const technologyBtn = props => {
  let classes = [styles.TechnologyBtn];
  if (props.checked) {
    classes.push(styles.Checked);
  }
  return (
    <div className={classes.join(" ")} onClick={props.clicked}>
      {props.children}
    </div>
  );
};

export default technologyBtn;
