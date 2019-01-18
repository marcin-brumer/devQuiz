import React from "react";
import TechnologyBtn from "./TechnologyBtn/TechnologyBtn";

const technologies = props =>
  Object.keys(props.technologies).map(tech => (
    <TechnologyBtn
      key={tech}
      clicked={() => props.technologyChecked(tech)}
      checked={props.technologies[tech]}
    >
      {tech}
    </TechnologyBtn>
  ));

export default technologies;
