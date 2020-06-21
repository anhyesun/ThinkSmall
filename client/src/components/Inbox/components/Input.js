import React, { useState } from 'react'
import { useKeyPressEvent } from 'react-use'
import { makeStyles } from '@material-ui/styles'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { push } from '../../../actions'

const useStyles = makeStyles({
    root: {
        marginTop: 10,
    },
    input: {
        background: 'transparent',
        padding: 5,
        borderRadius: '5px 0 0 5px',
        border: '1px solid',
        borderRight: 'none',
        boxSizing: 'border-box',
        fontFamily: '\'Baloo 2\', cursive',
        marginLeft: 5,
        width: 'calc(100% - 44px)',
    },
    button: {
        background: 'transparent',
        padding: '5px 10px',
        border: '1px solid',
        borderLeft: 'none',
        borderRadius: '0 5px 5px 0',
        cursor: 'pointer',
        fontFamily: '\'Baloo 2\', cursive',
    },
})

const Input = ({
    uid = 0, iid = 0, push,
}) => {
    const classes = useStyles()
    const [message, setMessage] = useState('')
    const pushMessage = () => {
        if (message) {
            push(uid, iid, message)
            setMessage('')
        }
    }

    useKeyPressEvent('Enter', pushMessage)

    return (
        <div className={classes.root}>
            <input className={classes.input} value={message} onChange={e => setMessage(e.target.value)} type="text" />
            <button className={classes.button} onClick={pushMessage} type="button">
                <Icon icon="paper-plane" style={{ color: message ? '#00aa8d' : 'inherit' }} />
            </button>
        </div>
    )
}

export default connect(({ id: uid, conversation: iid }) => ({ uid, iid }), { push })(Input)
