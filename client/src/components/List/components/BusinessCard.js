import React, { useState, useRef, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/styles/withStyles'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'
import axios from 'axios'
import Tags from '../../Tags/Tags'
import { LoadingIndicator } from '../../Form/components'
import DetailsForm from '../../Form/DetailsForm'
import classes from '../../../modules/card.module.css'
import placeholder from '../../../assets/white-room.jpeg'

const Text = withStyles({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
    },
})(Typography)

const BusinessCard = ({
    _id, imageUrl, storeName, storeOwner, email,
    description, shortDescription = description.slice(0, Math.min(100, description.length)),
    location, requests, tags = [],
}) => {
    const [open, setOpen] = useState(false)
    const [details, setDetails] = useState()
    const [shorten, setShorten] = useState(true)
    const [hover, setHover] = useState(false)
    const toggle = () => setShorten(prev => !prev)
    const getRequest = async id => {
        try {
            const res = await axios.get(`/request/${id}`)
            return res.data.data
        } catch (err) {
            console.error(err)
        }
    }
    const RequestIcon = () => (
        <div
            className={classes.icon}
            onClick={() => setOpen(true)}
        >
            <Icon icon="meteor" size="xs" style={{ marginRight: 5 }} />
            {requests.length}
        </div>
    )
    const ReadMore = () => (
        <a className={classes.link} onClick={toggle} style={{ fontSize: 'smaller' }}>
            {shorten ? ' Read more' : ' Show less'}
        </a>
    )
    useEffect(() => {
        async function loadDetails() {
            setDetails([
                ...await Promise.all(
                    requests.map(request => getRequest(request)),
                ),
            ])
        }
        loadDetails()
    }, [_id])

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={imageUrl || placeholder}
                title="Business Picture"
            />
            <CardContent>
                <Text variant="h5" component="h6" style={{ display: 'flex' }}>
                    {storeName}
                    {requests.length > 0 && <RequestIcon />}
                </Text>
                <Tags tags={tags} />
                <Text gutterBottom variant="body2" color="textSecondary" component="p" style={{ minHeight: 91 }}>
                    {shorten ? shortDescription : description}
                    {shorten && shortDescription.length < description.length && '...'}
                    {shortDescription.length < description.length && <ReadMore />}
                </Text>
                <Divider light style={{ margin: '10px auto' }} />
                <div style={{ display: 'flex', alignItems: 'center', fontSize: 'small' }}>
                    <Icon icon="user" size="sm" style={{ margin: 'auto 10px auto 5px' }} />
                    <span>{storeOwner}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', fontSize: 'small' }}>
                    <Icon icon="map-marker-alt" size="sm" style={{ margin: 'auto 10px auto 5px' }} />
                    <span>{location}</span>
                </div>
            </CardContent>
            <CardActions style={{ padding: 16 }}>
                <Button
                    className={classes.button}
                    size="small"
                    variant="contained"
                    target="_blank"
                    style={{ width: '100%', height: 36 }}
                >
                    <a href={`mailto:${email}?subject=Hello from ThinkSmall&body=Dear ${storeOwner},`}>Contact Owner</a>
                </Button>
            </CardActions>
            <DetailsForm details={details} open={open} closeForm={() => setOpen(false)} />
        </Card>
    )
}

export default BusinessCard
