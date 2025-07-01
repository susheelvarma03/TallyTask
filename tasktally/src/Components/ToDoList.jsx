import {useState} from "react";

function ToDoList() {
    const [task,setTask]= useState('');
    const [tasks, setTasks] = useState([]);

    const addTask=()=> {
        if (task.trim() === '') return;
        setTasks([...tasks, task]);
        setTask('')
    };

        const deleteTask = (index) => {
            const updatedTasks = tasks.filter((_, i) => i !== index);
            setTasks(updatedTasks);
        };


    return(
        <div className="todo">
            <h2 className="sub">To-Do List</h2>
            <input
                type="text"
                value={task}
                placeholder="Enter a task"
                onChange={(e)=>setTask(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((t, index)=>(
                    <li key={{index}}>{t}
                        <button onClick={()=> deleteTask(index)}>X</button></li>
                ))}

            </ul>
        </div>
    );
}
export default ToDoList;