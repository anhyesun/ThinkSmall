import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from './components/Home';
import List from './components/List';
import './App.css';
import BusinessNavbar from './components/BusinessNavbar';
import VolunteerNavbar from './components/VolunteerNavbar';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/businesses">
                    <BusinessNavbar />
                    <List businesses />
                </Route>
                <Route path="/volunteers">
                    <VolunteerNavbar />
                    <List volunteers />
                </Route>
                <Route path="*">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
