import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';

export const Text = withStyles({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
        fontSize: 'small',
        textAlign: 'center',
        margin: '0 auto',
    },
})(Typography);

export const Title = withStyles({
    root: {
        padding: '5px 15px 0',
        margin: '5px auto',
        fontWeight: 600,
        fontFamily: '\'Baloo 2\', cursive',
        fontSize: 'small',
    },
})(Typography);

export const Subtitle = withStyles({
    root: {
        padding: '5px 15px',
        margin: '5px auto',
        cursor: 'pointer',
        fontFamily: '\'Baloo 2\', cursive',
        fontSize: 'small',
    },
})(Typography);
