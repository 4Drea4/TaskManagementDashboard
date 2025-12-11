import React, {useState} from 'react';
import type { TaskFormInput } from '../types';

// form validation validate the title,date,description
export function validationForForm(input:TaskFormInput): string {
        if (!input.title.trim()) {
            return "You have to add a title";
        }
        if (!input.description.trim()){
            alert('Let us know the details of your task');
        }
      
}


//function for having task input item key value pairs to be local storage
//Should i load task list like card components then render them using stringify?
// export function saveInputs(){
//     const [savedItems, setSavedItems] = useState(
//         localStorage.getItem(event?.target.value)
//     )
// }
