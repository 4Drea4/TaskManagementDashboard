import { useState } from 'react'
import './App.css'
import { TaskForm } from './components/TaskForm/TaskForm'
import { TaskItem } from './components/TaskList/TaskItem'
import { TaskFilter } from './components/TaskFilter/TaskFilter'
function App() {
 

  return (
    <>
    <TaskFilter/>
     <TaskForm/>

     <TaskItem/>
     
    </>
  )
}

export default App
