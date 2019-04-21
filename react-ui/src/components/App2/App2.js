import React from 'react';
import logo from '../../assets/logo.svg';

import './App2.css';

export default (
  {
    title = "Hello World",
    text = "Please, write text...",
    info = "Created: 10.10.10"
  }
  )=> (

  <div className="App">
      <header className="App-header">
        <div className="">{title}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>{text}</p>
        <div className="App-link">{info}</div>

      </header>
    </div>

);
