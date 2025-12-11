import React from 'react';
import { TaskItem } from './TaskItem';
import type { TaskListProps } from '../../types';

export const TaskList: React.FC<TaskListProps> = (props) => {
    
    return(
        <div>
            {props.tasks.map((taskObj) => {
                return (
                    <div key={taskObj.id}>
                        <TaskItem
                        task={taskObj}
                        onStatusChange={props.onStatusChange}
                        onDelete={props.onDelete}
                    />
                    </div>
                )
            }
        )}
        </div>
    );
};