import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Chip from '@material-ui/core/Chip'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined'
import LoadingIndicator from './Form/components/LoadingIndicator'
import ButtonNavBar from './NavBar/components/ButtonNavBar'
import Tags from './Tags/Tags'
import placeholder from '../assets/white-room.jpeg'
import {
    deleteBusiness, deleteRequest, updateUser, getUserById,
} from '../actions'
import classes from '../modules/card.module.css'

const Text = withStyles({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
    },
})(Typography)

const Title = ({ title }) => <Text style={{ fontWeight: 'bold', marginBottom: '2em' }}>{title}</Text>

const Subtitle = ({ title }) => <Text style={{ fontWeight: 'bold', marginTop: '2em', marginBottom: '1em' }}>{title}</Text>

const EditIcon = () => <CreateOutlinedIcon fontSize="small" style={{ color: 'grey', width: '1em', height: '0.7em' }} />

const PhoneIcon = () => <PhoneIphoneOutlinedIcon fontSize="small" style={{ color: 'grey', width: '1em', height: '0.7em' }} />

const DeleteIcon = () => <DeleteOutlinedIcon fontSize="small" color="secondary" />

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            float: 'right',
        },
    },
    buttons: {
        marginLeft: 'auto',
        fontFamily: '\'Baloo 2\', cursive',
    },
}))

const OutlinedButtons = ({ setAsVolunteer }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Button onClick={() => { setAsVolunteer(true) }} variant="contained" color="secondary" size="small" className={classes.buttons}>
                Volunteer
            </Button>
            <Button onClick={() => { setAsVolunteer(false) }} variant="contained" color="primary" size="small" className={classes.buttons}>
                Business Owner
            </Button>
        </div>
    )
}

const Account = ({
    loading,
    _id,
    tags = [],
    owns = [], // businesses the user owns
    requests = [], // requests submitted by the user
    tasks = [], // requests assigned to the user
    available,
    givenName, familyName,
    email,
    phone,
    imageUrl,
    supplementaryUrl, // resume/portfolio link
    description,
    deleteBusiness, deleteRequest, updateUser, getUserById,
}) => {
    const [asVolunteer, setAsVolunteer] = useState(false)
    const loadCurrentUser = async () => getUserById(_id)

    useEffect(() => {
        loadCurrentUser()
    }, [])

    const handleChange = () => updateUser({ _id, available: !available })
    const UserProfile = () => (
        <Card style={{
            border: '1.5px solid grey',
            borderRadius: '5px',
            boxShadow: 'none',
            color: 'black',
            transitionDuration: '0.3s',
            textAlign: 'center',
        }}
        >
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
    const BusinessTab = () => (
        <>
            <Subtitle title="My Requests" />
            <List>
                {requests.map(({
                    _id, business, details, status,
                }) => (
                        <ListItem
                            key={_id}
                            style={{
                                borderWidth: '1.5px',
                                borderColor: 'grey',
                                borderStyle: 'solid',
                                borderRadius: '5px',
                                alignItems: 'flex-start',
                            }}
                        >
                            <ListItemText primary={business} secondary={details} />
                            <Chip label={status} color="primary" variant="outlined" size="small" />
                            <ListItemIcon>
                                <IconButton onClick={() => deleteRequest(_id)}>
                                    <DeleteIcon />
                                </IconButton>
                                <ArrowDropDownRoundedIcon />
                            </ListItemIcon>
                        </ListItem>
                    ))}
            </List>
            <Subtitle title="My Businesses" />
            <List>
                {owns.map(({ _id, storeName, description }) => (
                    <ListItem
                        key={_id}
                        style={{
                            borderWidth: '1.5px',
                            borderColor: 'grey',
                            borderStyle: 'solid',
                            borderRadius: '5px',
                            alignItems: 'flex-start',
                        }}
                    >
                        <Text style={{ fontWeight: 'bold' }}>
                            {storeName}
                            <Text>
                                {description}
                                <ListItemIcon>
                                    <ArrowDropDownRoundedIcon />
                                </ListItemIcon>
                            </Text>
                        </Text>
                        <ListItemIcon>
                            <EditIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemIcon>
                            <IconButton onClick={() => deleteBusiness(_id)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemIcon>
                    </ListItem>
                ))}
            </List>
        </>
    )
    const VolunteerTab = () => (
        <>
            <Subtitle title="My Tasks" />
            <List>
                {tasks.map(({
                    _id, business, details, status,
                }) => (
                        <ListItem
                            key={_id}
                            style={{
                                borderWidth: '1.5px',
                                borderColor: 'grey',
                                borderStyle: 'solid',
                                borderRadius: '5px',
                                alignItems: 'flex-start',
                            }}
                        >
                            <ListItemText primary={business} secondary={details} />
                            <Chip label={status} color="primary" variant="outlined" size="small" />
                            <ListItemIcon>
                                <ArrowDropDownRoundedIcon />
                            </ListItemIcon>
                        </ListItem>
                    ))}
            </List>
            <Subtitle title="Privacy Preferences" />
            <List>
                <ListItem style={{ alignItems: 'flex-start', fontFamily: '\'Baloo 2\', cursive' }}>
                    <FormControlLabel
                        control={<Checkbox checked={available} onChange={handleChange} />}
                    />
                    <ListItemText
                        primary="Mark myself as available"
                        secondary="When checked, your profile will be available to everyone on the Volunteers page."
                    />
                </ListItem>
            </List>
        </>
    )

    return (
        loading
            ? <LoadingIndicator />
            : (
                <div className={classes.accounts}>
                    <UserProfile />
                    <div style={{ marginLeft: '4em' }}>
                        <div>
                            <OutlinedButtons setAsVolunteer={setAsVolunteer} />
                            <Title title="Account" />
                        </div>
                        <ButtonNavBar userType={asVolunteer ? 'volunteer' : 'business'} />
                        {asVolunteer && <VolunteerTab />}
                        {!asVolunteer && <BusinessTab />}
                    </div>
                </div>
            )
    )
}

const mapStateToProps = ({ _id = '5f0932a99eeb33d77955d15c', currentUser }) => ({
    _id,
    loading: currentUser.loading,
    ...currentUser.data,
})

const mapDispatchToProps = {
    deleteBusiness,
    deleteRequest,
    updateUser,
    getUserById,
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
