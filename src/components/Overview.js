import React from 'react';

export default function Overview(props){
  const { list } = props;
  const listElements = list.map((item) => {
    return (
      <li key={item.id}>{item.task}</li>
    )
  });

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>{listElements}</ul>
    </div>
  );
}