import React, { Component } from 'react'
import actions from '../redux/actions'

class TodoItem extends Component{
  handleComplete(){
    this.props.dispatch(actions.completeTodo(this.props.todo.id))
  }

  handleDelete(){
    this.props.dispatch(actions.deleteTodo(this.props.todo.id))
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
