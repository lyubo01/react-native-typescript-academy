import React, { useEffect, useState } from 'react';
import './App.css';
import { User, UserStatus } from './todo.model';
import UserList from './TodoList';
import UserFilter from './TodoFilter';
import { UsersAPI } from './rest-api-client';
import UserInputFunction from './TodoInputFunction';
import { Optional } from './shared-types';


export type FilterType = UserStatus | undefined;

export interface UserListener {
  (user: User): void;
}

export interface FilterChangeListener {
  (filter: FilterType): void;
}

function UserAppFunction() {
  const [users, setUsers] = useState([] as User[])
  const [filter, setFilter] = useState(undefined as FilterType)
  const [errors, setErrors] = useState(undefined as Optional<string>)
  const [editedUser, setEditedUser] = useState(undefined as Optional<User>)

  useEffect(() => {
    UsersAPI.findAll().then(allUsers => {
      setUsers(allUsers);
      setErrors(undefined);
    }).catch(err => {
      setErrors(err as string);
    });
  }, []);


  function handleUpdateUser(user: User) {
    setUsers(users => users.map(td => td.id === user.id ? user : td));
  }

  async function handleDeleteUser(user: User) {
    try {
      await UsersAPI.deleteById(user.id);
      setUsers(users => users.filter(td => td.id !== user.id));
      setErrors(undefined);
    } catch (err) {
      setErrors(err as string);
    }
  }

  async function handleCreateUser(user: User) {
    try {
      const created = await UsersAPI.create(user);
      setUsers(users => users.concat(created));
      setErrors(undefined);
    } catch (err) {
      setErrors(err as string);
    }
  }

  function handleEditUser(user: User){
    setEditedUser(user);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Register</h2>
        {errors && <div className="errors">{errors}</div>}
        <UserInputFunction onCreateUser={handleCreateUser} />
        <UserFilter filter={filter} onFilterChange={filter => setFilter(filter)} />
        <UserList
          users={users}
          filter={filter}
          onUpdate={handleUpdateUser}
          onDelete={handleDeleteUser}
          onEdit={handleEditUser}
        />
      </header>
    </div>
  );
}

export default UserAppFunction;