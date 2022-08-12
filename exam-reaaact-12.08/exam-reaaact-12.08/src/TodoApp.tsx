import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { User, UserStatus } from './todo.model';
import MOCK_USERS from './mock-todos';
import UserList from './TodoList';
import UserInput from './TodoInput';
import { stat } from 'fs';



export type FilterType = UserStatus | undefined;

interface UserAppState {
  users: User[];
  filter: FilterType;
}

export interface UserListener {
  (user: User): void;
}

export interface FilterChangeListener {
  (filter: FilterType): void;

}

class UserApp extends Component<{}, UserAppState> {
  state: Readonly<UserAppState> = {
    users: [],
    filter: undefined
  }
  constructor(props: {}) {
    super(props)
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
  }

  handleUpdateUser(user: User) {
    this.setState(({ users }) => ({
      users: users.map(td => td.id === user.id ? user : td)
    }))
  }

  handleDeleteUser = (user: User) => {
    this.setState(({ users }) => ({
      users: users.filter(td => td.id !== user.id)
    }))
  }

  handleCreateUser = (user: User) => {
    this.setState(({ users }) => ({
      users: users.concat(user)
    }))
  }
  handlefilterChange = (status: FilterType) => {
    this.setState({filter: status})
  }

  // handleCancelTodo = (todo: Todo) => {
  //   this.setState(({ todos }) => ({
  //     todos: todos.filter(td => td.id !== todo.id)
  //   }))  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Register</h2>
          <UserInput onCreateTodo={this.handleCreateUser} />
          
          <UserList
            users={this.state.users}
            filter={this.state.filter}
            onUpdate={this.handleUpdateUser}
            onDelete={this.handleDeleteUser} 
            />
        </header>
      </div>
    );
  }
}

export default UserApp;