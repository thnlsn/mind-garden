import React from 'react';
import Task from './Task';

import Add from './icons/AddIcon';

const Tasks = ({ title, tasks, handleChange, handleAdd }) => {
  return (
    <div className='content-box tasks u-shadow'>
      <div className='sub-heading sub-heading--bold'>
        {title}
        <Add handleAdd={handleAdd} />
      </div>
      {tasks.map((task, index) => (
        <Task task={task} key={index} handleChange={handleChange} />
      ))}
    </div>
  );
};

export default Tasks;
