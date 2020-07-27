import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import clsx from 'clsx'
import {
    Button, ButtonGroup,
    Checkbox,
    FormControlLabel,
    List, ListItem, ListItemText,
    Typography,
} from '@material-ui/core'
import LoadingIndicator from '../components/Form/components/LoadingIndicator'
import ProfileCard from '../components/Account/ProfileCard'
import RequestItem from '../components/Account/RequestItem'
import BusinessItem from '../components/Account/BusinessItem'
import { updateUser, getCurrentUser, openForm } from '../actions'
import classes from '../modules/account.module.css'
import filler from '../assets/plant.svg'

const Title = ({ title }) => <Typography className={classes.title}>{title}</Typography>
const Subtitle = ({ title }) => <Typography className={classes.subtitle}>{title}</Typography>
const Filler = ({ title, subtitle }) => (
    <div style={{ padding: 50, borderRadius: 5, background: '#fafafa' }}>
        <img src={filler} style={{ width: 30, margin: '0 auto 20px', display: 'block' }} />
        <p style={{
            textAlign: 'center', margin: 0, fontSize: 'small', color: '#333',
        }}
        >
            {title}
        </p>
        <p style={{
            textAlign: 'center', margin: 0, fontSize: 'x-small', color: '#333',
        }}
        >
            {subtitle}
        </p>
    </div>
)

const AccountPage = ({
    loading,
    _id,
    owns = [], // businesses the user owns
    requests = [], // requests submitted by the user
    tasks = [], // requests assigned to the user
    available,
    updateUser, getCurrentUser, openForm,
    ...props
}) => {
    const [asOwner, setAsOwner] = useState(true)
    const actions = [
        { title: 'Request Help', action: () => openForm('request') },
        { title: 'Register Store', action: () => openForm('business') },
    ]

    useEffect(() => {
        const loadCurrentUser = async () => getCurrentUser()
        loadCurrentUser()
    }, [])

    const BusinessTab = () => (
        <>
            <Subtitle title="My Requests" />
            {requests.length > 0
                ? (
                    <List>
                        {requests.map((props, i) => <RequestItem key={i} {...props} canDelete />)}
                    </List>
                )
                : (
                    <Filler
                        title="No request"
                        subtitle="Click 'Request Help' to submit a new request!"
                    />
                )}
            <Subtitle title="My Businesses" />
            {owns.length > 0
                ? (
                    <List>
                        {owns.map((props, i) => <BusinessItem key={i} {...props} canDelete />)}
                    </List>
                )
                : (
                    <Filler
                        title="No business"
                        subtitle="Click 'Register Store' to add your business!"
                    />
                )}
        </>
    )

    const VolunteerTab = () => (
        <>
            <Subtitle title="My Tasks" />
            {tasks.length > 0
                ? (
                    <List>
                        {tasks.map((props, i) => <RequestItem key={i} {...props} canDelete />)}
                    </List>
                )
                : (
                    <Filler
                        title="No task"
                        subtitle="Start picking up on new tasks today!"
                    />
                )}
            <Subtitle title="Privacy Preferences" />
            <List>
                <ListItem style={{ alignItems: 'flex-start', fontFamily: '\'Baloo 2\', cursive' }}>
                    <FormControlLabel
                        control={(
                            <Checkbox
                                checked={available}
                                onChange={() => updateUser(_id, { available: !available })}
                                color="primary"
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

    const OutlinedButtons = () => (
        <ButtonGroup className={classes.buttons} size="small" disableElevation>
            <Button
                className={clsx(classes.button, asOwner && classes.selected)}
                onClick={() => { setAsOwner(true) }}
            >
                Business Owner
            </Button>
            <Button
                className={clsx(classes.button, !asOwner && classes.selected)}
                onClick={() => { setAsOwner(false) }}
            >
                Volunteer
            </Button>
        </ButtonGroup>
    )

    const ActionButtons = () => (
        <div className={classes.actions}>
            {actions.map(({ title, action }) => (
                <Button
                    key={title}
                    variant="outlined"
                    onClick={action}
                >
                    {title}
                </Button>
            ))}
        </div>
    )

    return (
        loading
            ? <LoadingIndicator />
            : (
                <div className={classes.root}>
                    <div>
                        <ProfileCard {...props} />
                        <ActionButtons />
                    </div>
                    <div className={classes.details}>
                        <div>
                            <Title title="Account" />
                            <OutlinedButtons />
                        </div>
                        {asOwner ? <BusinessTab /> : <VolunteerTab />}
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
    openForm,
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
