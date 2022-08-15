import React from "react";
import { User, UserStatus } from "./todo.model"
import { UserListener } from "./TodoApp";
import './TodoItem.css'

interface UserItemProps {
    user: User;
    onUpdate: UserListener;
    onDelete: UserListener;
    onEdit: UserListener;
}

const UserItem = ({ user,onUpdate, onDelete, onEdit }: UserItemProps) => {
    function handleCompletion(event: React.MouseEvent) {
        onUpdate({ ...user, status: UserStatus.Completed })
    }
    return (
        <div className="UserItem">
            <span className="UserItem-text">
                <span className="UserItem-id">{user.id}</span>
                {user.username} - {new Date(user.date).toDateString()}
            </span>
            <span className="UserItem-right">
                <span className="UserItem-status">{UserStatus[user.status]}</span>
                {user.status === UserStatus.Active ?
                    <span className="UserItem-button fas fa-check-circle"
                        onClick={handleCompletion}></span> :
                    <span className="UserItem-button fas fa-times-circle danger"
                        onClick={() => onDelete(user)}></span>
                }
                <span className="UserItem-button fas fa-pen-to-square"
                    onClick={() => onEdit(user)}></span>
        </span>
        </div >
    )
}

export default UserItem