import  React  from 'react';
// import './App.css';
import { TaskForm } from '../TaskForm/TaskForm';
// import { TaskItem } from '../TaskList/TaskItem';
// import { TaskFilter } from '../TaskFilter/TaskFilter';
import type {Task,  TaskFormInput  } from '../../types';

//have to add state

export const Dashboard = () => {
const [tasks, setTasks] = useState<Task[]>([]);


//when taskform button is clicked
 const addTask = (formText: TaskFormInput) => {
    const taskItem: Task ={
    id: Date.now().toString(),        //used this from abraham1973 in codecademy
    title: formText.title,
    description: formText.description,
    dueDate: formText.dueDate,
    status: "pending",
    priority: "medium",

    };
//new task to the array
    setTasks((prev) => [...prev,newTask]); 
};

    // alert("Hey Time to get your life together, lets go!") //used this to text button
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
