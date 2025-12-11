import  React  from 'react';
// import './App.css';
import { TaskForm } from '../TaskForm/TaskForm';
// import { TaskItem } from '../TaskList/TaskItem';
// import { TaskFilter } from '../TaskFilter/TaskFilter';
import type { TaskFormInput  } from '../../types';

export const Dashboard = () => {
 const addTask = (formText: TaskFormInput) => {
    alert("Hey Time to get your life together, lets go!")
 };

  return (
    <>
    <h1>Task Dashboard</h1>

    {/* <TaskFilter/> */}
     <TaskForm
     placeholderTitle="Whats your task?"
     placeholderDescription="Tell me what your task is about!"
    onSubmit={addTask}
     />

  
     
    </>
  )
}
