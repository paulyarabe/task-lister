import React from 'react'

class Lists extends React.Component {

  render() {

    let lists = this.props.lists.map(list => {
      let tasks = list.tasks.map((task, id) => {
        return <ul key={id}>{task.name} | {task.priority} <button>See ya!</button></ul>
      })
        return <div>List: {list.name} <button onClick={this.props.deleteList} data-id={list.id}>Bye</button>|  Tasks: {tasks} </div>
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
