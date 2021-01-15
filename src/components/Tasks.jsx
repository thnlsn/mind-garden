import React from 'react';
import Task from './Task';

const Tasks = ({ title, tasks, func }) => {
  return (
    <div className='content-box tasks u-shadow'>
      <div className='sub-heading sub-heading--bold'>{title}</div>
      {tasks.map((task, index) => (
        <Task task={task} key={index} func={func} />
      ))}
    </div>
  );
};

export default Tasks;
