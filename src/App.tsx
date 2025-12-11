// import { useState } from 'react'
import './App.css';
import { Dashboard } from './components/Dashboard/Dashboard'  
import { TaskFilter } from './components/TaskFilter/TaskFilter';


export default function App() {
 

  return (
    <div>
      <div>
        <h1 className='Title'> Task Dashboard</h1>
      </div>
    <TaskFilter/>
    <Dashboard/>
   
    </div>
  )
}

