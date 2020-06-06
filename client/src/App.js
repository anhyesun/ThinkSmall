import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from './components/Home';
import List from './components/List';
import './App.css';
import NavBar from './components/navBar';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/businesses">
                    <NavBar userType="Business" />
                    <List businesses />
                </Route>
                <Route path="/volunteers">
                    <NavBar userType="Volunteer" />
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
