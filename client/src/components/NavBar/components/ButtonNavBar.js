import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import classes from '../../../modules/nav.module.css'
import { openForm } from '../../../actions'

const ButtonNavBar = ({ userType, openForm }) => {
    const options = {
        business: [
            { title: 'Request Help', action: () => openForm('request') },
            { title: 'Register Store', action: () => openForm('business') },
        ],
        volunteer: [
            { title: 'Provide Help', action: () => openForm('help') },
            { title: 'Register User', action: () => openForm('volunteer') },
        ],
        entry: [
            { title: 'Sign Up', action: () => openForm('sign_up') },
            { title: 'Login', action: () => openForm('login') },
        ],
    }
    return (
        <div>
            {options[userType].map(({ title, action }) => (
                <Button
                    key={title}
                    className={classes.button}
                    variant="outlined"
                    onClick={action}
                >
                    {title}
                </Button>
            ))}
        </div>
    )
}

export default connect(null, { openForm })(ButtonNavBar)
