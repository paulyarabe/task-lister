import React from 'react'

class Task extends React.Component {

  constructor(){
    super()
  }

  handleInput = (e) => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    let taskNameInput = document.getElementById('task-name-input').value
    let taskPriorityDropdown = document.getElementById('priorityDropdown').value
    this.props.createTask(taskNameInput, taskPriorityDropdown, this.props.belongsToWhichList)
    document.getElementById('task-name-input').value = ""
    document.getElementById('priorityDropdown').value = ""
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="task-form">
        <label>Add a new task:</label>
        <input placeholder="Enter Task" name="taskName" id="task-name-input" onChange={this.handleInput} required/>
        <label>Note the priority</label>
        <select id="priorityDropdown" name="taskPriority" onChange={this.handleSelect} required>
          <option value="">Choose a priority</option>
          <option value="1">Do it now (urgent &amp; important)</option>
          <option value="2">Schedule a time to do it (not urgent &amp; important)</option>
          <option value="3">Delegate - who can do it for you? (urgent &amp; not important)</option>
          <option value="4">Eliminate (not urgent &amp; not important)</option>
        </select>
        <input type="submit" />
      </form>
    );
  }
}

export default Task
