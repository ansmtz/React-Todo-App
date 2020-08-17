import React, { Component } from "react";
import Button from "../Button/Button";
import "./TodoForm.css";
import { v4 as uuid } from "uuid";
import tick from "../images/tick.svg";
class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      isComplete: false,
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.addItem({ ...this.state, id: uuid() });
    this.setState({
      title: "",
      isComplete: false,
    });
  };

  render() {
    return (
      <div className="TodoForm">
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="New Todo"
            id="newTodo"
            onChange={this.changeHandler}
            autoComplete="false"
          />
          <Button isPrimary icon={tick} alt="Add" />
        </form>
      </div>
    );
  }
}

export default TodoForm;
