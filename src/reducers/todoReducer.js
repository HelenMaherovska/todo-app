import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  UPDATE_TODO
} from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          date: action.date,
          completed: false
        }
      ];
    }

    case TOGGLE_TODO: {
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    }

    case DELETE_TODO: {
      return state.filter(todo => todo.id !== action.id);
    }

    case UPDATE_TODO: {
      return state.map(todo => {
        return todo.id === action.todo.id
          ? {
              ...todo,
              text: action.todo.text,
              date: action.date
            }
          : todo;
      });
    }

    default:
      return state;
  }
};
