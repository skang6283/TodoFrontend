import logo from './logo.svg';
import './App.css';
import "semantic-ui-css/semantic.min.css";

import PlanDashboard from './components/PlanDashboard/PlanDashboard';
import TimerDashboard from './components/TimerDashboard/TimerDashboard';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div>
        <Route
          exact path='/'
          component={PlanDashboard}
        />
        <Route
          exact path='/login'
          component={Login}
        />
        <Route
          exact path='/signup'
          component={Signup}
        />
    </div>
  );
}

export default App;
