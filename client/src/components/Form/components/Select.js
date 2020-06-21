import { Select as BaseSelect, MenuItem as BaseMenuItem } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

export const Select = withStyles({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
        fontSize: 14,
    },
    outlined: {
        padding: 7.5,
        paddingLeft: 15,
    },
})(BaseSelect)

export const MenuItem = withStyles({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
        fontSize: 14,
    },
})(BaseMenuItem)
