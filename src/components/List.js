import React from 'react'

class List extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    let listName = document.getElementById('list-name-input').value
    this.props.createListObject(listName)
    document.getElementById('list-name-input').value = ""
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add a new list:</label>
          <input id="list-name-input" placeholder="Enter List Name" required/>
          <button type="submit">add</button>
        </form>
      </div>
    );
  }
}

export default List
