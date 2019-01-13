import React, { Component } from "react";
import WelcomeScreen from "../../components/WelcomeScreen/WelcomeScreen";
import styles from "./Game.module.css";

class Quiz extends Component {
  state = {
    technologies: {
      HTML: false,
      CSS: false,
      JavaScript: false
    }
  };

  technologyCheckedHandler = technology => {
    const oldTech = this.state.technologies[technology];
    const newTech = !oldTech;
    const updatedTechnologies = { ...this.state.technologies };
    updatedTechnologies[technology] = newTech;
    this.setState({ technologies: updatedTechnologies });
  };

  render() {
    return (
      <div className={styles.Game}>
        <WelcomeScreen
          technologies={this.state.technologies}
          technologyChecked={this.technologyCheckedHandler}
        />
      </div>
    );
  }
}

export default Quiz;
