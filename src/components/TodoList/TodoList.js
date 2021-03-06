import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoListItemRow from "../TodoItemRow/TodoItemRow";
import { toggleTodo, deleteTodo, updateTodo } from "../../actions/todoActions";
import { getVisibleTodos } from "../../selectors/todoSelector";

export const TodoList = props => {
  const { todos, toggleTodo, deleteTodo, updateTodo } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Todo</th>
          <th>Date</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {todos.length > 0 &&
          todos.map(todo => (
            <TodoListItemRow
              key={todo.id}
              {...todo}
              onClick={toggleTodo}
              onDelete={deleteTodo}
              onUpdate={updateTodo}
            />
          ))}
      </tbody>
    </table>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      date: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state)
});

const mapDispatchToProps = {
  toggleTodo,
  deleteTodo,
  updateTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
