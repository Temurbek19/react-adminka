import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Sidebar from './containers/Sidebar/Sidebar';

import Overview from './pages/Overview/Overview';
import Tickets from './pages/Tickets/Tickets';
import Ideas from './pages/Ideas/Ideas';

import './assets/styles/main.scss';

function App() {
  return (
    <Router>
       <div className="fragment">
        <Sidebar/>
        <Switch>
          <Route path="/tickets" component={Tickets}/>
          <Route path="/overview" component={Overview}/>
          <Route path="/ideas" component={Ideas}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
