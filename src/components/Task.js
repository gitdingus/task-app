import React from 'react';

class Task extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      mode: 'view',
      task: this.props.task.task,
    };

    this.toggleMode = this.toggleMode.bind(this);
    this.valueChanged = this.valueChanged.bind(this);
  }

  toggleMode() {
    this.setState({
      mode: (this.state.mode === 'view') ? 'edit' : 'view',
    });
  }

  valueChanged(e){
    this.setState({
      task: e.target.value,
    })
  }

  render() {
    const { task, id } = this.props.task;

    const ViewMode = (
      <div>
        {task}
        <button onClick={this.toggleMode}>Edit</button>
        <button onClick={() => this.props.removeTask(id)}>Remove</button>
      </div>
    );

    const EditMode = (
      <div>
        <input value={this.state.task} onChange={this.valueChanged} />
        <button onClick={() => {
          this.props.editTask(id, this.state.task);
          this.toggleMode();
        }}>
          Save
        </button>
        <button onClick={() => {
          this.toggleMode();
          this.setState({
            task: task,
          });
        }}>Cancel</button>
      </div>
    );


    if (this.state.mode === 'view'){
      return ViewMode;
    } else if (this.state.mode === 'edit') {
      return EditMode;
    }

  }
}

export default Task;