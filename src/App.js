import React, { Component } from "react";
import Game from "./containers/Game/Game";
import "./App.css";
import "./prism.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">devQuiz</header>
        <main className="App-main">
          <Game />
        </main>
      </div>
    );
  }
}

export default App;
