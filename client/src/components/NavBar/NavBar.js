import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    AppBar,
    SwipeableDrawer as Drawer,
    Toolbar,
    useMediaQuery,
} from '@material-ui/core'
import AccountIcon from '@material-ui/icons/AccountCircleOutlined'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { ButtonNavBar, Logo, Text } from './components'
import classes from '../../modules/nav.module.css'
import Switch from './components/Switch'

const tabs = [
    { to: 'about', title: 'About' },
    { to: 'businesses', title: 'Small Businesses' },
    { to: 'volunteers', title: 'Volunteers' },
    { to: 'contact', title: 'Contact Us' },
]

// TODO: Upate these links once notifications and logout functionlity exist
const dropTabs = [
    { to: 'account', title: 'Account' },
    { to: 'notifications', title: 'Notifications' },
    { to: 'inbox', title: 'Inbox' },
    { to: 'about', title: 'Logout' },
]

function NavBar({ signedIn }) {
    const matches = useMediaQuery('(min-width:991.98px)')
    const [open, setOpen] = useState(false)
    const [drop, setDrop] = useState(false)
    const accountIcon = useRef(null)
    const toggleDrop = () => setDrop(prev => !prev)
    const handleClose = () => setDrop(false)
    const Links = () => (
        <>
            {tabs.map(({ to, title }) => (
                <Link key={to} to={to} className={classes.link}>{title}</Link>
            ))}
        </>
    )
    const DropLinks = () => {
        const { top, left } = accountIcon?.current?.getBoundingClientRect() || {}
        return (
            <div className={classes.drop} style={{ top: top + 30, left, display: drop ? 'block' : 'none' }} onClick={handleClose}>
                <div className={classes.flex}>
                    {dropTabs.map(({ to, title }) => (
                        <Link key={to} to={to} className={classes.link}>{title}</Link>
                    ))}
                </div>
            </div>
        )
    }
    const AccountInfo = () => (
        <>
            <AccountIcon
                ref={accountIcon}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={toggleDrop}
            />
            {drop && <DropLinks />}
            <div className={classes.account}>
                <Text>John Doe</Text>
            </div>
        </>
    )
    return (
        <>
            <AppBar position="static" color="transparent" className={classes.root}>
                <Toolbar>
                    <Logo edge="start" variant="h5" className={classes.logo}>ThinkSmall</Logo>
                    {matches ? (
                        <>
                            <Links />
                            {signedIn
                                ? <AccountInfo />
                                : <ButtonNavBar userType="entry" />}
                            <Switch />
                        </>
                    ) : <Icon icon="bars" onClick={() => setOpen(true)} />}
                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                onOpen={() => { }}
                onClose={() => setOpen(false)}
                PaperProps={{
                    style: { width: 200 },
                }}
            >
                <Links />
                <Switch />
                <AccountInfo />
            </Drawer>
        </>
    )
}

export default connect(({ currentUser }) => ({ signedIn: currentUser.loaded }))(NavBar)
