import React, { Component } from "react";
import "./ToDo.css";
import ToDoCreate from "./ToDoCreate";
import ToDoItem from "./ToDoItem";
import ToDoFilters from "./ToDoFilters";
class ToDoList extends Component {
  render() {
    return (
      <div className="todo">
        <h1>Todo list</h1>
        <ToDoCreate />
        <ToDoFilters />
        <div>
          <div className="task-list">
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoList;
