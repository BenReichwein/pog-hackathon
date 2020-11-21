import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login'
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
