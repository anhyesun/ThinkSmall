import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faBars } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import Home from './components/Home';
import Form from './components/Form/Form';
import VolunteerForm from './components/Form/VolunteerForm';
import Inbox from './components/Inbox/Inbox';
import BusinessesList from './components/BusinessesList';
import VolunteersList from './components/VolunteersList';
import NavBar from './components/NavBar/NavBar';
import { businesses, volunteers } from './constant';
import './App.css';
import Maps from './components/Maps';


library.add(fab, faPaperPlane, faBars);

function App({ switchState }) {
    const [open, setOpen] = useState(false);
    const [volunteerOpen, setVolunteerOpen] = useState(false);

    return (
        <Router>
            <Switch>
                <Route path="/businesses">
                    <NavBar userType="business" handleOpen={() => setOpen(true)} />
                    {switchState ? <Maps />
                        : <BusinessesList businesses={businesses} />}
                </Route>
                <Route path="/volunteers">
                    <NavBar userType="volunteer" handleOpen={() => setVolunteerOpen(true)} />
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
            <VolunteerForm open={volunteerOpen} handleClose={() => setVolunteerOpen(false)} />
        </Router>
    );
}

const mapStateToProps = state => ({
        switchState: state.switchView,
    });

export default connect(mapStateToProps)(App);
