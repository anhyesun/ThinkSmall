import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';

const Logo = withStyles({
    root: {
        flex: 1,
        fontFamily: '\'Abril Fatface\', cursive',
    },
})(Typography);

export default Logo;
