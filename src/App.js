import React, { Component } from 'react';
import './App.css';
import List from './components/List'
import Task from './components/Task'
import Lists from './components/Lists'

let listId = 0
let taskId = 0

class App extends Component {

  constructor(){
    super()

    this.state = {
      lists: [],
      tasks: []
    }
  }

  createList = (listName) => {
    let listObject = {
      id: listId++,
      name: listName,
      tasks: [],
    }
    this.setState({
      lists: [...this.state.lists, listObject]
    })
  }

  addToDropdown = () => {
    return this.state.lists.map(function(list){
      return <option key={list.id} value={list.id}>{list.name}</option>
    })
  }

  createTask = (name, priority, listId) => {
    let taskObject = {
      id: taskId++,
      name: name,
      priority: priority,
      listId: listId
    }
    this.state.lists[listId].tasks.push(taskObject)
    this.setState({
      tasks: [...this.state.tasks, taskObject]
    })
  }

  render() {
    return (
      <div>
        <List createListObject={this.createList} />
        <Task addOption={this.addToDropdown} createTask={this.createTask}/>
        <Lists lists={this.state.lists}/>
      </div>
    );
  }
}

export default App;
