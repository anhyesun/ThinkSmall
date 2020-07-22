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
import classes from '../../../modules/card.module.css'
import placeholder from '../../../assets/white-room.jpeg'

const Text = withStyles({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
    },
})(Typography)

const BusinessCard = ({
    _id, imageUrl, storeName, storeOwner,
    description, shortDescription = description.slice(0, Math.min(100, description.length)),
    location, requests, tags = [],
}) => {
    const [details, setDetails] = useState()
    const [shorten, setShorten] = useState(true)
    const [hover, setHover] = useState(false)
    const requestIcon = useRef(null)
    const getRequest = async id => {
        try {
            const baseUrl = process.env.NODE_ENV === 'production'
                ? process.env.REACT_APP_PRODUCTION_URL
                : process.env.REACT_APP_DEVELOPMENT_URL
            const res = await axios.get(`${baseUrl}/request/${id}`)
            return res.data.data
        } catch (err) {
            console.log(err)
        }
    }
    const RequestIcon = () => (
        <div
            ref={requestIcon}
            className={classes.icon}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Icon icon="meteor" size="xs" style={{ marginRight: 5 }} />
            {requests.length}
        </div>
    )
    const RequestPanel = () => {
        const left = requestIcon?.current?.getBoundingClientRect()?.left + 40

        return (
            <div
                className={classes.panel}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{ left }}
            >
                <div style={{ fontWeight: 'bold' }}>Pending requests</div>
                {details
                    ? details.map(({ details }, i) => (
                        <div key={i} className={classes.request}>
                            {details}
                            <Button variant="contained" className={cx(classes.details, classes.button)}>See Details</Button>
                        </div>
                    ))
                    : <LoadingIndicator />}
            </div>
        )
    }
    useEffect(() => {
        async function loadDetails() {
            setDetails([
                ...await Promise.all(
                    requests.map(request => getRequest(request)),
                ),
            ])
        }
        loadDetails()
    }, [])
    const toggle = () => setShorten(prev => !prev)

    return (
        <Card className={classes.root} style={{ overflow: 'visible' }}>
            <CardMedia
                className={classes.media}
                image={imageUrl || placeholder}
                title="Business Picture"
            />
            <CardContent>
                <Text variant="h5" component="h6" style={{ display: 'flex' }}>
                    {storeName}
                    {requests.length > 0 && <RequestIcon />}
                    {hover && requests.length > 0 && <RequestPanel />}
                </Text>
                <Tags tags={tags} />
                <Text gutterBottom variant="body2" color="textSecondary" component="p">
                    {shorten ? shortDescription : description}
                    {shorten && shortDescription.length < description.length && '...'}
                </Text>
                <a className={classes.link} onClick={toggle} style={{ fontSize: 'smaller' }}>Read more</a>
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
                    See Details
                </Button>
                <Button
                    className={classes.button}
                    size="small"
                    variant="contained"
                    target="_blank"
                    style={{ width: '100%', height: 36 }}
                >
                    Contact Owner
                </Button>
            </CardActions>
        </Card>
    )
}

export default BusinessCard
