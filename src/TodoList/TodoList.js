import React, { Component } from "react";
import "./TodoList.css";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { title: "Создавай список дел", isComplete: false, id: 1 },
        {
          title: "Просто кликни на текст с задачей чтобы пометить её",
          isComplete: false,
          id: 2,
        },
        {
          title: "Выполненные задачи отображаются серым",
          isComplete: true,
          id: 3,
        },
      ],
    };
  }

  addItem = (item) => {
    this.setState((currentState) => ({
      todos: [...currentState.todos, item],
    }));
  };

  removeItem = (id) => {
    this.setState((currentState) => ({
      todos: currentState.todos.filter((todo) => todo.id !== id),
    }));
  };

  markItemAsCompleted = (id) => {
    const updated = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    this.setState({
      todos: updated,
    });
  };

  editItem = (updatedTitle, id) => {
    const updated = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: updatedTitle };
      }
      return todo;
    });
    this.setState({
      todos: updated,
    });
  };

  render() {
    const date = new Date().toLocaleDateString("ru-RU", {
      month: "long",
      weekday: "long",
      day: "numeric",
    });

    let todos = this.state.todos.length ? (
      this.state.todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          isComplete={todo.isComplete}
          removeItem={this.removeItem}
          completeItem={this.markItemAsCompleted}
          editItem={this.editItem}
        />
      ))
    ) : (
      <h4 className="msg">На сегодня задач нет</h4>
    );
    return (
      <div className="TodoList">
        <h1>
          Сегодня {date}. <br />
          Запланировано:
        </h1>
        <ul>{todos}</ul>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default TodoList;
