import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Home from './components/Home/Home';
import Settings from './components/Settings/Settings';
import Commands from './components/Commands/CommandList';

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.get('/auth/discord');
      window.location.href = response.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.get('/auth/logout');
      setLoggedIn(false);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chitanda Bot</h1>
        {loggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login with Discord</button>
        )}
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/commands">
          <Commands />
        </Route>
      </Switch>
    </div>
  );
}

export default App;