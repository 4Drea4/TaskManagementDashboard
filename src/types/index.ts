- Task Data Structure
      - Component Props
      - Form Data
      
      

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
onStatusChange : (taskId: string, newsStatus: TaskStatus) => 
    void;
onDelete : (taskID:string) => void;

}

//Task item props
export interface TaskItemProps{
    task: Task;
    onStatusChange: (taskId: string, newStatus: TaskStatus)  => void;
    onDelete: (taskId:string) => void;
}

//Form


//Task Filter: create a TaskFilter component that allows filtering tasks by status and TaskPriorityChangeEvent

export interface TaskFilterProps{
    onFilterChange:(filters:Filters) => void;
}

export interface Filters{
    status?: TaskStatus;
    priority?: TaskPriority;
}

//Text input component that handles user input
export interface TextInputProps{
    onTextChange: (text:string) => void;
    placeholder?: string;
    initialValue?: string;

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

//form props