// import './App.css';
import { TaskForm } from '../TaskForm/TaskForm';
 import { TaskFilter } from '../TaskFilter/TaskFilter';
import type {Task,Filters,  TaskFormInput  } from '../../types';

import  {useState, useEffect} from 'react'


//have to add state

export const Dashboard = () => {
const [tasks, setTasks] = useState<Task[]>([]);
const [filters, setFilters] = useState<Filters>({
  status:"all-status",
  priority: "all-priority"
});

useEffect(()=>{
  const saveTasks =localStorage.getItem("tasks");
  if (saveTasks){
    setTasks(JSON.parse(saveTasks));
  }
  
},[]);
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log("Saved");
},[tasks]);



//when taskform button is clicked
 const addTask = (formText: TaskFormInput) => {
    const taskItem: Task ={
    id: crypto.randomUUID(),        
    title: formText.title,
    description: formText.description,
    dueDate: formText.dueDate,
    status: "pending",
    priority: "high",

    };

    
//new task to the array
 setTasks((prev) => [...prev,taskItem]); 
    
};

// alert("Hey Time to get your life together, lets go!") //used this to test button

//delete task
const deleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task) =>task.id !==taskId));

};


  const filterTasks = tasks.filter((task) => {
    if (filters.status !== "all-status" && task.status !==filters.status)
       return false;
    if (filters.priority !=="all-priority" && task.priority !== filters.priority) return false;
    return true;
  }

)
const updateTaskStatus = (taskId: string, newStatus:Task["status"]) =>{
  setTasks((prev) =>
  prev.map((task) =>
    task.id === taskId ? {...task, status:newStatus} :task
  )
)
};

  return (
    <div className='mainbody'>

    <TaskFilter onFilterChange={setFilters}/>
     <TaskForm
     placeholderTitle="Whats your task?"
     placeholderDescription="Tell me what your task is about!"
    onSubmit={addTask}
     />

    <div className='tasklist'>
        {filterTasks.map((task) => (
            <div key={task.id} className='task-items'>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <p>{task.dueDate}</p>

                <label>Status</label>
                <select
                value={task.status}
                onChange={(e) =>
                  updateTaskStatus(task.id, e.target.value as Task["status"])
                }
                >
                  <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                
                </select>
               <button onClick={() => deleteTask(task.id)}>Delete</button>

               
    </div>
  ))}
    </div>
    </div>
  );

};