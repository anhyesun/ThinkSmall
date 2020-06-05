import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

//

const useStyles = makeStyles(() => ({
    root: {
        color: 'black',
        background: '#ffd180',
    },

    typographyStyles: {
        flex: 1,

    },
    middleStyle: {
        display: 'flex',
        color: 'grey',
        fontSize: '.75rem',

    },
    middleStyleFontSize: {
        fontSize: '.75rem',
    },
    buttonStyle: {
        color: 'grey',
        fontSize: '.75rem',
    },
    // accountIdPanel: {
    // display:'flex',
    // }
}));

function VolunteerNavbar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Typography edge="start" className={classes.typographyStyles} variant="h5">
                        ThinkSmall
                    </Typography>
                    <div className={classes.middleStyle}>
                        <Typography className={classes.middleStyleFontSize}>About</Typography>
                        <Box mr=".5rem" />
                        <Typography className={classes.middleStyleFontSize}> | </Typography>
                        <Box mr=".5rem" />
                        {/* eslint-disable-next-line max-len */}
                        <Typography className={classes.middleStyleFontSize}>Small Businesses</Typography>
                        <Box mr=".5rem" />
                        <Typography className={classes.middleStyleFontSize}> | </Typography>
                        <Box mr=".5rem" />
                        <Typography className={classes.middleStyleFontSize}>Volunteers</Typography>
                        <Box mr=".5rem" />
                        <Typography className={classes.middleStyleFontSize}> | </Typography>
                        <Box mr=".5rem" />
                        <Typography className={classes.middleStyleFontSize}>Contact Us</Typography>
                        <Box mr=".5rem" />
                    </div>
                    <Box mr="2rem" />

                    <div className={classes.middleStyle}><AccountCircleOutlinedIcon /></div>

                    <Box mr="1em" />

                    {/* Ask for help here */}
                    <div className={classes.middleStyle}>
                        <div>
                            John Doe
                        </div>
                        <div>
                            John Doe
                        </div>
                    </div>

                    <Box mr="1rem" />

                    <Button variant="outlined" className={classes.buttonStyle}>
                        Provide Help
                    </Button>

                    <Box mr=".5rem" />

                    <Button variant="outlined" className={classes.buttonStyle}>
                        Register Volunteer
                    </Button>


                </Toolbar>
            </AppBar>
        </div>
    );
}

export default VolunteerNavbar;
