import React from 'react'

class Task extends React.Component {

  constructor(){
    super()

    this.state = {
      taskName: '',
      taskPriority: '',
      listId: ''
    }
  }

  handleInput = (e) => this.setState({ [e.target.name]: e.target.value })

  handleSelect = (e) => this.setState({ [e.target.name]: parseInt(e.target.value) })

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createTask(this.state.taskName, this.state.taskPriority, this.state.listId)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <select id="listDropdown" name="listId" onChange={this.handleSelect}>
          <option defaultValue="default">Choose List</option>
          {this.props.addOption()}
        </select>
          <label>Add a new task:</label>
          <input name="taskName" value={this.state.taskName} onChange={this.handleInput} />
          <label>Note the priority</label>
          <select id="priorityDropdown" name="taskPriority" onChange={this.handleSelect}>
            <option value="1">Do it now (urgent &amp; important)</option>
            <option value="2">Schedule a time to do it (not urgent &amp; important)</option>
            <option value="3">Delegate - who can do it for you? (urgent &amp; not important)</option>
            <option value="4">Eliminate (not urgent &amp; not important)</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Task
