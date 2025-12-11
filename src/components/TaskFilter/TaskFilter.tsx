import React, {useState} from "react";
import type { TaskFilterProps } from "../../types";
import type { Filters } from "../../types";

export const TaskFilter: React.FC<TaskFilterProps> = ({onFilterChange}) => {
    const [filters, setFilters] = useState<Filters>({});
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement> ) => {
        const {name, value} = event.target;
        const updateFilters : Filters = {...filters,
        [name] : value
        };
        setFilters(updateFilters);
        onFilterChange(updateFilters);
    };
    return (
        <div className="filter">
            <label> Select Status:</label>
            <select name="status"
            className="status"
            value={filters.status}
            onChange={handleChange}>
            
            <option value="all-status">All Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            
            <label>Select Priority:</label>
                <select 
                name="priority"
                className="priority"
                value={filters.priority}
                onChange={handleChange}>
              
                <option value="All-priority">All Priorities</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                </select>


        </div>
    )
}
