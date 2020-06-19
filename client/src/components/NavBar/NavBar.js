import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    SwipeableDrawer as Drawer,
    Toolbar,
    useMediaQuery,
} from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { ButtonNavBar, Logo, Text } from './components';
import classes from '../../modules/nav.module.css';
import Switch from './components/Switch';

const tabs = [
    { to: 'about', title: 'About' },
    { to: 'businesses', title: 'Small Businesses' },
    { to: 'volunteers', title: 'Volunteers' },
    { to: 'contact', title: 'Contact Us' },
];

function NavBar({ userType, handleOpen }) {
    const matches = useMediaQuery('(min-width:576px)');
    const [open, setOpen] = useState(false);
    const Links = () => (
        <div className={classes.flex}>
            {tabs.map(({ to, title }) => (
                <Link key={to} to={to} className={classes.link}>{title}</Link>
            ))}
        </div>
    );
    const AccountInfo = () => (
        <>
            <AccountCircleOutlinedIcon />
            <div className={classes.account}>
                <Text>John Doe</Text>
                <Text>{`${userType} user`}</Text>
            </div>
        </>
    );
    return (
        <StylesProvider injectFirst>
            <AppBar position="static" color="transparent" className={classes.root}>
                <Toolbar>
                    <Logo edge="start" variant="h5" className={classes.logo}>ThinkSmall</Logo>
                    {matches ? (
                        <>
                            <Links />
                            {userType && (
                                <>
                                    <AccountInfo />
                                    <ButtonNavBar userType={userType} handleOpen={handleOpen} />
                                    {userType === 'business' && (
                                        <Switch />
                                    )}
                                </>
                            )}
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
                {userType === 'business' && (
                    <Switch />
                )}
            </Drawer>
        </StylesProvider>
    );
}

export default NavBar;
