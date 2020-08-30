import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Join from './components/join/Join';
import Chat from './components/chat/Chat';
import PrivateRoute from './utilities/PrivateRoute';
import './App.css';
import NavBar from './components/layout/NavBar';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        {/* <Alert /> */}
        <Switch>
          <PrivateRoute path='/chat' exact component={Chat} />
          <Route path='/' exact component={Join} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
