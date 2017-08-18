import React, { Component } from 'react';
import './App.css';
import List from './components/List'
import Task from './components/Task'
import Lists from './components/Lists'
import Options from './components/Options'

let listId = 0
let taskId = 0

class App extends Component {

  constructor(){
    super()

    this.state = {
      lists: [],
      tasks: [],
      listId: 0
    }
  }

  createList = (listName) => {
    let listObject = {
      id: listId++,
      name: listName,
      tasks: [],
    }
    this.setState({
      lists: [...this.state.lists, listObject],
      listId: listObject.id
    })
  }

  addToDropdown = () => {
    return this.state.lists.map( list => {
      return <option key={list.id} value={list.id} selected>{list.name}</option>
    })
  }

  deleteList = (e) => {
    const lists = this.state.lists
    let listID = parseInt(e.target.dataset.id)
    let indexOfList = lists.findIndex( l => l.id === listID )
    this.setState({
      lists: [...lists.slice(0, indexOfList), ...lists.slice(indexOfList + 1)]
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

  //set the list that the task belongs to after a select
  handleSelect = (e) => this.setState({ [e.target.name]: parseInt(e.target.value) })

  render() {
    return (
      <div>
        <List createListObject={this.createList} />
        <Options addOption={this.addToDropdown} handleSelect={this.handleSelect}  />
        <Task  createTask={this.createTask} belongsToWhichList={this.state.listId}/>
        <Lists lists={this.state.lists} deleteList={this.deleteList} />
      </div>
    );
  }
}

export default App;
