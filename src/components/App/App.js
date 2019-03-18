import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../../store";

import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";
import Footer from "../Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <AddTodo />
          <TodoList />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
