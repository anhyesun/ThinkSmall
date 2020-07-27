import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    IconButton, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { ArrowIcon, DeleteIcon, EditIcon } from './Icons'
import Tags from '../Tags/Tags'
import { deleteBusiness } from '../../actions'

const BusinessItem = ({
    storeName, storeOwner, location, tags, description,
    deleteBusiness, canDelete,
}) => {
    const [expanded, setExpanded] = useState(false)
    return (
        <ListItem
            style={{
                border: '1px solid black',
                borderRadius: '5px',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
            }}
        >
            <div>
                <ListItemText primary={storeName} secondary={description} />
                {expanded && (
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Icon icon="user" size="sm" style={{ margin: 'auto 10px auto 5px' }} />
                            <span>{storeOwner}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Icon icon="map-marker-alt" size="sm" style={{ margin: 'auto 10px auto 5px' }} />
                            <span>{location}</span>
                        </div>
                        {tags.length > 0 && <Tags tags={tags} />}
                    </div>
                )}
            </div>
            <ArrowIcon expanded={expanded} onClick={() => setExpanded(prev => !prev)} />
        </ListItem>
    )
}

export default connect(null, { deleteBusiness })(BusinessItem)
