import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login'
import ChatRooms from './components/Chatrooms/ChatRooms'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ChatRooms}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
