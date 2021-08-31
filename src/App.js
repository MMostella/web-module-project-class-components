import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const taskList = []

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskList: JSON.parse(window.localStorage.getItem('tasks'))
    }
  }

  handleToggle = (id) => {
    this.setState({
      ...this.state,
      taskList: this.state.taskList.map((item) => {
        if (item.id === id) {
          return({
            ...item,
            complete: !item.complete
          });
        } else {
          return(item)
        }
      })
    })
  }

  handleAdd = (task) => {
    const newTask = {
      name: task,
      id: Date.now(),
      complete: false
    }
    this.setState({
      ...this.state,
      taskList: [...this.state.taskList, newTask]
    })
    window.localStorage.setItem('tasks', JSON.stringify([...this.state.taskList, newTask]))
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      taskList: this.state.taskList.filter((task) => {
        return(task.complete === false);
      })
    })
    window.localStorage.setItem('tasks', JSON.stringify([...this.state.taskList.filter((task) => {
      return(task.complete === false);
    })]))
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>ToDo List</h1>
          <TodoForm handleAdd={this.handleAdd}/>
        </div>
        <TodoList handleClear={this.handleClear} handleToggle={this.handleToggle} taskList={this.state.taskList} />
      </div>
    );
  }
}

export default App;
