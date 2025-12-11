// form and task item and item list/filter
import { useState } from "react";
import type { TaskFormProps , TaskFormInput } from "../../types";

//taskform component with type of TaskFormProps
export const TaskForm: React.FC<TaskFormProps> = (props)=> { 

//setting state on form 
const [form, setForm] = useState<TaskFormInput>({

    title:"",
    description:"",
    dueDate: "",
});
//handle change on task field

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} =event.target;
    setForm((prev) => ({
        ...prev,
        [name] : value,

    }));
}

//handlesubmit
const handleSubmit = (event: React.FormEvent<HTMLFormElement> ) =>{
    event.preventDefault();
    props.onSubmit(form);
    
};
  
return (
   
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="Title">Title</label>
         <input 
            className="task-item"
            id="title"
            name="title"
             placeholder={props.placeholderTitle}
             value={form.title}
             onChange={handleChange}
        />
         </div>

         <div>
            <label htmlFor="Description">Description</label>
                <input
                className="task-item"
                id="description"
                name="description"
                type="text"
                placeholder={props.placeholderDescription}
                value={form.description}
                onChange={handleChange}
                />
         </div>
         <div>
            <label htmlFor="dueDate">Due Date</label>
            <input
            className="task-item"
            id="dueDate"
            name="dueDate"
            type="date"
            value={form.dueDate}
            onChange={handleChange}
            />
         </div>

         <button type="submit">Add Task</button>
     </form>

)  
    
}