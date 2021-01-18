import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/style.css';

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

  const setAllState = () => {
    // Store each piece of local data into a const
    const grateful = JSON.parse(localStorage.getItem('grateful'));
    const goal = JSON.parse(localStorage.getItem('goal'));
    const tasks = JSON.parse(localStorage.getItem('tasks')); // Current tasks
    const notes = JSON.parse(localStorage.getItem('notes'));

    // If there is data, set state to reflect that, otherwise allow everything to be empty and set localStorage state to correct empty values so that inputs have a baseline to add to
    grateful
      ? setGrateful(grateful)
      : localStorage.setItem('grateful', JSON.stringify(''));
    goal ? setGoal(goal) : localStorage.setItem('goal', JSON.stringify(''));
    tasks ? setTasks(tasks) : localStorage.setItem('tasks', JSON.stringify([]));
    notes ? setNotes(notes) : localStorage.setItem('notes', JSON.stringify(''));
  };

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
  };

  const handleTaskUpdate = (e, id) => {
    const indexToUpdate = findIndex(id);
    const tasks = JSON.parse(localStorage.getItem('tasks')); // Current tasks
    tasks[indexToUpdate].task = `${e.currentTarget.innerHTML}`;

    // Set both state and local storage to the new value
    localStorage.setItem('tasks', JSON.stringify(tasks));
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

    localStorage.setItem('tasks', JSON.stringify(tasks));

    setTasks(tasks);
  };

  const handleTaskDelete = (id) => {
    const indexToRemove = findIndex(id);
    const tasks = JSON.parse(localStorage.getItem('tasks')); // Current tasks
    const newTasks = tasks
      .slice(0, indexToRemove)
      .concat(tasks.slice(indexToRemove + 1, tasks.length));

    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  useEffect(() => {
    setAllState();

    /*     localStorage.setItem('grateful', JSON.stringify(''));
    localStorage.setItem('goal', JSON.stringify(''));
    localStorage.setItem('tasks', JSON.stringify([]));
    localStorage.setItem('notes', JSON.stringify('')); */
  }, []);

  const home = '/mind-garden';
  const about = '/mind-garden/about';

  return (
    <div className='dashboard'>
      <Router>
        <Switch>
          <Route exact path={home}>
            <Header
              title={'Mind Garden'}
              subtitle={"Take a moment to plant the seeds for today's success."}
              linkText={'Learn more'}
              homeLink={home}
              aboutLink={about}
              clearData={clearData}
              setAllState={setAllState}
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
          <Route path={about}>
            <About
              title={'Mind Garden'}
              subtitle={'A little gratitude can go a long way.'}
              linkText={'Back'}
              homeLink={home}
              linkedIn={'https://www.linkedin.com/in/thnlsn/'}
              gitHub={'https://github.com/thnlsn/mind-garden'}
            />
          </Route>
        </Switch>
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
