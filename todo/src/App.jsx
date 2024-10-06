import React, { useState } from 'react';

import AddTask from './components/AddTask.jsx';
import Tasks from './components/Tasks.jsx';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'To Study React',
      description: 'Study React to learn how to create web applications',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Work Meeting',
      description: 'Meeting with the team to discuss the project',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Take a shower',
      description: 'Take a shower to relax',
      isCompleted: false,
    }
  ]);

  function onTaskClicked(taskId) {
    const newTasks = tasks.map(task => {
      if (tasks.id === taskId) {
      
        // Tarefa precisa ser atualizada
        return {
          ...task,
          isCompleted: !task.isCompleted
        }

        // Tarefa não precisa ser atualizada
        return task;
      }
    });

    setTasks(newTasks);
  }
  
  return (
    <div className="w-screen h-screen bg-zinc-900 flex justify-center p-6">

      <div className="w-[500px]">
        <h1 className="text-slate-100 font-bold text-center text-3xl">Task Manager</h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClicked={onTaskClicked}/>
      </div>

    </div>
  );
}

export default App
