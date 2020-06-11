import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';
import Tags from './Tags/Tags';
import classes from '../modules/card.module.css';

const Text = withStyles({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
    },
})(Typography);

const BusinessCard = ({
    avatar, storeName, tags, description, storeOwner, location, needsHelp,
}) => (
    <Card className={classes.root}>
        <CardMedia
                className={classes.media}
                image={avatar}
                title="Business Picture"
        />
        <CardContent>
            <Text variant="h5" component="h6">
                {storeName}
            </Text>
            <Tags tags={tags} />
            <Text gutterBottom variant="body2" color="textSecondary" component="p">
                {description}
            </Text>
            <Divider light />
            <Text>{storeOwner}</Text>
            <Text>{location}</Text>
            <a href="#" className={classes.link}>Read more</a>
        </CardContent>
        <CardActions className={classes.actions}>
            {needsHelp && (
            <>
                <Button size="small" color="primary" target="_blank">I need help!</Button>
                <Button size="small" color="primary" target="_blank">Contact Owner</Button>
            </>
                )}
        </CardActions>
    </Card>
    );

export default BusinessCard;
