
function Tasks({tasks, onTaskClicked, onTaskDelete}) {
    return (
        
        <ul className="space-y-4 p-6 bg-slate-50 rounded-md">
            {tasks.map((task) => 
            <li key={task.id} className="flex gap-2"> 
                
                <button onClick={() => onTaskClicked(task.id)} className={`bg-slate-300 p-2 rounded-md w-full text-center ${
                    task.isCompleted && 'line-through'}`}>
                    {task.title} 
                    {/* {task.isCompleted ? '✔️' : '❌'} */}
                 </button>
               
                <button className="bg-slate-300 p-2 rounded-md hover:scale-105">Details</button>
                
                <button onClick={() => onTaskDelete(task.id)} className="bg-slate-300 p-2 rounded-md hover:scale-105">
                    ❌
                </button>
            </li>
            )}

        </ul>

    );
}



export default Tasks;