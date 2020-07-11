import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faAddressCard,
    faBars,
    faBolt,
    faList,
    faMapMarkedAlt,
    faMapMarkerAlt,
    faMeteor,
    faPaperPlane,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import { StylesProvider } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import Home from './components/Home'
import BusinessForm from './components/Form/BusinessForm'
import RequestForm from './components/Form/RequestForm'
import SignupForm from './components/Form/SignupForm'
import LoginForm from './components/Form/LoginForm'
import Inbox from './components/Inbox/Inbox'
import BusinessesList from './components/List/BusinessesList'
import VolunteersList from './components/List/VolunteersList'
import NavBar from './components/NavBar/NavBar'
import Maps from './components/Maps'
import './App.css'
import Account from './components/Account'

library.add(
    fab,
    faAddressCard,
    faBars,
    faBolt,
    faList,
    faMapMarkedAlt,
    faMapMarkerAlt,
    faMeteor,
    faPaperPlane,
    faUser,
)

function App({ switchState }) {
    return (
        <StylesProvider injectFirst>
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/businesses" component={switchState ? Maps : BusinessesList} />
                    <Route path="/volunteers" component={VolunteersList} />
                    <Route path="/inbox" component={Inbox} />
                    <Route path="/account" component={Account} />
                    <Route path="*" component={Home} />
                </Switch>
                <BusinessForm />
                <RequestForm />
                <SignupForm />
                <LoginForm />
            </Router>
        </StylesProvider>
    )
}

const mapStateToProps = ({ switchState }) => ({ switchState })

export default connect(mapStateToProps)(App)
