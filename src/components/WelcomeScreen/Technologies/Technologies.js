import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/actions";
import TechnologyBtn from "./TechnologyBtn/TechnologyBtn";

const technologies = props => {
  const [...technologies] = props.technologies.keys();
  return technologies.map(tech => (
    <TechnologyBtn
      key={tech}
      clicked={() => props.technologyChecked(tech)}
      checked={props.technologies.get(tech)}>
      {tech}
    </TechnologyBtn>
  ));
};

const mapStateToProps = state => ({ technologies: state.get("technologies") });

const mapDispatchToProps = dispatch => ({
  technologyChecked: technology =>
    dispatch(actionCreators.technologyChecked(technology))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(technologies);
