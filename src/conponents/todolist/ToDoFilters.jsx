import React, { Component } from "react";

class ToDoFilters extends Component {
  render() {
    return (
      <div className="filter">
        <button>Todo</button>
        <button>Done</button>
        <button>All</button>
      </div>
    );
  }
}

export default ToDoFilters;
