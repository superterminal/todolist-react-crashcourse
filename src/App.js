import React, { Component } from 'react';
import uuid from 'uuid';

import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';

import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'play video games',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'do your homework',
        completed: false
      }
    ]
  }

  
  markComplete = (id) => {
      this.setState({ todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })});
  }

  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => 
      todo.id !== id)
    ]});
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} 
          markComplete={this.markComplete} 
          deleteTodo={this.deleteTodo}/>
        </div>
      </div>
    )
  }
}

export default App;
