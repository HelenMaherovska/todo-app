import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TodoItemRow.css";

class TodoItemRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.onToggleEdit = this.onToggleEdit.bind(this);
    this.onEditTodo = this.onEditTodo.bind(this);
  }

  onToggleEdit() {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing
    }));
  }

  onEditTodo() {
    const { id, completed, onUpdate } = this.props;

    this.setState(prevState => ({
      isEditing: !prevState.isEditing
    }));

    const data = {
      id,
      completed,
      text: this.editInput.value
    };

    onUpdate(data);
  }

  render() {
    const { onClick, onDelete, text, completed, date, id } = this.props;
    const { isEditing } = this.state;

    let todoItem = isEditing ? (
      <tr>
        <td>
          <input
            defaultValue={text}
            type="text"
            ref={editInput => (this.editInput = editInput)}
            className="form-control todo-text"
          />
        </td>
        <td />
        <td>
          <button
            onClick={() => this.onEditTodo(id)}
            type="button"
            className="btn btn-success mr-2"
          >
            Save
          </button>
          <button
            onClick={this.onToggleEdit}
            type="button"
            className="btn btn-danger mr-2"
          >
            Cancel
          </button>
        </td>
      </tr>
    ) : (
      <tr>
        <td
          onClick={() => onClick(id)}
          className={"todo-text " + (completed ? "completed" : "")}
        >
          {text}
        </td>
        <td
          onClick={() => onClick(id)}
          className={"todo-text " + (completed ? "completed" : "")}
        >
          {date}
        </td>
        <td>
          <button
            onClick={this.onToggleEdit}
            type="button"
            className="btn btn-info mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(id)}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
    return todoItem;
  }
}

TodoItemRow.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default TodoItemRow;
