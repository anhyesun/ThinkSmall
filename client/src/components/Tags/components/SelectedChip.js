import React from 'react'
import Chip from '@material-ui/core/Chip'
import { withStyles } from '@material-ui/core/styles'

const SelectedChip = withStyles({
    root: {
        color: 'white',
        background: 'black',
        borderColor: 'transparent',
        fontFamily: '\'Baloo 2\', cursive',
        '&:hover, &:focus': {
            color: 'white!important',
            background: 'black!important',
            borderColor: 'transparent!important',
        },
    },
    clickableColorPrimary: {
        color: 'white',
        background: 'black',
        borderColor: 'transparent',
    },
})(Chip)

export default ({ label, onClick }) => (
    <SelectedChip
        clickable
        label={label}
        variant="outlined"
        size="small"
        onClick={onClick}
    />
)
