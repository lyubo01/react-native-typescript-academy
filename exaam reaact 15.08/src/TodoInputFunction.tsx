import React, { Component, useState } from 'react';
import { User } from './todo.model';
import { UserListener } from './TodoApp';

interface UserInputProps {
    onCreateUser: UserListener
}

interface UserInputState {
    text: string;
    date: string;
}

const innitialState: UserInputState = {
    text: '',
    date: new Date().toISOString()
};

function UserInputFunction({ onCreateUser }: UserInputProps) {
    const [userFields, setUserFields] = useState(innitialState);
    function handleUserSubmit(event: React.FormEvent) {
        event.preventDefault();
        onCreateUser(new User(userFields.text, new Date(userFields.date).toISOString()));
        setUserFields(innitialState);
    }

    function handleTextChanged(event: React.ChangeEvent<HTMLInputElement>) {
        const fieldName = event.target.name as keyof UserInputState & string;
        const stateUpdate = { [fieldName]: event.target.value } as unknown as UserInputState;
        setUserFields((oldFields: UserInputState) => Object.assign({}, oldFields, stateUpdate)); //({...oldFields, ...stateUpdate}));
    }

    function handleuserReset(event: React.MouseEvent) {
        event.preventDefault();
        setUserFields(innitialState);
    }
    
    return (
        <form className="UserInput-form" onSubmit={handleUserSubmit}>
            <label htmlFor="UserInput-user-text">id:</label>
            <input type="text" id="UserInput-user-text" name="text" value={userFields.text}
                onChange={handleTextChanged} />
            <input type="date" id="UserInput-user-text" name="date" value={userFields.date}
                onChange={handleTextChanged} />
            <button className='button button5' type="submit">Submit</button>
            <button className='button button3' type="reset" onClick={handleuserReset}>Reset</button>
        </form>
    );
}

export default UserInputFunction;