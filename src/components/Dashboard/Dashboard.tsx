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



       
return (
   
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="Title">Title</label>
         <input 
             type='text'
             placeholder=""
             onChange={handleChange}
        />
         </div>

         <div>
            <label htmlFor="Description">Description</label>
                <input


                />

         </div>
     </form>

)  
    
}