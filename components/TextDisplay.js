import React, { Component } from 'react';

class TextDisplay extends Component {
  removeOneLetter(){
    this.props.deleteLetter();
  }

  render(){
    return <div>
      <div>{this.props.text}</div>
      <button onClick={this.removeOneLetter.bind(this)}>Delete One Letter</button>
    </div>
  }
}

export default TextDisplay;
