import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the projects page!
        </p>
        <p>
          Want to see a preview of what's to come? Go to the staging deploy and check out
          the beta version of this site! 
        </p>
        <a href="http://beta.projects.theserverproject.com">Staging Site</a>
      </header>
    </div>
  );
}

export default App;
