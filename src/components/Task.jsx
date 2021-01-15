import React from 'react';
import Delete from './icons/DeleteIcon';

const Task = ({ task, handleChange }) => {
  return (
    <div className='task'>
      <input type='checkbox' className='task__checkbox' />
      <div
        className='task__input u-text-input'
        spellCheck='false'
        contentEditable='true'
        onInput={(e) => handleChange(e)}
      >
        {task.task}
      </div>
      <Delete />
    </div>
  );
};

export default Task;
