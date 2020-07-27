import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Square from './Square'

const useStyles = makeStyles({
    card: {
        display: 'flex',
        margin: 5,
    },
    timestamp: {
        fontSize: 11,
        fontWeight: 'normal',
        color: '#686868',
    },
})

const Card = ({
    message, timestamp, user,
}) => {
    const classes = useStyles()

    return (
        <div className={classes.card}>
            <Square type="md" color={user.color} user={user} />
            <div style={{ fontSize: 'small' }}>
                <span style={{ fontWeight: 600 }}>
                    {`${user.givenName} ${user.familyName}`}
                    {' '}
                    <span className={classes.timestamp}>{timestamp}</span>
                </span>
                <div>{message}</div>
            </div>
        </div>
    )
}

export default Card
