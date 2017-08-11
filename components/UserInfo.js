import React, { Component } from 'react'

class UserInfo extends Component {
  handleNewId(){
    this.props.createNewUserId();
  }

  render() {
    //console.log(this.props);
    return (
      <li>
        <span>{this.props.user.id}: {this.props.user.username}</span>
        <button onClick={this.handleNewId.bind(this)}>Update with random ID</button>
      </li>
    )
  }

}

export default UserInfo
