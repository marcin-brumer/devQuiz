import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions";
import TechnologyBtn from "./TechnologyBtn/TechnologyBtn";

const technologies = props =>
  Object.keys(props.technologies).map(tech => (
    <TechnologyBtn
      key={tech}
      clicked={() => props.technologyChecked(tech)}
      checked={props.technologies[tech]}>
      {tech}
    </TechnologyBtn>
  ));

const mapStateToProps = state => ({ technologies: state.technologies });

const mapDispatchToProps = dispatch => ({
  technologyChecked: technology =>
    dispatch(actionCreators.technologyChecked(technology))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(technologies);
