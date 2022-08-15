import React, { Component } from 'react';
import { Optional } from './shared-types';
import { User, UserStatus } from './todo.model';
import { UserListener } from './TodoApp';

interface UserInputProps {
    user: Optional<User>
    onCreateUser: UserListener
}

interface UserInputState {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    comfirmPassword: string;
    gender: string;
    status: UserStatus.Active;
    url: string
    date: string
}

class UserInput extends Component<UserInputProps, UserInputState> {
    state: Readonly<UserInputState> = {
        id: this.props.user?.id?.toString() || '',
        username: this.props.user?.username || '',
        firstName: '',
        lastName: '',
        password: '',
        comfirmPassword: '',
        gender: '',
        status: UserStatus.Active,
        url: '',
        date: this.props.user?.date || new Date().toISOString()
    }
    handleUserSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        this.props.onCreateUser(
            new User(this.state.username, new Date(this.state.date).toISOString(), UserStatus.Active,
                this.state.id ? parseInt(this.state.id) : undefined));
        this.setState({ username: '' })
    }

    handleTextChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name as keyof UserInputState & string;
        const stateUpdate = { [fieldName]: event.target.value } as unknown as UserInputState;
        this.setState(stateUpdate);
    }

    handleuserReset = (event: React.MouseEvent) => {
        event.preventDefault();
        this.setState({ username: '' })
    }
    handleUserReset = (event: React.MouseEvent) => {
        event.preventDefault();
        this.setState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        comfirmPassword: '',
        gender: '',
        status: UserStatus.Active,
        url: ''
    })
    }

    render() {
        return (
            <form className="UserInput-form" onSubmit={this.handleUserSubmit}>
               <label htmlFor="UserInput-user-text">Id</label>
                <input type="text" id="id" name="id" defaultValue={this.state.id} disabled />
                <form className="UserInput-form" onSubmit={this.handleUserSubmit}>
                <label htmlFor="UserInput-user-text">First Name</label>
                <input type="text" id="firstName" name="firstName" value={this.state.firstName}
                    onChange={this.handleTextChanged} /> <br></br>
                <label htmlFor="UserInput-user-text">Last Name</label>
                <input type="text" id="lastName" name="lastName" value={this.state.lastName}
                    onChange={this.handleTextChanged} /><br></br>
                <label htmlFor="UserInput-user-text">Username</label>
                <input type="text" id="username" name="username" value={this.state.username}
                    onChange={this.handleTextChanged} /><br></br>
                <label htmlFor="UserInput-user-text">Password</label>
                <input type="password" id="password" name="password" value={this.state.password}
                    onChange={this.handleTextChanged} />
                <label htmlFor="UserInput-user-text">Comfirm Password</label>
                <input type="password" id="comfirmPassword" name="comfirmPassword" value={this.state.comfirmPassword}
                    onChange={this.handleTextChanged} />
                <label htmlFor="UserInput-user-text">Add a Picture</label>
                <input type="Url" id="url" name="url" value={this.state.url}
                    onChange={this.handleTextChanged} placeholder="https://example.jpg/.png/.jpeg"/><br></br>
                <label htmlFor="UserInput-user-text">Gender</label>
                <input type="text" id="gender" name="gender" value={this.state.gender}
                    onChange={this.handleTextChanged} placeholder="Male / Female / Other"/><br></br>
                <button className='button button5' type="submit">Submit User</button>
                <button className='button button3' type="reset" onClick={this.handleUserReset}>Reset</button>
            </form>
            </form>
        );
    }
}

export default UserInput;