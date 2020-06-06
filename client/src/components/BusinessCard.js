import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CardActionArea from '@material-ui/core/CardActionArea';
import makeStyles from '@material-ui/core/styles/makeStyles';
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
});

const BusinessCard = props => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.avatar}
                    title="Business Picture"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h6">
                        {props.store}
                    </Typography>
                    <Typography variant="subtitle1" component="h6">
                        <UserTags tags={props.tags} />
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                    <Divider className="MuiDivider-root" light />
                    <Typography component="p">
                        <span>{props.name}</span>
                        <span>{props.location}</span>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Button size="small" color="primary" target="_blank">
                Read More
            </Button>
            <CardActions>
            <div>
                {props.needsHelp
                && <span>
                    <Button size="small" color="primary" target="_blank">
                        I need help!
                    </Button>
                    <Button size="small" color="primary" target="_blank">
                        Contact Owner
                    </Button>
                   </span>}
            </div>
            </CardActions>
        </Card>
    );
};

export default BusinessCard;
