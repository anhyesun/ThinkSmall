import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Home from './components/Home';
import List from './components/List';
import Inbox from './components/inbox/Inbox';
import './App.css';

library.add(fab, faPaperPlane);

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/businesses">
                    <List businesses />
                </Route>
                <Route path="/volunteers">
                    <List volunteers />
                </Route>
                <Route path="/inbox">
                    <Inbox />
                </Route>
                <Route path="*">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
