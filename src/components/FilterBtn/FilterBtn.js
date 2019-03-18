import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterTodo } from "../../actions/todoActions";

export const FilterBtn = props => {
  const { children, filterTodo, active } = props;

  return (
    <button
      onClick={filterTodo}
      type="button"
      className="btn btn-outline-secondary mr-2 ml-2"
      disabled={active}
    >
      {children}
    </button>
  );
};

FilterBtn.propTypes = {
  children: PropTypes.string.isRequired,
  filterTodo: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filterTodo
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  filterTodo: () => dispatch(filterTodo(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBtn);
