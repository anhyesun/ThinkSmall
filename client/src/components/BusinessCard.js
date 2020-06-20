import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import CheckIcon from '@material-ui/icons/Check';
import { connect } from 'react-redux';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Tags from './Tags/Tags';
import classes from '../modules/card.module.css';
import { deleteBusiness, helpToggle } from '../actions';

const Text = withStyles({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
    },
})(Typography);

const BusinessCard = ({
    id, avatar, storeName, tags = [], description, storeOwner, location, needsHelp,
    deleteBusiness, helpToggle,
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
            <div>
                <ToggleButton
                    size="small"
                    value="check"
                    onChange={() => {
                        helpToggle(id);
                    }}
                >
                    Help Needed
                    <CheckIcon />
                </ToggleButton>
            </div>
            {needsHelp && (
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button size="small" color="primary" target="_blank">Help Details</Button>
                    <Button size="small" color="primary" target="_blank">Contact Owner</Button>
                </ButtonGroup>
            )}
            <Button size="small" color="secondary" variant="outlined" onClick={() => { deleteBusiness(id); }}>Delete</Button>
        </CardActions>
    </Card>
);

const mapStateToProps = ({ businesses }) => ({ businesses });

export default connect(mapStateToProps, { deleteBusiness, helpToggle })(BusinessCard);
