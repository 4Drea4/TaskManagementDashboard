// export type successState = '' //will be used for alertbox util

// Task Status
export type TaskStatus='pending' | 'in-progress' | 'completed';

//Task Priority
export type TaskPriority = 'low' | 'medium' | 'high'; 

//

// Task Item
export interface Task{
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate: string;
}


//TaskListProps
export interface TaskListProps{
tasks : Task[];
onStatusChange : (taskId: string, newStatus: TaskStatus) => 
    void;
onDelete : (taskId:string) => void;

}

//Task item props
export interface TaskItemProps{
    task: Task;
    onStatusChange: (taskId: string, newStatus: TaskStatus)  => void;
    onDelete: (taskId:string) => void;
}


//Task Filter: create a TaskFilter component that allows filtering tasks by status and TaskPriorityChangeEvent

export interface TaskFilterProps{
    onFilterChange:(filters:Filters) => void;
}

export interface Filters{
    status?: TaskStatus;
    priority?: TaskPriority;
}



// stats display 
export interface TaskStats{
   taskAmount: number;
    completionTime: number; // I may make make this a function 
    finishedTasks?:number;
    openTasks?:number;
}

// 
export interface StatsDisplayProps{
stats: TaskStats;
}



//what form collects
export interface TaskFormInput {
    title: string;
    description:string;
    dueDate: string;
}

//form component
export interface TaskFormProps{
        placeholderDescription?:string;
        placeholderTitle?: string;
        onSubmit: (task: TaskFormInput) => void;
    
}

//sort

//search
export interface SearchProps {
placeholder?:string,
onSearch?: (text:string) => void
}

// I want to add a funny message to the delete button if i have time
// export type AlertType = 'succes' | 'error' | 'warning' | 'info';

// export interface AlertBoxProps{
//     type: AlertType;
//     message:string;
//     children?: React.ReactNode;
// }