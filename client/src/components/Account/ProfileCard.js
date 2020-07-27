import React from 'react'
import {
    Button, Card, CardContent, CardMedia, Typography,
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
            <Text style={{ fontWeight: 'bold' }}>{`${givenName} ${familyName}`}</Text>
            {description && <Text style={{ paddingTop: '0.5em' }}>{description}</Text>}
            {email && <Text style={{ paddingTop: '1rem' }}>{`@ ${email}`}</Text>}
            {phone && (
                <Text>
                    <PhoneIcon />
                    {' '}
                    {phone}
                </Text>
            )}
            {supplementaryUrl && (
                <Text>
                    <a href={supplementaryUrl}>{supplementaryUrl}</a>
                </Text>
            )}
            {tags.length > 0 && <Tags tags={tags} />}
            <Button
                style={{
                    textTransform: 'capitalize', width: '100%', borderColor: 'black', marginTop: '1rem',
                }}
                size="small"
                variant="outlined"
            >
                Edit
                {' '}
                <EditIcon />
            </Button>
        </CardContent>
    </Card>
)

export default ProfileCard
