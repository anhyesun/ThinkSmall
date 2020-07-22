import React from 'react'
import {
    Card, CardContent, CardMedia, Typography,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { EditIcon, PhoneIcon } from './Icons'
import Tags from '../Tags/Tags'
import classes from '../../modules/card.module.css'
import placeholder from '../../assets/white-room.jpeg'

const Text = withStyles({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
    },
})(Typography)

const ProfileCard = ({
    givenName, familyName, imageUrl, description, email, phone, supplementaryUrl, tags,
}) => (
    <Card className={classes.profile}>
        <CardMedia className={classes.media} image={imageUrl || placeholder} title="User Picture" />
        <CardContent>
            <Text style={{ fontWeight: 'bold' }}>
                {`${givenName} ${familyName}`}
                <EditIcon />
            </Text>
            <Text style={{ paddingTop: '0.5em' }}>
                {description}
                <EditIcon />
            </Text>
            <Text style={{ paddingTop: '1rem' }}>
                @
                {' '}
                {email}
                <EditIcon />
            </Text>
            <Text>
                <PhoneIcon />
                {phone}
                <EditIcon />
            </Text>
            <Text>
                <a href={supplementaryUrl}>{supplementaryUrl}</a>
                <EditIcon />
            </Text>
            <Tags tags={tags} />
        </CardContent>
    </Card>
)

export default ProfileCard
