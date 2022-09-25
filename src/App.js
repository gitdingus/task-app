import React from 'react';
import Overview from './components/Overview';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: [],
      inputValue: '',
    };

    this.addTask = this.addTask.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
    this.cancelSubmit = this.cancelSubmit.bind(this);
  }

  addTask() {
    this.setState((prevState) => {
      const { tasks } = prevState;
      const newTask = {};

      newTask.id = tasks.length + 1;
      newTask.task = this.state.inputValue;

      tasks.push(newTask);
      return {
        tasks,
      }
    });
  }

  inputChanged(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  cancelSubmit(e) {
    e.preventDefault();

    this.setState({
      inputValue: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.cancelSubmit} className="task-input-form">
          <label htmlFor="task-input">New Task</label>
          <input type="text" id="task-input" value={this.state.inputValue} onChange={this.inputChanged} />
          <button type="submit" onClick={this.addTask}>Add task</button>
        </form>
        <Overview list={this.state.tasks} />
      </div>
    )
  }
}

export default App;