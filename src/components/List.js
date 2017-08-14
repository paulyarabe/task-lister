import React from 'react'


class List extends React.Component {

  constructor(){
    super()
    this.state = {
      listNameInput: ''
    }
  }

  handleChange = (e) => {
    let listNameInput = e.target.value
    this.setState ({
      listNameInput: listNameInput
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createListObject(this.state.listNameInput)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.listName} onChange={this.handleChange} />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default List
