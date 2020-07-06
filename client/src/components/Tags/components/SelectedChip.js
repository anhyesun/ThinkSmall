import React from 'react'
import Chip from '@material-ui/core/Chip'
import { withStyles } from '@material-ui/core/styles'
import classes from '../../../modules/tags.module.css'

const SelectedChip = withStyles({
    root: {
        color: 'white',
        background: '#6C7A89',
        borderColor: 'transparent',
        fontFamily: '\'Baloo 2\', cursive',
        '&:hover, &:focus': {
            color: 'white!important',
            background: '#6C7A89!important',
            borderColor: 'transparent!important',
        },
    },
    clickableColorPrimary: {
        color: 'white',
        background: '#6C7A89',
        borderColor: 'transparent',
    },
})(Chip)

export default ({ label, onClick }) => (
    <SelectedChip
        clickable
        label={label}
        variant="outlined"
        size="small"
        className={classes.tag}
        onClick={onClick}
    />
)
