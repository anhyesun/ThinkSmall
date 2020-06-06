import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const Text = withStyles({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
        fontSize: 14,
    },
})(Typography);

export default Text;
