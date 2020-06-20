import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faPaperPlane, faBars, faList, faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import Home from './components/Home';
import BusinessForm from './components/Form/BusinessForm';
import RequestForm from './components/Form/RequestForm';
import VolunteerForm from './components/Form/VolunteerForm';
import Inbox from './components/Inbox/Inbox';
import BusinessesList from './components/BusinessesList';
import VolunteersList from './components/VolunteersList';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Maps from './components/Maps';

library.add(fab, faPaperPlane, faBars, faList, faMapMarkedAlt);

function App({ switchState }) {
    return (
        <Router>
            <Switch>
                <Route path="/businesses">
                    <NavBar userType="business" />
                    {switchState ? <Maps /> : <BusinessesList />}
                    <BusinessForm />
                    <RequestForm />
                </Route>
                <Route path="/volunteers">
                    <NavBar userType="volunteer" />
                    <VolunteersList />
                    <VolunteerForm />
                </Route>
                <Route path="/inbox">
                    <Inbox />
                </Route>
                <Route path="*">
                    <NavBar />
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

const mapStateToProps = ({ switchState }) => ({ switchState });

export default connect(mapStateToProps)(App);
