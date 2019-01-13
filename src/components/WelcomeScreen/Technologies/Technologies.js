import React from "react";
import TechnologyBtn from "./TechnologyBtn/TechnologyBtn";

const technologies = props => {
  const techArray = Object.keys(props.technologies);
  return techArray.map(tech => (
    <TechnologyBtn
      key={tech}
      clicked={() => props.technologyChecked(tech)}
      checked={props.technologies[tech]}
    >
      {tech}
    </TechnologyBtn>
  ));
};

export default technologies;
