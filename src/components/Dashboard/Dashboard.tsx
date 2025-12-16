// import './App.css';
import { TaskForm } from '../TaskForm/TaskForm';
// import { TaskItem } from '../TaskList/TaskItem';
 import { TaskFilter } from '../TaskFilter/TaskFilter';
import type {Task,Filters,  TaskFormInput  } from '../../types';

import  React, {useState, useEffect} from 'react'


//have to add state

export const Dashboard = () => {
const [tasks, setTasks] = useState<Task[]>([]);
const [filters, setFilters] = useState<Filters>({
  status:"all-status",
  priority: "all-priority"
});

useEffect(()=> {
  setTasks(loadTasks());
}, []);
useEffect(()=> {
  saveTasks(tasks);
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





  return (
    <div>

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
               <button onClick={() => deleteTask(task.id)}>Delete</button>

               
    </div>
  ))}
    </div>
    </div>
  );

};