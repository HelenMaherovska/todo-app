import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { addTodo } from "../../actions/todoActions";
import "./AddTodo.css";

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onAddTodo = this.onAddTodo.bind(this);
  }
  onChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  onAddTodo() {
    const { addTodo } = this.props;
    const { inputValue } = this.state;

    this.setState({ inputValue: "" });

    return inputValue.trim() ? addTodo(inputValue) : null;
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div className="add-todo-wrapper">
        <div className="input-group d-flex pr-0 pl-0 justify-content-between">
          <input
            type="text"
            className="form-control mr-4"
            value={inputValue}
            onChange={this.onChange}
          />
          <button
            type="submit"
            className="btn btn-success"
            onClick={this.onAddTodo}
          >
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  addTodo
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
