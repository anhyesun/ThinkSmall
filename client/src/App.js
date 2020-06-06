import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form/Form';
import List from './components/List';
import NavBar from './components/NavBar';
import { businesses, volunteers } from './constant';
import './App.css';

function App() {
    const [open, setOpen] = useState(false);

    return (
        <Router>
            <Switch>
                <Route path="/businesses">
                    <NavBar userType="Business" handleOpen={() => setOpen(true)} />
                    <List businesses={businesses} />
                </Route>
                <Route path="/volunteers">
                    <NavBar userType="Volunteer" />
                    <List volunteers={volunteers} />
                </Route>
                <Route path="*">
                    <Home />
                </Route>
            </Switch>
            <Form open={open} handleClose={() => setOpen(false)} />
        </Router>
    );
}

export default App;
