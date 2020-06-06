import React from 'react';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import classes from '../../../modules/tags.module.css';

const SelectedChip = withStyles({
    root: {
        color: '#fafafa',
        background: 'salmon',
        borderColor: 'transparent',
        fontFamily: '\'Baloo 2\', cursive',
        '&:hover, &:focus': {
            color: '#fafafa!important',
            background: 'salmon!important',
            borderColor: 'transparent!important',
        },
    },
    clickableColorPrimary: {
        color: '#fafafa',
        background: 'salmon',
        borderColor: 'transparent',
    },
})(Chip);

export default ({ label, onClick }) => (
    <SelectedChip
        clickable
        label={label}
        variant="outlined"
        size="small"
        className={classes.tag}
        onClick={onClick}
    />
);
