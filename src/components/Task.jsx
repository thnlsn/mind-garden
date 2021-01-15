import React from 'react';
import Delete from './icons/DeleteIcon';
import Check from './icons/CheckIcon';

const Task = ({
  task,
  handleTaskUpdate,
  handleTaskCheck,
  handleTaskDelete,
}) => {
  /*   const [checked, setChecked] = useState(task.checked) */

  return (
    <div className='task'>
      <div className={'task__checkbox'}>
        <Check
          handleTaskCheck={handleTaskCheck}
          checked={task.checked}
          id={task.id}
        />
      </div>
      {/*       <input
        type='checkbox'
        defaultChecked={task.checked}
        className='task__checkbox'
        onInput={(e) => handleTaskCheck(e, task.id)}
      /> */}
      <div
        className='task__input u-text-input'
        spellCheck='false'
        suppressContentEditableWarning={true}
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
