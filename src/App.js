
import './App.css';
import Task from './components/Task';

function App() {

  const tasks=[
    {id:1,task:"Task 1"},
    {id:2,task:"Task 2"},
    {id:3,task:"Task 3"},
  ];

  return (
   <div className="app">
    <Task a={tasks[0].task}/>
    <Task a={tasks[1].task}/>
    <Task a={tasks[2].task}/>
   </div>
  
  );
}

export default App;
