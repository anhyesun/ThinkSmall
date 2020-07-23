import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    AppBar, Avatar,
    SwipeableDrawer as Drawer,
    Toolbar,
    useMediaQuery,
} from '@material-ui/core'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { ButtonNavBar, Logo, Text } from './components'
import classes from '../../modules/nav.module.css'
import Switch from './components/Switch'
import { getCurrentUser } from '../../actions'

const tabs = [
    { to: 'about', title: 'About' },
    { to: 'business', title: 'Small Businesses' },
    { to: 'volunteer', title: 'Volunteers' },
    { to: 'contact', title: 'Contact Us' },
]

// TODO: Upate these links once notifications and logout functionlity exist
const dropTabs = [
    { to: 'account', title: 'Account' },
    { to: 'notifications', title: 'Notifications' },
    { to: 'inbox', title: 'Inbox' },
    { to: 'about', title: 'Logout' },
]

function NavBar({
    loaded, givenName, familyName, imageUrl, getCurrentUser,
}) {
    const matches = useMediaQuery('(min-width:991.98px)')
    const [open, setOpen] = useState(false)
    const [drop, setDrop] = useState(false)
    const avatar = useRef(null)

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
        const { top, left } = avatar?.current?.getBoundingClientRect() || {}
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
            {imageUrl
                ? (
                    <Avatar
                        ref={avatar}
                        src={imageUrl}
                        onClick={toggleDrop}
                        style={{ width: 20, height: 20 }}
                    />
                )
                : (
                    <Avatar
                        ref={avatar}
                        onClick={toggleDrop}
                        style={{ width: 20, height: 20 }}
                    >
                        {`${givenName?.charAt(0)}${familyName?.charAt(0)}`}
                    </Avatar>
                )}
            {drop && <DropLinks />}
            <div className={classes.account}>
                <Text>{`${givenName} ${familyName}`}</Text>
            </div>
        </>
    )

    useEffect(() => {
        const loadCurrentUser = async () => getCurrentUser()
        loadCurrentUser()
    }, [])

    return (
        <>
            <AppBar position="static" color="transparent" className={classes.root}>
                <Toolbar>
                    <Logo edge="start" variant="h5" className={classes.logo}>
                        <Link to="/">ThinkSmall</Link>
                    </Logo>
                    {matches ? (
                        <>
                            <Links />
                            {loaded
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

const mapStateToProps = ({ currentUser }) => ({ ...currentUser, ...currentUser.data })

export default connect(mapStateToProps, { getCurrentUser })(NavBar)
