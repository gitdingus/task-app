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
  }

  addTask(e) {
    e.preventDefault();

    this.setState((prevState) => {
      const newTask = {};

      newTask.id = prevState.tasks.length + 1;
      newTask.task = this.state.inputValue;

      return {
        tasks: prevState.tasks.concat([newTask]),
        inputValue: '',
      };
    });
  }

  inputChanged(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addTask} className="task-input-form">
          <label htmlFor="task-input">New Task</label>
          <input type="text" id="task-input" value={this.state.inputValue} onChange={this.inputChanged} />
          <button type="submit">Add task</button>
        </form>
        <Overview list={this.state.tasks} />
      </div>
    )
  }
}

export default App;