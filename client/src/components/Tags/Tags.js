import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { SelectedChip, UnselectedChip, DottedChip } from './components/index'
import { defaultTags } from '../../constant'

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

export default function Tags({ tags: userTags, canAdd = false }) {
    const classes = useStyles()
    const [tags, setTags] = useState(userTags || defaultTags)
    const selectTag = i => {
        tags[i].selected = !tags[i].selected
        setTags([...tags])
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
