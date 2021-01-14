import React, { useEffect, useState } from 'react';
import './css/style.css';

import Task from './components/Task';

function App() {
  const [grateful, setGrateful] = useState('');
  const [goal, setGoal] = useState('');
  const [tasks, setTasks] = useState([
    'Code for 3 hours',
    'Eat under 1500 calories',
    'Walk 10,000 steps',
  ]);
  const [notes, setNotes] = useState('');

  return (
    <div className='dashboard'>
      <header className='header'>
        <h1 className='heading-primary'>Mind Garden</h1>
        <div className='sub-heading'>
          Take a moment to plant the seeds for success.
          <a href='#' className='link'>
            Learn more &rarr;
          </a>
        </div>
      </header>
      <main className='planner'>
        <div className='question u-shadow'>
          <h4 className='heading-secondary'>I am grateful for...</h4>
          <div
            class='question__input question__input--grateful'
            contenteditable='true'
          ></div>
        </div>
        <div className='question u-shadow'>
          <h4 className='heading-secondary'>My goal for today is...</h4>
          <div
            class='question__input question__input--goal'
            contenteditable='true'
          ></div>
        </div>
        <div className='content-box content-box--tasks u-shadow'>
          <div className='sub-heading sub-heading--bold'>Tasks</div>
          {tasks.map((task, index) => (
            <Task task={task} />
          ))}
        </div>
        <div className='content-box content-box--notes u-shadow'>
          <div className='sub-heading sub-heading--bold'>Notes</div>
        </div>
      </main>
    </div>
  );
}

export default App;
