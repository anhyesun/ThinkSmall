import OutlinedInput from '@material-ui/core/OutlinedInput'
import { withStyles } from '@material-ui/core/styles'

const Input = withStyles({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
        fontSize: 14,
    },
})(OutlinedInput)

export default Input
