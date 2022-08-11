import React from "react";
import { TodoStatus } from "./todo.model";
import { FilterChangeListener, FilterType } from "./TodoApp";
import "./TodoFilter.css"

interface TodoFilterProps {
    filter: FilterType;
    onFilterChange:FilterChangeListener;
}



export default function TodoFilter({filter, onFilterChange}: TodoFilterProps) {

    function handleFilterChange(event: React.ChangeEvent<HTMLSelectElement>) {
        onFilterChange(event.target.value === '0' ? undefined : parseInt(event.target.value))
    }
    return (
        <select value={filter} id="options"onChange={handleFilterChange}>
            <option value='0'>ALL</option>
            <option value={TodoStatus.Active}>Active</option>
            <option value={TodoStatus.Completed}>Completed</option>
            <option value={TodoStatus.Canceled}>Canceled</option>            
        </select>
    );
}