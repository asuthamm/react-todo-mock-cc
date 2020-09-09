import React, { Component } from 'react';

export default class NewToDoForm extends Component {

  state = {
    title: '',
    completed: false
  }
  handleOnChange = (e) => {
    // console.log(e.target.name)
    this.setState({ 
      [e.target.name]:  e.target.value
    }, () => {
      // this.props.handleNewTodo(this.state.title) 
    })
     
  }
  handleFormSubmit = (e) => {
    e.preventDefault()
    this.props.handleNewTodo(this.state) 
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleFormSubmit} className="ui form">
            <h1>New ToDo</h1>
            <div className="field">
                <label>Title</label>
                <input onChange={this.handleOnChange} value={this.state.title}type="text" name="title" placeholder="Title"/>
            </div>
            <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}