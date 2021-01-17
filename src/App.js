import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/style.css';

import LinkedIn from './components/icons/LinkedInIcon';
import Github from './components/icons/GithubIcon';

import About from './components/pages/About';
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
      'Are you sure you want to clear your inputs?'
    );
    if (confirmed) {
      await localStorage.setItem('tasks', JSON.stringify([]));
      await localStorage.setItem('grateful', JSON.stringify(''));
      await localStorage.setItem('goal', JSON.stringify(''));
      await localStorage.setItem('notes', JSON.stringify(''));

      windowGlobal.location.reload();
    }
  };

  const handleChange = (e, target) => {
    let text = `${e.currentTarget.innerHTML}`;

    localStorage.setItem(target, JSON.stringify(text));
    console.log('UPDATE LOCAL STORAGE');
  };

  // TASKS
  const findIndex = (id) => {
    const matchesId = (element) => element.id === id;
    return JSON.parse(localStorage.getItem('tasks')).findIndex(matchesId);
  };

  const handleAdd = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')); // Current tasks
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

  const handleTaskUpdate = (e, id) => {
    const indexToUpdate = findIndex(id);
    const tasks = JSON.parse(localStorage.getItem('tasks')); // Current tasks
    tasks[indexToUpdate].task = `${e.currentTarget.innerHTML}`;

    // Set both state and local storage to the new value
    localStorage.setItem('tasks', JSON.stringify(tasks));

    console.log('UPDATE TASK LOCAL STORAGE');
  };

  const handleTaskCheck = (id, checked) => {
    const indexToCheck = findIndex(id);
    const tasks = JSON.parse(localStorage.getItem('tasks')); // Current tasks
    /*     tasks[indexToCheck].checked === true // Is checked TRUE?
      ? (tasks[indexToCheck].checked = false) // If yes, set to FALSE
      : (tasks[indexToCheck].checked = true); // If no, set to TRUE */
    tasks[indexToCheck].checked = checked !== true; // Flip the bool value
    /*     tasks[indexToCheck].checked = e.currentTarget.checked === true; */

    // Set both state and local storage to the new value
    console.log(tasks[indexToCheck].checked);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setTasks(tasks);
    console.log(tasks[indexToCheck].checked);

    console.log('UPDATE TASK CHECKED LOCAL STORAGE');
  };

  const handleTaskDelete = (id) => {
    const indexToRemove = findIndex(id);
    const tasks = JSON.parse(localStorage.getItem('tasks')); // Current tasks
    const newTasks = tasks
      .slice(0, indexToRemove)
      .concat(tasks.slice(indexToRemove + 1, tasks.length));

    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTasks(newTasks);

    console.log('TASK DELETED FROM LOCAL STORAGE');
  };

  useEffect(() => {
    // Store each piece of local data into a const
    const grateful = JSON.parse(localStorage.getItem('grateful'));
    const goal = JSON.parse(localStorage.getItem('goal'));
    const tasks = JSON.parse(localStorage.getItem('tasks')); // Current tasks
    const notes = JSON.parse(localStorage.getItem('notes'));

    // If that data exists, set state to it, else set it to empty state
    grateful ? setGrateful(grateful) : setGrateful('');
    goal ? setGoal(goal) : setGoal('');
    tasks ? setTasks(tasks) : setTasks([]);
    notes ? setNotes(notes) : setNotes('');
  }, []);

  return (
    <div className='dashboard'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header
              title={'Mind Garden'}
              subtitle={"Take a moment to plant the seeds for today's success."}
              linkText={'Learn more'}
              linkTarget={'#'}
              clearData={clearData}
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
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
        <div className='socials'>
          <a
            href='https://www.linkedin.com/in/thnlsn/'
            target='_blank'
            className='span about__link'
          >
            <LinkedIn />
          </a>
          <a
            href='https://github.com/thnlsn/mind-garden'
            target='_blank'
            className='span about__link'
          >
            <Github />
          </a>
        </div>
      </Router>
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

/*   const targetId = (id) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')); // Current tasks
    const task = tasks.filter((task) => task.id === id);
    return task;
  }; */

/*     console.log(e.currentTarget.checked); */
