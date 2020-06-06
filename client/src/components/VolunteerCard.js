import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Divider from '@material-ui/core/Divider';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import UserTags from './UserTags';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        // height: 140,
        height: 0,
        paddingTop: '56.25%', // 16:9,
        marginTop: '30',
    },
    header: {
        textAlign: 'center',
    },
});

const VolunteerCard = props => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={props.avatar}
                title="Volunteer Picture"
            />
            <CardHeader className={classes.header} titleTypographyProps={{ variant: 'h5' }} title={props.name} />
            <CardActionArea>
            <CardContent>
                <Typography variant="subtitle1" component="h6">
                    <UserTags tags={props.tags} />
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
                <Divider className="MuiDivider-root" light />
            </CardContent>
            </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" target="_blank">
                        Read More
                    </Button>
                    <Button size="small" color="primary" target="_blank">
                        Start Conversation
                    </Button>
                </CardActions>
        </Card>
    );
};

export default VolunteerCard;
