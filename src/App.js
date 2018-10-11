import React, { Component } from 'react';
import Counter from './component/counter'
import AddTodo from './contains/AddTodo'
import TodoList from './component/TodoList'
import VisibleTodoList from './contains/VisibleTodoList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <AddTodo/>
       <VisibleTodoList/>
       <Counter/>
      </div>
    );
  }
}

export default App;
