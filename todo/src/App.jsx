import React, { useEffect, useState } from 'react';

import AddTask from './components/AddTask.jsx';
import Tasks from './components/Tasks.jsx';

function App() {

  const [tasks, setTasks] = useState([]);

  // useEffect executa a função passada como primeiro argumento sempre que
  // o array passado como segundo argumento sofre alterações

  useEffect(() => {
    console.log("tasks alterado");
  }, [tasks]);

  function onTaskClicked(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
      
        // Tarefa precisa ser atualizada
        return {
          ...task,
          isCompleted: !task.isCompleted
        };
      }
      
        // Tarefa não precisa ser atualizada
        return task;
    });

    setTasks(newTasks);
  }
  
  function onTaskDelete(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  function onTaskAdd(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false
    }
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-zinc-900 flex justify-center p-6">

      <div className="w-[500px] space-y-4">
        <h1 className="text-slate-100 font-bold text-center text-3xl">Task Manager</h1>
        <AddTask onTaskAdd={onTaskAdd} />
        {tasks.length > 0 ? 
        ( // Se houver tarefa, exibe a lista de tarefas
          <Tasks tasks={tasks} onTaskClicked={onTaskClicked} onTaskDelete={onTaskDelete} />
        ) 
        : 
        ( // Se não houver tarefa, exibe uma mensagem
          <p className="text-slate-100 text-center">No tasks available.</p>
        )}
      </div>

    </div>
  );
}

export default App
