import React, { useEffect, useState } from 'react';
import './css/style.css';

import Header from './components/Header';
import Question from './components/Question';
import Tasks from './components/Tasks';
import Notes from './components/Notes';

const windowGlobal = typeof window !== 'undefined' && window;

function App() {
  const [grateful, setGrateful] = useState('');
  const [goal, setGoal] = useState('');
  const [tasks, setTasks] = useState([]);
  const [notes, setNotes] = useState('');

  const clearData = async () => {
    const confirmed = windowGlobal.confirm(
      'Are you sure you want to clear all the data?'
    );
    if (confirmed) {
      await localStorage.setItem('tasks', JSON.stringify([]));
      await localStorage.setItem('grateful', JSON.stringify(''));
      await localStorage.setItem('goal', JSON.stringify(''));
      await localStorage.setItem('notes', JSON.stringify(''));

      windowGlobal.location.reload();
    }
  };

  const handleAdd = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const newTasks = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 10000000),
        checked: false,
        task: '',
      },
    ];

    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTasks(newTasks);
    console.log('ADDED TASK TO LOCAL STORAGE');
  };

  const handleChange = (e, target) => {
    let text = e.currentTarget.textContent;
    localStorage.setItem(target, JSON.stringify(text));
    console.log('UPDATE LOCAL STORAGE');
  };

  // TASKS
  const targetId = (id) => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const task = tasks.filter((task) => task.id === id);
    console.log(task);
  };

  const findIndex = (id) => {
    const matchesId = (element) => element.id === id;
    return JSON.parse(localStorage.getItem('tasks')).findIndex(matchesId);
  };

  const handleTaskUpdate = (e, id) => {
    targetId(id);

    console.log(e.currentTarget.textContent);
    console.log('UPDATE TASK LOCAL STORAGE');
  };

  const handleTaskCheck = (e, id) => {
    targetId(id);
    findIndex(id);

    console.log(e.currentTarget.checked);
    console.log('UPDATE TASK CHECKED LOCAL STORAGE');
  };

  const handleTaskDelete = (id) => {
    console.log(tasks);
    const indexToRemove = findIndex(id);
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const newTasks = tasks
      .slice(0, indexToRemove)
      .concat(tasks.slice(indexToRemove + 1, tasks.length));

    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));

    console.log('TASK DELETED FROM LOCAL STORAGE');
  };

  // ADD THIS ON ENTER
  /* <div><br></div> */

  useEffect(() => {
    // Store each piece of local data into a const
    const grateful = JSON.parse(localStorage.getItem('grateful'));
    const goal = JSON.parse(localStorage.getItem('goal'));
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const notes = JSON.parse(localStorage.getItem('notes'));

    // If that data exists, set state to it, else set it to empty state
    grateful ? setGrateful(grateful) : setGrateful('');
    goal ? setGoal(goal) : setGoal('');
    tasks ? setTasks(tasks) : setTasks([]);
    notes ? setNotes(notes) : setNotes('');
  }, []);

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
          target={'grateful'}
          question={'I am grateful for...'}
          content={grateful}
          handleChange={handleChange}
        />
        <Question
          target={'goal'}
          question={'My goal for today is...'}
          content={goal}
          handleChange={handleChange}
        />
        <Tasks
          tasks={tasks}
          title='Tasks'
          handleTaskUpdate={handleTaskUpdate}
          handleTaskCheck={handleTaskCheck}
          handleAdd={handleAdd}
          handleTaskDelete={handleTaskDelete}
        />
        <Notes
          target={'notes'}
          notes={notes}
          title='Notes'
          handleChange={handleChange}
        />
      </main>
    </div>
  );
}

export default App;

/* ('Ullam autem voluptatem fuga rem corporis.');
('Harum consequatur eum itaque dolores officia.');
'Code for 3 hours',
  'Eat under 1500 calories',
  'Walk 10,000 steps',
  'Aspernatur maxime dolor itaque, deserunt ullam cum sed consequuntur impedit. Dignissimos ex eius consequuntur unde aut quidem doloremque!'; */
