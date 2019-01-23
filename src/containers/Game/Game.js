import React, { Component } from "react";
import WelcomeScreen from "../../components/WelcomeScreen/WelcomeScreen";
import ResultScreen from "../../components/ResultScreen/ResultScreen";
import questionsData from "../../data/questions";
import Quiz from "../../components/Quiz/Quiz";

class Game extends Component {
  state = {
    technologies: {
      HTML: false,
      CSS: false,
      JavaScript: false
    },
    questions: [],
    totalQuestions: 3,
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

  answerSelectedHandler = index => e => {
    const { questions, questionId } = this.state;
    const parentNode = e.target.parentNode;
    let oldScore = this.state.score;
    // Answers are numbered from 1, not from 0, so we need to substract 1
    const correctAnswer = questions[questionId].correct - 1;

    if (correctAnswer === index) {
      // Prevent other answers from being clicked
      parentNode.style.pointerEvents = "none";
      e.target.style.backgroundColor = "#C4FFCA";

      // Wait some time for UX
      setTimeout(() => {
        if (this.state.questionId <= this.state.totalQuestions - 2) {
          this.setState({ score: oldScore + 1, questionId: questionId + 1 });
          parentNode.style.pointerEvents = "auto";
        } else {
          this.setState({ score: oldScore + 1, phase: "resultScreen" });
        }
      }, 1000);
    } else {
      // Prevent other answers from being clicked
      parentNode.style.pointerEvents = "none";
      parentNode.childNodes[correctAnswer].style.backgroundColor = "#C4FFCA";
      e.target.style.backgroundColor = "#FF969F";

      // Wait some time for UX
      setTimeout(() => {
        if (this.state.questionId <= this.state.totalQuestions - 2) {
          this.setState({ questionId: questionId + 1 });
          parentNode.style.pointerEvents = "auto";
        } else {
          this.setState({ phase: "resultScreen" });
        }
      }, 1000);
    }
  };

  resetGameHandler = () => {
    this.setState({
      technologies: {
        HTML: false,
        CSS: false,
        JavaScript: false
      },
      questions: [],
      questionId: 0,
      score: 0,
      phase: "welcomeScreen"
    });
  };

  renderGame = () => {
    const phase = this.state.phase;
    switch (phase) {
      case "welcomeScreen":
        return (
          <WelcomeScreen
            technologies={this.state.technologies}
            technologyChecked={this.technologyCheckedHandler}
            gameStarted={this.startGameHandler}
          />
        );
      case "quiz":
        return (
          <Quiz
            questions={this.state.questions}
            questionId={this.state.questionId}
            totalQuestions={this.state.totalQuestions}
            answerSelected={this.answerSelectedHandler}
          />
        );
      case "resultScreen":
        return (
          <ResultScreen
            score={this.state.score}
            totalQuestions={this.state.totalQuestions}
            resetGame={this.resetGameHandler}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return <div>{this.renderGame()}</div>;
  }
}

export default Game;
