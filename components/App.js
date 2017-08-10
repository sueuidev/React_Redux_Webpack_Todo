import React, { Component } from 'react';
import TextInput from './TextInput';

class App extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div className="main-text">
        <TextInput />
      </div>
    );
  }
}

export default App;
