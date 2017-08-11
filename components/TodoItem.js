import React, { Component } from 'react'

class TodoItem extends Component{
  handleComplete(){
    this.props.actions.completeTodo(this.props.todo.id)
  }

  handleDelete(){
    this.props.actions.deleteTodo(this.props.todo.id)
  }

  render(){
    console.log(this.props.todo)
    return <li>
    <span>{this.props.todo.text}</span>
    <button onClick={this.handleComplete.bind(this)}>Mark as completed</button>
    <button onClick={this.handleDelete.bind(this)}>Delete</button>
    </li>
  }
}

export default TodoItem
