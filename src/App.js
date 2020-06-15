import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PeoplePage from './components/pages/PeoplePage';
import PlanetsPage from './components/pages/PlanetsPage';
import StarshipsPage from './components/pages/StarshipsPage';
import Navbar from './components/common/Navbar';
import NotFound from './components/pages/404'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/people" />
          </Route>
          <Route path="/people">
            <PeoplePage /> 
          </Route>
          <Route path="/planet">
            <PlanetsPage /> 
          </Route>
          <Route path="/starship">
            <StarshipsPage /> 
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>              
      </div>
    </Router>
  );
}

export default App;
