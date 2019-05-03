import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About  from './components/pages/About';

class App extends Component{

state = {
  todos:[
    { 
      id: uuid.v4(),
      title: 'take me out',
      completed: true
    },
    {
      id: uuid.v4(),
      title: 'do react',
      completed: false  
    },
    {
      id: uuid.v4(),
      title: 'finish reat',
      completed: false
    }
  ]
}

markComplete = (id) => {
this.setState({ todos: this.state.todos.map(todo => {
  if(todo.id=== id){
        todo.completed = !todo.completed
  }
return todo;

}) });

}


delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id
    !==id )] });
}


addTodo = (title) => {
  const newTodo ={
    id: uuid.v4(),
    title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo] });
}


  render(){
    
    return (

      <Router>

      <div className="App">
      <div className="container">

      <Header/>

      <Route exact path="/" render={props => (
        
        <React.Fragment>
        <AddTodo  addTodo={this.addTodo} />
        <Todos todos={this.state.todos}   
        markComplete={this.markComplete} delTodo={this.delTodo} />
        </React.Fragment>
      )}/>


        <Route path="/about" component={About} />
    

      </div>
      </div>
      </Router>
    );
  }
} 

export default App;
