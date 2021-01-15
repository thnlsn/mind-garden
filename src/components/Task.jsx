import React from 'react';
import Delete from './icons/DeleteIcon';

const Task = ({
  task,
  handleTaskUpdate,
  handleTaskCheck,
  handleTaskDelete,
}) => {
  return (
    <div className='task'>
      <input
        type='checkbox'
        defaultChecked={task.checked}
        className='task__checkbox'
        onInput={(e) => handleTaskCheck(e, task.id)}
      />
      <div
        className='task__input u-text-input'
        spellCheck='false'
        contentEditable='true'
        onInput={(e) => handleTaskUpdate(e, task.id)}
      >
        {task.task}
      </div>
      <Delete handleTaskDelete={handleTaskDelete} id={task.id} />
    </div>
  );
};

export default Task;
