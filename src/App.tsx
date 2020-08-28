import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Join from './components/join/Join';
import Chat from './components/chat/Chat';
import PrivateRoute from './utilities/PrivateRoute'

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path='/chat' exact component={Chat} />
        <Route path='/' exact component={Join} />
      </Switch>
    </Router>
  );
}

export default App;
