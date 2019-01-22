import React, { Component } from "react";
import { Transition, animated } from "react-spring";
import WelcomeScreen from "../../components/WelcomeScreen/WelcomeScreen";
import ResultScreen from "../../components/ResultScreen/ResultScreen";
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
    totalQuestions: 3,
    questionId: 0,
    score: 0,
    phaseIndex: 0
  };

  phase = [
    props => (
      <animated.div style={props}>
        <WelcomeScreen
          technologies={this.state.technologies}
          technologyChecked={this.technologyCheckedHandler}
          gameStarted={this.startGameHandler}
        />
      </animated.div>
    ),
    props => (
      <animated.div style={props}>
        <Quiz
          questions={this.state.questions}
          questionId={this.state.questionId}
          totalQuestions={this.state.totalQuestions}
          answerSelected={this.answerSelectedHandler}
        />
      </animated.div>
    ),
    props => (
      <animated.div style={props}>
        <ResultScreen
          score={this.state.score}
          totalQuestions={this.state.totalQuestions}
          resetGame={this.resetGameHandler}
        />
      </animated.div>
    )
  ];

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

    this.setState({ questions: sortedQuestions, phaseIndex: 1 });
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
          this.setState({ score: oldScore + 1, phaseIndex: 2 });
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
          this.setState({ phaseIndex: 2 });
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
      phaseIndex: 0
    });
  };

  render() {
    return (
      <div className={styles.Game}>
        <Transition
          items={this.state.phaseIndex}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ position: "absolute", opacity: 0 }}>
          {phaseIndex => this.phase[phaseIndex]}
        </Transition>
      </div>
    );
  }
}

export default Game;
