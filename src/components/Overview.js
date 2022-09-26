import React from 'react';
import Task from './Task.js';

export default function Overview(props){
  const { list } = props;
  const listElements = list.map((item) => {
    return (
      <li key={item.id}>
        <Task task={item} removeTask={props.removeTask} editTask={props.editTask} />
      </li>
    )
  });

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>{listElements}</ul>
    </div>
  );
}