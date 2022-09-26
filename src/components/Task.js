import React from 'react';

class Task extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      mode: 'view',
    };

    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode() {
    this.setState({
      mode: (this.state.mode === 'view') ? 'edit' : 'view',
    });
  }

  render() {
    const { task, id } = this.props.task;
    return (
      <div>
        {task}
        <button onClick={this.toggleMode}>Edit</button>
        <button onClick={() => this.props.removeTask(id)}>Remove</button>
      </div>
    );
  }
}

export default Task;