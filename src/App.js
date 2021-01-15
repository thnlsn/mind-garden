import React, { useEffect, useState } from 'react';
import './css/style.css';

import Task from './components/Task';
import Reset from './components/icons/ResetIcon';

function App() {
  const [grateful, setGrateful] = useState(
    'Ullam autem voluptatem fuga rem corporis.'
  );
  const [goal, setGoal] = useState(
    'Harum consequatur eum itaque dolores officia.'
  );
  const [tasks, setTasks] = useState([
    'Code for 3 hours',
    'Eat under 1500 calories',
    'Walk 10,000 steps',
  ]);
  const [notes, setNotes] = useState(
    'Aspernatur maxime dolor itaque, deserunt ullam cum sed consequuntur impedit. Dignissimos ex eius consequuntur unde aut quidem doloremque!'
  );

  return (
    <div className='dashboard'>
      <header className='header'>
        <h1 className='heading-primary'>Mind Garden</h1>
        <div className='sub-heading'>
          Take a moment to plant the seeds for today's success.
          <a href='#' className='link'>
            Learn more &rarr;
          </a>
        </div>
        <Reset />
      </header>
      <main className='planner'>
        <div className='question u-shadow'>
          <h4 className='heading-secondary'>I am grateful for...</h4>
          <div
            class='question__input question__input--grateful u-text-input'
            contenteditable='true'
          >
            {grateful}
          </div>
        </div>
        <div className='question u-shadow'>
          <h4 className='heading-secondary'>My goal for today is...</h4>
          <div
            class='question__input question__input--goal u-text-input'
            contenteditable='true'
          >
            {goal}
          </div>
        </div>
        <div className='content-box content-box--tasks u-shadow'>
          <div className='sub-heading sub-heading--bold'>Tasks</div>
          {tasks.map((task, index) => (
            <Task task={task} />
          ))}
        </div>
        <div className='content-box notes u-shadow'>
          <div className='sub-heading sub-heading--bold'>Notes</div>
          <div class='notes__input u-text-input' contenteditable='true'>
            {notes}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
