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

  //set the list that the task belongs to automatically,
  //based on the most recent list entered.  UX decision.
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
    return this.state.lists.map(function(list){
      return <option key={list.id} value={list.id} selected>{list.name}</option>
    })
  }

  deleteList = (listId) => {
  const lists = this.state.lists
  let arrayOfIds =  this.state.lists.map((list) => list.id)
  let varIndex = arrayOfIds.indexOf(listId)
  delete lists[varIndex]
  this.setState({
      lists: lists
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
    console.log(this.state)
    console.log(this.state.lists)
    return (
      <div>
        <List createListObject={this.createList} />
        <Options addOption={this.addToDropdown} handleSelect={this.handleSelect}  />
        <Task  createTask={this.createTask} belongsToWhichList={this.state.listId}/>
        <Lists lists={this.state.lists} deletingList={this.deleteList}/>
      </div>
    );
  }
}

export default App;
