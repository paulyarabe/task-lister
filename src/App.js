import React, { Component } from 'react';
import './App.css';
import List from './components/List'

let id = 0

class App extends Component {

  constructor(){
    super()

    this.state = {
      lists: []
    }
  }

  createList = (name) => {
    let listObject = {
      id: id++,
      name: name,
      tasks: [],
    }
    this.setState({
      lists: [...this.state.lists, listObject]
    })
  }

  render() {
    console.log(this.state.lists)
    return (
      <div>
        <List createListObject={this.createList}/>
      </div>
    );
  }
}

export default App;
