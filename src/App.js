import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter/counter';
import Login from './components/Login/login';

function App() {
  return (
    <div className="App">
      <div className="links">
        <Link to="/counter"> Counter </Link>
        <Link to="/login"> Login </Link>
      </div>
      <div className="switch">
        <Switch>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
