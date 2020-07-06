import React, { useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { SelectedChip, UnselectedChip, DottedChip } from './components/index'
import { defaultTags } from '../../constant'
import { setFilters } from '../../actions'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}))

function Tags({
    tags: userTags, canAdd = false, canSelect = false, filters, setFilters,
}) {
    const classes = useStyles()
    const [tags, setTags] = useState(userTags || defaultTags)
    const selectTag = i => {
        if (canSelect) {
            tags[i].selected = !tags[i].selected
            setTags([...tags])
            if (tags[i].selected) setFilters([...filters, tags[i].label])
            else setFilters([...filters.filter(tag => tag !== tags[i].label)])
        }
    }

    return (
        <div className={classes.root}>
            {tags.map(({ label, selected }, i) => (
                <div key={i}>
                    {selected
                        ? <SelectedChip label={label} onClick={() => selectTag(i)} />
                        : <UnselectedChip label={label} onClick={() => selectTag(i)} />}
                </div>
            ))}
            {canAdd && <DottedChip />}
        </div>
    )
}

export default connect(({ filters }) => ({ filters }), { setFilters })(Tags)
