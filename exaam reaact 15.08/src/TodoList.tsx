import { useMemo } from "react";
import { User, UserStatus } from "./todo.model";
import { FilterType, UserListener } from "./TodoApp";
import UserItem from "./TodoItem";
import './TodoList.css'

interface Props {
    users: User[];
    filter: FilterType;
    onUpdate: UserListener;
    onDelete: UserListener;
    onEdit: UserListener;
}

export default function UserList({ users, filter, ...rest }: Props) {
    const visibleUsers = (users: User[], filter: FilterType) => users.filter(user => !filter ? true : user.status === filter);
    const memizedVisibleUsers = useMemo(() => visibleUsers(users, filter), [users, filter]);
    return (<div className="UserList">
        {
            memizedVisibleUsers.map(user =>
                <UserItem user={user} key={user.id} {...rest} />)
        }
    </div>)
}