import { useState } from "react";

function AddTask({onTaskAdd}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
        <div className="space-y-4 p-6 bg-indigo-100 rounded-md flex flex-col">
            
            <input className="border border-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 px-4 py-2 rounded-md" 
            type="text" 
            placeholder="Type the task title"
            onChange={(event) => setTitle(event.target.value)}/>

            <input className="border border-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 px-4 py-2 rounded-md" 
            type="text" 
            placeholder="Type the task description"
            onChange={(event) => setDescription(event.target.value)}/>
           
            <button onClick={() => {
            
            if(!title.trim() || !description.trim()) {
                return alert("You can't add empty tasks")
            }
            onTaskAdd(title, description)}}
            className="w-3/4 mx-auto bg-indigo-600 p-2 rounded-md text-white hover:scale-105 transition-all" >
                Add
            </button>
            
        </div>
    );
}

export default AddTask;