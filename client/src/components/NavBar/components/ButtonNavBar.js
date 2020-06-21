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
    }
    return (
        <div className={classes.flex}>
            {options[userType].map(({ title, action }) => (
                <Button
                    key={title}
                    className={classes.button}
                    variant="outlined"
                    onClick={action}
                    style={{ fontFamily: 'inherit', fontSize: 'small', marginLeft: 10 }}
                >
                    {title}
                </Button>
            ))}
        </div>
    )
}

export default connect(null, { openForm })(ButtonNavBar)
