import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Join from './components/join/Join';
import Chat from './components/chat/Chat';
import PrivateRoute from './utilities/PrivateRoute'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './state/store';

function App() {
// const isAuthenticated =   useSelector((state: RootState) => state.JoinReducer.isAuthenticated);

  return (
    <Router>
      <Switch>
        <PrivateRoute path='/chat' exact component={Chat} />
        <Route path='/' exact component={Join} />
      </Switch>
    </Router>
    // <div>
    //     {isAuthenticated ? <Chat /> : <Join  />}

    // </div>
  );
}

export default App;
