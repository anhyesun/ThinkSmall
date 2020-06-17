import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faBars } from '@fortawesome/free-solid-svg-icons';
import Home from './components/Home';
import Form from './components/Form/Form';
import Inbox from './components/Inbox/Inbox';
import BusinessesList from './components/BusinessesList';
import VolunteersList from './components/VolunteersList';
import NavBar from './components/NavBar/NavBar';
import { businesses, volunteers } from './constant';
import './App.css';

library.add(fab, faPaperPlane, faBars);

function App() {
    const [open, setOpen] = useState(false);

    return (
        <Router>
            <Switch>
                <Route path="/businesses">
                    <NavBar userType="business" handleOpen={() => setOpen(true)} />
                    <BusinessesList businesses={businesses} />
                </Route>
                <Route path="/volunteers">
                    <NavBar userType="volunteer" />
                    <VolunteersList volunteers={volunteers} />
                </Route>
                <Route path="/inbox">
                    <Inbox />
                </Route>
                <Route path="*">
                    <NavBar />
                    <Home />
                </Route>
            </Switch>
            <Form open={open} handleClose={() => setOpen(false)} />
        </Router>
    );
}

export default App;
