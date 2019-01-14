import React from "react";
import TechnologyBtn from "./TechnologyBtn/TechnologyBtn";

const technologies = props => {
  const techArray = Object.keys(props.technologies);
  const technologiesList = techArray.map(tech => (
    <TechnologyBtn
      key={tech}
      clicked={() => props.technologyChecked(tech)}
      checked={props.technologies[tech]}
    >
      {tech}
    </TechnologyBtn>
  ));

  return (
    <div style={{ borderBottom: "1px solid #eee" }}>{technologiesList}</div>
  );
};

export default technologies;
