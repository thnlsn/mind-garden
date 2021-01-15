import React from 'react';
import Task from './Task';

import Add from './icons/AddIcon';

const Tasks = ({
  title,
  tasks,
  handleTaskUpdate,
  handleTaskCheck,
  handleAdd,
  handleTaskDelete,
}) => {
  return (
    <div className='content-box tasks u-shadow'>
      <div className='sub-heading sub-heading--bold'>
        {title}
        <Add handleAdd={handleAdd} />
      </div>
      {tasks.map((task, index) => (
        <Task
          task={task}
          key={index}
          handleTaskUpdate={handleTaskUpdate}
          handleTaskCheck={handleTaskCheck}
          handleTaskDelete={handleTaskDelete}
        />
      ))}
    </div>
  );
};

export default Tasks;
