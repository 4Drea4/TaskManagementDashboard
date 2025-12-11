import  React  from 'react';
// import './App.css';
import { TaskForm } from './components/TaskForm/TaskForm';
// import { TaskItem } from './components/TaskList/TaskItem';
import { TaskFilter } from './components/TaskFilter/TaskFilter';
import type { TaskFormInput } from '../../types';

export const Dashboard: React.FC = () => {
 const addTask = (formText: TaskFormInput) => {
    
 };

  return (
    <>
    <h1>Task Dashboard</h1>

    <TaskFilter/>
     <TaskForm
     placeholderTitle="Whats your task?"
     placeholderDescription="Tell me what your task is about!"
    onSubmit={addTask}
     />

     <TaskItem/>
     
    </>
  )
}
