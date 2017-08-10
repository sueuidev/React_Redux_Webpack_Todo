import React, { Component } from 'react';
import TextDisplay from './TextDisplay';

class TextInput extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      inputText: 'initial Text'
    };
  }

  updateText(e){
    this.setState({
      inputText: e.target.value
    });
  }

  render(){
    return (
      <div>
        <input
          type="text"
          placeholder="This is test"
          value={this.state.inputText}
          onChange={this.updateText.bind(this)}
        />
        <TextDisplay text={this.state.inputText} />
      </div>
    )
  }
}

export default TextInput;

// <input />
// <button onClick={this.displayMsg}>Submit</button>
// <div id='displayTxt'></div>
