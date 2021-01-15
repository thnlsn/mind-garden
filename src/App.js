import React, { useEffect, useState } from 'react';
import './css/style.css';

import Header from './components/Header';
import Question from './components/Question';
import Tasks from './components/Tasks';
import Notes from './components/Notes';

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

  const clearData = () => {
    localStorage.clear();
    console.log('CLEARED LOCAL STORAGE');
  };

  const handleChange = (e) => {
    console.log(e.currentTarget.textContent);
    console.log('UPDATE LOCAL STORAGE');
  };

  return (
    <div className='dashboard'>
      <Header
        title={'Mind Garden'}
        subtitle={"Take a moment to plant the seeds for today's success."}
        linkText={'Learn more'}
        linkTarget={'#'}
        func={clearData}
      />
      <main className='planner'>
        <Question
          question={'I am grateful for...'}
          content={grateful}
          func={handleChange}
        />
        <Question
          question={'My goal for today is...'}
          content={goal}
          func={handleChange}
        />
        <Tasks tasks={tasks} title='Tasks' />
        <Notes notes={notes} title='Notes' />
      </main>
    </div>
  );
}

export default App;
