import React from 'react'
import Chip from '@material-ui/core/Chip'
import { withStyles } from '@material-ui/core/styles'
import classes from '../../../modules/tags.module.css'

const UnselectedChip = withStyles({
    root: {
        background: '#fafafa',
        borderColor: 'rgba(0, 0, 0, 0.23)',
        fontFamily: '\'Baloo 2\', cursive',
        '&:hover, &:focus': {
            background: '#fafafa!important',
            borderColor: 'rgba(0, 0, 0, 0.23)!important',
        },
    },
    clickableColorPrimary: {
        color: '#fafafa',
        background: 'salmon',
        borderColor: 'transparent',
    },
})(Chip)

export default ({ label, onClick }) => (
    <UnselectedChip
        clickable
        label={label}
        variant="outlined"
        size="small"
        className={classes.tag}
        onClick={onClick}
    />
)
