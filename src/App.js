import React, { Component } from "react";
import Game from "./containers/Game/Game";
import "./App.css";
import "./prism.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span className="Title">devQuiz</span>
        </header>
        <main className="App-main">
          <Game totalQuestions={20} />
        </main>
      </div>
    );
  }
}

export default App;
