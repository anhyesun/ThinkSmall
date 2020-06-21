import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Tags from './Tags/Tags'
import classes from '../modules/card.module.css'

const VolunteerCard = ({
    avatar, volunteerName, description, tags,
}) => (
    <Card className={classes.root}>
        <CardMedia
            className={classes.media}
            image={avatar}
            title="Volunteer Picture"
        />
        <CardContent>
            <Typography variant="h5" component="h6" style={{ fontFamily: '\'Baloo 2\', cursive' }}>
                {volunteerName}
            </Typography>
            <Typography variant="subtitle1" component="h6">
                <Tags tags={tags} />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {description}
            </Typography>
            <Divider className="MuiDivider-root" light />
        </CardContent>
        <CardActions>
            <Button size="small" color="primary" target="_blank">Read More</Button>
            <Button size="small" color="primary" target="_blank">Start Conversation</Button>
        </CardActions>
    </Card>
)

export default VolunteerCard
