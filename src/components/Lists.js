import React from 'react'


// Presentational Component
//just loop through the lists and render out the lists and tasks.
//TODO delete a list, delete a task
//TODO reset inputs to blank after submission
//TODO validate - do not push to state if listName or task description is blank
class Lists extends React.Component {

  render() {
    let lists = this.props.lists.map(listObj => {
      let tasks = listObj.tasks.map((task, id) => {
        return <ul key={id}>{task.name} | {task.priority}</ul>
      })
        return <div>List: {listObj.name} | Tasks: {tasks} </div>
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
