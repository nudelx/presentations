import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from '../src/list'
console.log(process.env)
function App() {
  return (
    <div className="App">
      <h1 className="ttt">
        <img src={logo} alt="react" width="80px" height="80px" className="App-logo"/>
        React APP
          </h1>
      <header className="page">
      <div className="desc">
        <List />
      </div>
      </header>
      
    </div>
  );
}

export default App;
