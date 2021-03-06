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
      <div
        className={`task__input u-text-input ${
          task.checked === true ? 'u-strikethrough' : ''
        }`}
        spellCheck='false'
        suppressContentEditableWarning={true}
        contentEditable={!task.checked}
        onInput={(e) => handleTaskUpdate(e, task.id)}
        dangerouslySetInnerHTML={{ __html: task.task }}
      >
        {/* {task.task} */}
      </div>
      <Delete handleTaskDelete={handleTaskDelete} id={task.id} />
    </div>
  );
};

export default Task;
