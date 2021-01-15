import React from 'react';
import Delete from './icons/DeleteIcon';

const Task = ({ task }) => {
  return (
    <div className='task'>
      <input type='checkbox' className='task__checkbox' />
      <div className='task__input u-text-input' contenteditable='true'>
        {task}
      </div>
      <Delete />
    </div>
  );
};

export default Task;
