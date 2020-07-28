import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import classes from '../../../modules/nav.module.css'
import { openForm } from '../../../actions'

const ButtonNavBar = ({ openForm }) => {
    const actions = [
        { title: 'Sign Up', action: () => openForm('sign_up') },
        { title: 'Login', action: () => openForm('login') },
    ]

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            margin: '0 10px',
        }}
        >
            {actions.map(({ title, action }) => (
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
