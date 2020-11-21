import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login'
import ChatRooms from './components/ChatRooms/ChatRooms'
import GeneralChat from "./components/ChatRooms/GeneralChat";
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="" exact component={ChatRooms} />
            <Route path="/login" component={Login} />
            <Route path="/generalchat" component={GeneralChat} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
