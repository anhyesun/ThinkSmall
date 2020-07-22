import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
    Button,
    Checkbox,
    FormControlLabel,
    List, ListItem, ListItemText,
    Typography,
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import LoadingIndicator from '../components/Form/components/LoadingIndicator'
import ButtonNavBar from '../components/NavBar/components/ButtonNavBar'
import ProfileCard from '../components/Account/ProfileCard'
import RequestItem from '../components/Account/RequestItem'
import BusinessItem from '../components/Account/BusinessItem'
import { updateUser, getCurrentUser } from '../actions'
import classes from '../modules/card.module.css'

const Text = withStyles({
    root: {
        fontFamily: '\'Baloo 2\', cursive',
    },
})(Typography)

const Title = ({ title }) => <Text style={{ fontWeight: 'bold', marginBottom: '2em' }}>{title}</Text>

const Subtitle = ({ title }) => <Text style={{ fontWeight: 'bold', marginTop: '2em', marginBottom: '1em' }}>{title}</Text>

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

const AccountPage = ({
    loading,
    _id,
    owns = [], // businesses the user owns
    requests = [], // requests submitted by the user
    tasks = [], // requests assigned to the user
    available,
    updateUser, getCurrentUser,
    ...props
}) => {
    const [asVolunteer, setAsVolunteer] = useState(false)

    useEffect(() => {
        const loadCurrentUser = async () => getCurrentUser()
        loadCurrentUser()
    }, [])

    const BusinessTab = () => (
        <>
            <Subtitle title="My Requests" />
            <List>{requests.map((props, i) => <RequestItem key={i} {...props} canDelete />)}</List>
            <Subtitle title="My Businesses" />
            <List>{owns.map((props, i) => <BusinessItem key={i} {...props} canDelete />)}</List>
        </>
    )

    const VolunteerTab = () => (
        <>
            <Subtitle title="My Tasks" />
            <List>{tasks.map((props, i) => <RequestItem key={i} {...props} canDelete />)}</List>
            <Subtitle title="Privacy Preferences" />
            <List>
                <ListItem style={{ alignItems: 'flex-start', fontFamily: '\'Baloo 2\', cursive' }}>
                    <FormControlLabel
                        control={(
                            <Checkbox
                                checked={available}
                                onChange={() => updateUser(_id, { available: !available })}
                            />
                        )}
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
                    <ProfileCard {...props} />
                    <div style={{ marginLeft: '4em', flex: 1 }}>
                        <div>
                            <OutlinedButtons setAsVolunteer={setAsVolunteer} />
                            <Title title="Account" />
                        </div>
                        <ButtonNavBar userType={asVolunteer ? 'volunteer' : 'business'} />
                        {asVolunteer ? <VolunteerTab /> : <BusinessTab />}
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
    getCurrentUser,
    updateUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
