import React from "react";
import { Todo, TodoStatus } from "./todo.model"
import { TodoListener } from "./TodoApp";
import './TodoItem.css'

interface TodoItemProps {
    todo: Todo;
    onUpdate: TodoListener;
    onDelete: TodoListener;
    onCancel: TodoListener;
}

const TodoItem = ({ todo,onUpdate, onDelete, onCancel }: TodoItemProps) => {
    function handleCompletion(event: React.MouseEvent) {
        onUpdate({ ...todo, status: TodoStatus.Completed })
    }
    function cancelFunction(event: React.MouseEvent) {
        onCancel({ ...todo, status: TodoStatus.Canceled })
    }
    return (
        <div className="TodoItem">
            <span className="TodoItem-text">
                <span className="TodoItem-id">{todo.id}</span>
                {todo.text}
            </span>
            <span className="TodoItem-right">
                <span className="TodoItem-status">{TodoStatus[todo.status]}</span>
                {todo.status === TodoStatus.Active ?
                <span>
                    <span className="TodoItem-button fas fa-check-circle"
                        onClick={handleCompletion}></span>
                        <span className="TodoItem-button fas fa-solid fa-rectangle-xmark" id="cancelButton"
                        onClick={cancelFunction}></span>
                        </span> :
                    <span className="TodoItem-button fas fa-times-circle danger"
                        onClick={() => onDelete(todo)}></span>
                }
        </span>
        </div >
    )
}

export default TodoItem