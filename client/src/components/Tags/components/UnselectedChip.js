import React from 'react'
import Chip from '@material-ui/core/Chip'
import { withStyles } from '@material-ui/core/styles'

const UnselectedChip = withStyles({
    root: {
        borderColor: 'rgba(0, 0, 0, 0.23)',
        fontFamily: '\'Baloo 2\', cursive',
        '&:hover, &:focus': {
            background: 'white!important',
            borderColor: 'rgba(0, 0, 0, 0.23)!important',
        },
    },
    clickableColorPrimary: {
        color: 'white',
        background: 'black',
        borderColor: 'transparent',
    },
})(Chip)

export default ({ label, onClick }) => (
    <UnselectedChip
        clickable
        label={label}
        variant="outlined"
        size="small"
        onClick={onClick}
    />
)
