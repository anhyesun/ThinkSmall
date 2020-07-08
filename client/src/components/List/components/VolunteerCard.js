import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/styles/withStyles'
import Tags from '../../Tags/Tags'
import classes from '../../../modules/card.module.css'

const Text = withStyles({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
    },
})(Typography)

const VolunteerCard = ({
    imageUrl, givenName, familyName, description, tags,
}) => (
    <Card className={classes.root}>
        <CardMedia
            className={classes.media}
            image={imageUrl}
            title="Volunteer Picture"
        />
        <CardContent>
            <Text variant="h5" component="h6">
                {`${givenName} ${familyName}`}
            </Text>
            <Tags tags={tags} />
            <Text gutterBottom variant="body2" color="textSecondary" component="p">
                {description}
            </Text>
        </CardContent>
        <CardActions style={{ padding: 16 }}>
            <Button
                className={classes.button}
                size="small"
                variant="contained"
                target="_blank"
                style={{ width: '100%', height: 36 }}
            >
                Read More
            </Button>
            <Button
                className={classes.button}
                size="small"
                variant="contained"
                target="_blank"
                style={{ width: '100%', height: 36 }}
            >
                Start Conversation
            </Button>
        </CardActions>
    </Card>
)

export default VolunteerCard
