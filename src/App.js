import React from 'react';
import './App.css';
import Header from './components/Header'
import ToDoContainer from './components/ToDoContainer'


class App extends React.Component{

  state = {
    todos: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/todos')
      .then(r => r.json())
      .then(rObj => {
        this.setState({
          todos: rObj
        })
      })
  }

  render(){
    // console.log(this.state)
    return (
      <div className="App">
        <Header/>
        <ToDoContainer/>
      </div>
    );
  }
}

export default App;
