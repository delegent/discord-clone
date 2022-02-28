import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    // BEM NAMing conventions
    <div className="app">
      <h1>Discord clone</h1>
      {/* sidebar */}
      <Sidebar />
      {/* chats */}
    </div>
  );
}

export default App;
