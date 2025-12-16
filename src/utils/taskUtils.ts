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

