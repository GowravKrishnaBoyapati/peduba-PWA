import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard'
import Trainings from './pages/Trainings'
import Settings from './pages/Settings'
import Jobs from './pages/Jobs'
import Incidents from './pages/Incidents'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/trainings' component={Trainings} />
          <Route path='/settings' component={Settings} />
          <Route path='/jobs' component={Jobs} />
          <Route path='/Incidents' component={Incidents} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
