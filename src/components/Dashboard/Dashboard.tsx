import  React  from 'react';
// import './App.css';
import { TaskForm } from '../TaskForm/TaskForm';
// import { TaskItem } from '../TaskList/TaskItem';
// import { TaskFilter } from '../TaskFilter/TaskFilter';
import type {Task,  TaskFormInput  } from '../../types';
import {useState} from 'react'

//have to add state

export const Dashboard = () => {
const [tasks, setTasks] = useState<Task[]>([]);


//when taskform button is clicked
 const addTask = (formText: TaskFormInput) => {
    const taskItem: Task ={
    id: "",        
    title: formText.title,
    description: formText.description,
    dueDate: formText.dueDate,
    status: "pending",
    priority: "high",

    };

    
//new task to the array
    setTasks((prev:any) => [...prev,taskItem]); 
};

    // alert("Hey Time to get your life together, lets go!") //used this to text button


  return (
    <div>
   

    {/* <TaskFilter/> */}
     <TaskForm
     placeholderTitle="Whats your task?"
     placeholderDescription="Tell me what your task is about!"
    onSubmit={addTask}
     />

    <div className='tasklist'>
        {tasks.map((task) => (
            <div key={task.id} className='task-items'>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <p>{task.dueDate}</p>
               
    </div>
  ))}
    </div>
    </div>
  );

};