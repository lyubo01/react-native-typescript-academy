import React from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {
  name: string;
}

function App({name}: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h2>Hello {name}</h2>
      </header>
    </div>
  );
}

export default App;
