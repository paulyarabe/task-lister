import React, { Component } from 'react';
import './App.css';
import List from './components/List'

class App extends Component {

  constructor(){
    super()

    this.state = {
      Lists: []
    }
  }



  render() {
    return (
      <div>
        <List />
      </div>
    );
  }
}

export default App;
