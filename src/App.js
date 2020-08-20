import React from 'react';
import {Route,Switch} from 'react-router-dom'
import 'tachyons'
import Profile from './profile/profile';
import SmartBrainApp from './smart-brain-app/Smart-App';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Profile} />
      <Route exact path='/smartBrain' component={SmartBrainApp} />
      </Switch>
    </div>
  );
}

export default App;
