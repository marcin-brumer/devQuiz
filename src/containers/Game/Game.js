import React, { Component } from "react";
import WelcomeScreen from "../../components/WelcomeScreen/WelcomeScreen";
import questionsData from "../../data/questions";
import Quiz from "../../components/Quiz/Quiz";
import styles from "./Game.module.css";

class Game extends Component {
  state = {
    technologies: {
      HTML: false,
      CSS: false,
      JavaScript: false
    },
    questions: [],
    totalQuestions: 20,
    questionId: 0,
    score: 0,
    phase: "welcomeScreen"
  };

  technologyCheckedHandler = technology => {
    const oldTech = this.state.technologies[technology];
    const newTech = !oldTech;
    const updatedTechnologies = { ...this.state.technologies };
    updatedTechnologies[technology] = newTech;
    this.setState({ technologies: updatedTechnologies });
  };

  startGameHandler = () => {
    const questions = [];
    const technologies = Object.keys(this.state.technologies);
    technologies.forEach(tech => {
      if (this.state.technologies[tech]) {
        questions.push(...questionsData[tech]);
      }
    });
    // Shuffles Questions
    const sortedQuestions = questions
      .sort((a, b) => (Math.random() < 0.5 ? 1 : -1))
      .slice(0, this.state.totalQuestions);

    this.setState({ questions: sortedQuestions, phase: "quiz" });
  };

  renderGame = () => {
    if (this.state.phase === "welcomeScreen") {
      return (
        <WelcomeScreen
          technologies={this.state.technologies}
          technologyChecked={this.technologyCheckedHandler}
          gameStarted={this.startGameHandler}
        />
      );
    } else if (this.state.phase === "quiz") {
      return (
        <Quiz
          questions={this.state.questions}
          questionId={this.state.questionId}
          totalQuestions={this.state.totalQuestions}
        />
      );
    } else {
      return null;
    }
  };

  render() {
    return <div className={styles.Game}>{this.renderGame()}</div>;
  }
}

export default Game;
