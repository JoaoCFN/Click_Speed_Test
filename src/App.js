import React from 'react';
import './App.css';

import Title from "./components/Title";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="app">
        <Title />
        <Clock />
    </div>
  );
}

export default App;
