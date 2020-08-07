import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import {
    Button, Card, CardContent, CardMedia, Typography, TextField,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import S3 from 'react-aws-s3'
import { EditIcon, PhoneIcon, SaveIcon } from './Icons'
import Tags from '../Tags/Tags'
import { updateUser } from '../../actions'
import classes from '../../modules/card.module.css'
import placeholder from '../../assets/white-room.jpeg'

const Text = withStyles({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
    },
})(Typography)

const config = {
    bucketName: 'thinksmall',
    region: 'ca-central-1',
    accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
}

const Client = new S3(config)

const ProfileCard = ({
    _id,
    givenName, familyName,
    description, email, phone,
    imageUrl, supplementaryUrl, tags,
    updateUser,
}) => {
    const [image, setImage] = useState()
    const [canEdit, setEdit] = useState(false)
    const profile = {
        givenName: useRef(null),
        familyName: useRef(null),
        description: useRef(null),
        email: useRef(null),
        phone: useRef(null),
        imageUrl: useRef(null),
        supplementaryUrl: useRef(null),
        tags: useRef(null),
    }
    const allowEdit = () => setEdit(true)
    const disableEdit = () => setEdit(false)

    const onSubmit = async () => {
        // const imageUrl = await onSave(image)
        updateUser(_id, {
            givenName: profile.givenName.current.value,
            familyName: profile.familyName.current.value,
            description: profile.description.current.value,
            email: profile.email.current.value,
            phone: profile.phone.current.value,
            imageUrl,
            supplementaryUrl: profile.supplementaryUrl.current.value,
            tags,
        })
        disableEdit()
    }

    const onDrop = e => {
        const reader = new FileReader()
        const file = e.target.files[0]
        reader.onload = () => {
            if (file) {
                reader.readAsDataURL(file)
                // setProfile({ ...profile, imageUrl: file })
            }
        }
    }

    async function onSave(file) {
        if (file) {
            try {
                const res = await Client.uploadFile(file)
                return res.location
            } catch (err) {
                console.log(err)
            }
        }
    }

    const fields = [{
        key: 'givenName',
        label: 'Given Name',
        defaultValue: givenName,
    }, {
        key: 'familyName',
        label: 'Family Name',
        defaultValue: familyName,
    }, {
        key: 'description',
        label: 'Description',
        defaultValue: description,
    }, {
        key: 'email',
        label: 'Email',
        defaultValue: email,
    }, {
        key: 'phone',
        label: 'Phone Number',
        defaultValue: phone,
    }, {
        key: 'supplementaryUrl',
        label: 'Resume/Portfolio',
        defaultValue: supplementaryUrl,
    }]

    const StaticInfo = () => (
        <>
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
                onClick={allowEdit}
            >
                Edit
                {' '}
                <EditIcon />
            </Button>
        </>
    )

    const DynamicInfo = () => (
        <>
            {fields.map(({ key, ...props }) => (
                <TextField
                    key={key}
                    className={classes.field}
                    inputRef={profile[key]}
                    fullWidth
                    {...props}
                />
            ))}
            {tags.length > 0 && <Tags tags={tags} />}
            <Button
                style={{
                    textTransform: 'capitalize', width: '100%', borderColor: 'black', marginTop: '1rem',
                }}
                size="small"
                variant="outlined"
                onClick={onSubmit}
            >
                Save
                {' '}
                <SaveIcon style={{ marginLeft: '.5em' }} />
            </Button>
            <Button
                style={{
                    textTransform: 'capitalize', width: '100%', marginTop: '.5rem',
                }}
                size="small"
                onClick={disableEdit}
            >
                Cancel
            </Button>
        </>
    )

    return (
        <Card className={classes.profile}>
            <CardMedia className={classes.media} image={imageUrl || placeholder} title="User Picture" />
            <CardContent>
                {canEdit ? <DynamicInfo /> : <StaticInfo />}
            </CardContent>
        </Card>
    )
}

export default connect(null, { updateUser })(ProfileCard)
