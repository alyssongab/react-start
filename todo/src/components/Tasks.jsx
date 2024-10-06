import { useNavigate } from "react-router-dom";

function Tasks({tasks, onTaskClicked, onTaskDelete}) {

    const query = new URLSearchParams();
    const navigate = useNavigate();

    const onSeeDetailsClick = (task) => {
        navigate(`/task?title=${task.title}&description=${task.description}`);
    }

    return (
        
        <ul className="space-y-4 p-6 bg-slate-50 rounded-md">
            {tasks.map((task) => 
            <li key={task.id} className="flex gap-2"> 
<<<<<<< HEAD
                <button onClick={() => props.onTaskClicked(task.id)} className="bg-slate-300 p-2 rounded-md w-full text-center">
                    {task.title}
                    {task.isCompleted ? "Completed" : "Not completed"}
=======
                
                <button onClick={() => onTaskClicked(task.id)} className={`bg-slate-300 p-2 rounded-md w-full text-center ${
                    task.isCompleted && 'line-through'}`}>
                    {task.title} 
                    {/* {task.isCompleted ? '✔️' : '❌'} */}
>>>>>>> 6fc5284a7d13207fed264bd58de7230297732237
                 </button>
               
                <button onClick={() => onSeeDetailsClick(task)} className="bg-slate-300 p-2 rounded-md hover:scale-105">Details</button>
                
                <button onClick={() => onTaskDelete(task.id)} className="bg-slate-300 p-2 rounded-md hover:scale-105">
                    ❌
                </button>
            </li>
            )}

        </ul>

    );
}



export default Tasks;