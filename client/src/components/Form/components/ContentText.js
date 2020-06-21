import DialogContentText from '@material-ui/core/DialogContentText'
import { withStyles } from '@material-ui/core/styles'

const ContentText = withStyles({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
        fontSize: 14,
    },
})(DialogContentText)

export default ContentText
