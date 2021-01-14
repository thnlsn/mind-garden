import React from 'react';
import './css/style.css';

function App() {
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
        <div className='question'>
          <h4 className='heading-secondary'>I am grateful for...</h4>
          <div class='question__input' contenteditable='true'></div>
        </div>
      </main>
    </div>
  );
}

export default App;
