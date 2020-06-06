import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

const UserTags = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {props.tags.map(({ label, color }, i) => (
                <Chip key={i} label={label} clickable color={color} />
            ))}
        </div>
    );
}

export default UserTags;
