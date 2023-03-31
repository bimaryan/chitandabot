import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Home from './components/Home';
import Settings from './components/Settings';
import Commands from './components/CommandList';

function App() {
  const navigate = useNavigate();
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
      navigate('/');
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
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/commands">
          <Commands />
        </Route>
      </Routes>
    </div>
  );
}

export default App;