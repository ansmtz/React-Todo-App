import React, { Component } from "react";
import TodoList from "./TodoList/TodoList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <TodoList />
        <footer className="App-footer">
          Designed and Developed by Anthony Sedov
        </footer>
      </div>
    );
  }
}

export default App;
