// form and task item and item list/filter
import { useState } from "react";
import type { TaskFormProps , TaskFormInput } from "../../types";

export const TaskForm: React.FC<TaskFormProps> = ({
    placeholderTitle,
    placeholderDescription,
    onSubmit,
})=> {

}

       


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



         </div>
     </form>
     
)  
     }

