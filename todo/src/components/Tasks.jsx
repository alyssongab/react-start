
function Tasks(props) {
    return (
        
        <ul className="mt-5 space-y-4 p-6 bg-slate-50 rounded-md">
            {props.tasks.map((task) => 
            <li key={task.id} className="flex gap-2"> 
                <button onClick={() => props.onTaskClicked(task.id)} className="bg-slate-300 p-2 rounded-md w-full text-center">
                    {task.title}
                    {task.isCompleted ? " Completed" : "Not completed"}
                 </button>
                <button className="bg-slate-300 p-2 rounded-md hover:scale-105">Details</button>
            </li>
            )}

        </ul>

    );
}

export default Tasks;