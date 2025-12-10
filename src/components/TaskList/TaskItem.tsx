import React from 'react';
import type {TaskItemProps, TaskStatus } from '../../types';

export const TaskItem: React.FC<TaskItemProps> =
(props) => {
    const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        const taskStatus = event.target.value as TaskStatus; 
        props.onStatusChange(props.task.id, taskStatus);}

        const handleDelete = () => {
            props.onDelete(props.task.id);
        }
    
}
return (
    <div className ="task">
        <h4>{props.task.title}</h4>
        <p> Due Date {props.task.dueDate}</p>
        <span>{props.task.priority}</span>
       <p>{props.task.description}</p>

    <label>
       Task Status:
     <select value= {props.task.status} onChange={handleChange}>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
    </select>
    </label>
        <button onClick={handleDelete}>Delete</button>
    </div>

 );};



