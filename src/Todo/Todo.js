import React, { Component } from "react";
import Button from "../Button/Button";
import "./Todo.css";
import edit from "../images/edit.svg";
import trash from "../images/trash.svg";
import tick from "../images/tick.svg";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      title: this.props.title,
    };
  }

  removeHandler = () => {
    this.props.removeItem(this.props.id);
  };

  completeHandler = (id) => {
    this.props.completeItem(id);
  };

  editHandler = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  updateHandler = (e) => {
    e.preventDefault();
    this.props.editItem(this.state.title, this.props.id);
    this.setState({
      isEditing: false,
    });
  };

  render() {
    if (!this.state.isEditing) {
      return (
        <div className="Todo">
          <li
            className={
              !this.props.isComplete
                ? "TodoItem"
                : " TodoItem TodoItem-completed"
            }
            onClick={this.completeHandler.bind(this, this.props.id)}
          >
            {this.props.title}
          </li>
          <div className="Todo-buttons">
            <Button
              isPrimary={false}
              icon={edit}
              alt="Edit"
              handler={this.editHandler}
            />
            <Button
              isPrimary={false}
              icon={trash}
              alt="Delete"
              handler={this.removeHandler}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="EditForm">
          <form onSubmit={this.updateHandler}>
            <input
              type="text"
              name="title"
              id="title"
              value={this.state.title}
              onChange={this.changeHandler}
            />
            <Button isPrimary={false} icon={tick} alt="Save" />
          </form>
        </div>
      );
    }
  }
}

export default Todo;
