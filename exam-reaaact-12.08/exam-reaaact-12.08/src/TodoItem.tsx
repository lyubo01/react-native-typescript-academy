import React from 'react';
import { User, UserStatus } from "./todo.model"
import { UserListener } from "./TodoApp";
import './TodoItem.css'

export interface UserItemProps {
    user: User;
    onUpdate: UserListener;
    onDelete: UserListener;
}

export const UserItem = ({ user,onUpdate, onDelete }: UserItemProps) => {
    // function handleCompletion(event: React.MouseEvent) {
    //     onUpdate({ ...user, status: UserStatus.Suspended })
    // }
    // function handleCancel(event: React.MouseEvent) {
    //     onUpdate({ ...user, status: UserStatus.Deactivated })
    // }
    return (
        <div className="UserItem">
            <span className="UserItem-text">
                <span className="UserItem-id">id:{user.id}-</span>
                {user.firstName} {user.lastName} - {user.username} - {user.gender}
                <img src={user.url} alt="Profile picture" /> <br />
            </span>
        </div >
    )
}

export default UserItem;