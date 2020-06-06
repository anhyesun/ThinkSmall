import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from './components/Home';
import BusinessList from './components/BusinessList';
import VolunteerList from './components/VolunteerList';
import './App.css';
import NavBar from './components/navBar';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/businesses">
                    <NavBar userType="Business" />
                    <BusinessList />
                </Route>
                <Route path="/volunteers">
                    <NavBar userType="Volunteer" />
                    <VolunteerList />
                </Route>
                <Route path="*">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
