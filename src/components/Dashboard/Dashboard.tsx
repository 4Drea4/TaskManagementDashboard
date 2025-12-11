import { useState } from 'react'
import './App.css'
import { TaskForm } from './components/TaskForm/TaskForm'
import { TaskItem } from './components/TaskList/TaskItem'
import { TaskFilter } from './components/TaskFilter/TaskFilter'


export default function updateFunction() {
 

  return (
    <>
    <TaskFilter/>
     <TaskForm/>

     <TaskItem/>
     
    </>
  )
}

export default App
