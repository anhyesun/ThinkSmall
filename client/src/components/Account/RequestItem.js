import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    Chip, IconButton,
    ListItem, ListItemText,
} from '@material-ui/core'
import { ArrowIcon, DeleteIcon, EditIcon } from './Icons'
import { deleteRequest, openForm } from '../../actions'
import { now } from '../../reducers/helper'

const RequestItem = ({
    _id, storeName, details, status, createdAt, deleteRequest, setId, openForm,
}) => {
    const [expanded, setExpanded] = useState(false)
    const [open, setOpen] = useState(false)
    return (
        <ListItem
            style={{
                border: '1px solid black',
                borderRadius: '5px',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                margin: '5px auto',
            }}
        >
            <div>
                <ListItemText primary={storeName} secondary={details} />
                <div>
                    <IconButton onClick={() => {
                        setId(_id)
                        openForm('request')
                        setOpen(!open)
                    }}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => deleteRequest(_id)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
                <Chip label={status} color="primary" variant="outlined" size="small" style={{ fontFamily: `'Baloo 2', cursive` }} />
                {expanded && (
                    <p style={{ fontSize: 'small', marginBottom: 0 }}>
                        Created at
                        {' '}
                        {now(createdAt)}
                    </p>
                )}
            </div>
            <ArrowIcon expanded={expanded} onClick={() => setExpanded(prev => !prev)} />
        </ListItem>
    )
}

export default connect(null, { deleteRequest, openForm })(RequestItem)
