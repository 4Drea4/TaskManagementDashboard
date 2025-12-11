import  React  from 'react';
// import './App.css';
import { TaskForm } from '../TaskForm/TaskForm';
// import { TaskItem } from '../TaskList/TaskItem';
// import { TaskFilter } from '../TaskFilter/TaskFilter';
import type {Task,  TaskFormInput  } from '../../types';


export const Dashboard = () => {
 const addTask = (formText: TaskFormInput) => {
    alert("Hey Time to get your life together, lets go!")
 };

  return (
    <>
   

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
                <p> {task.status}</p>
                <p>{task.priority}</p>
        )
    )}

    </div>
  
     
    </>
  )
}
