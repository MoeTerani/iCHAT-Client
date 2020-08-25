import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Join from './components/join/Join';
import Chat from './components/chat/Chat';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/chat' component={Chat} />
        <Route path='/' exact component={Join} />
      </Switch>
    </Router>
  );
}

export default App;
