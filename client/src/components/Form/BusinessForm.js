import React, { useState } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { connect } from 'react-redux'
import { useTheme } from '@material-ui/core/styles'
import {
    Button,
    Dialog, DialogTitle as Title,
    TextareaAutosize as Textarea,
} from '@material-ui/core'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import ImageUploader from 'react-images-upload'
import S3 from 'react-aws-s3'
import {
    Actions,
    Content, ContentText, Text,
    Input, Autocomplete,
} from './components'
import { addBusiness, closeForm } from '../../actions'
import classes from '../../modules/form.module.css'

const config = {
    bucketName: 'thinksmall',
    region: 'ca-central-1',
    accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
}

const Client = new S3(config)

const Form = ({
    open = false, closeForm, addBusiness, givenName, familyName, email,
}) => {
    const [location, setLocation] = useState('')
    const [storeName, setStoreName] = useState('')
    const [description, setDescription] = useState('')
    const [tags, setTags] = useState([])
    const [file, setFile] = useState()
    const [geolocation, setGeolocation] = useState()
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

    const onSelect = location => {
        geocodeByAddress(location)
            .then(results => getLatLng(results[0]))
            .then(latLng => setGeolocation(latLng))
            .then(() => setLocation(location))
            .catch(error => console.error('Error', error))
    }

    const onClose = () => {
        setStoreName('')
        setLocation('')
        setDescription('')
        closeForm('business')
    }

    const onSubmit = async e => {
        const imageUrl = await onSave(file)
        const business = {
            storeName,
            imageUrl,
            storeOwner: `${givenName} ${familyName}`,
            email,
            location,
            ...geolocation,
            description,
            tags,
        }
        addBusiness(business)
        onClose()
    }

    const onDrop = files => {
        const reader = new FileReader()
        if (files[0]) {
            reader.readAsDataURL(files[0])
            setFile(files[0])
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

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            aria-labelledby="business-form"
        >
            <Title id="business-form" disableTypography>Add a new business</Title>
            <Content>
                <ContentText>
                    To help us best understand your situation,
                    please provide details of your business.
                </ContentText>
                <Text>Name of Business</Text>
                <Input
                    autoFocus
                    margin="dense"
                    fullWidth
                    placeholder="e.g. Hunter & Hare"
                    value={storeName}
                    onChange={e => setStoreName(e.target.value)}
                />
                <Text>Business Icon</Text>
                <ImageUploader
                    buttonText="Choose images"
                    onChange={onDrop}
                    imgExtension={['.jpg', '.jpeg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    singleImage
                    withIcon
                    withPreview
                />
                <Text>Location</Text>
                <Autocomplete value={location} onChange={setLocation} onSelect={onSelect} />
                <Text>Description of Business</Text>
                <Textarea
                    className={classes.textarea}
                    aria-label="description"
                    rowsMin={5}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </Content>
            <Actions>
                <Button variant="outlined" onClick={onClose}>Cancel</Button>
                <Button variant="outlined" onClick={onSubmit}>Submit</Button>
            </Actions>
        </Dialog>
    )
}

const mapStateToProps = ({ forms, currentUser }) => ({ open: forms.business, ...currentUser.data })

export default connect(mapStateToProps, { addBusiness, closeForm })(Form)
