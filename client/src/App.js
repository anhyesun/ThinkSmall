import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
import { StylesProvider, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import BusinessForm from './components/Form/BusinessForm'
import RequestForm from './components/Form/RequestForm'
import SignupForm from './components/Form/SignupForm'
import LoginForm from './components/Form/LoginForm'
import Inbox from './components/Inbox/Inbox'
import BusinessesList from './components/List/BusinessesList'
import VolunteersList from './components/List/VolunteersList'
import NavBar from './components/NavBar/NavBar'
import Maps from './components/Maps'
import AccountPage from './pages/AccountPage'
import HomePage from './pages/HomePage'
import './App.css'

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

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Baloo 2',
            'cursive',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#000',
        },
    },
})

function App({ switchState }) {
    return (
        <ThemeProvider theme={theme}>
            <StylesProvider injectFirst>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route path="/business" component={switchState ? Maps : BusinessesList} />
                        <Route path="/volunteer" component={VolunteersList} />
                        <Route path="/inbox" component={Inbox} />
                        <Route path="/account" component={AccountPage} />
                        <Route path="*" component={HomePage} />
                    </Switch>
                    <BusinessForm />
                    <RequestForm />
                    <SignupForm />
                    <LoginForm />
                </Router>
            </StylesProvider>
        </ThemeProvider>
    )
}

const mapStateToProps = ({ switchState }) => ({ switchState })

export default connect(mapStateToProps)(App)
