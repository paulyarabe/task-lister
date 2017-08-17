import React from 'react'

//TODO delete a list, delete a task
//TODO reset inputs to blank after submission

class Lists extends React.Component {

  getListItem = (e) => this.props.deletingList(e.target.dataset.id)
  render() {

    let lists = this.props.lists.map(listObj => {
      let tasks = listObj.tasks.map((task, id) => {
        return <ul key={id}>{task.name} | {task.priority} <button>Delete Task</button></ul>
      })
        return <div>List: {listObj.name} <button onClick={this.getListItem} data-id={listObj.id} >Delete List</button>|  Tasks: {tasks} </div>
    })


    return (
      <div>
        <h3>Your Lists and Tasks:</h3>
        { lists }
      </div>
    );
  }
}

export default Lists
