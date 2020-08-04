import React, { useState } from 'react'
import {
    Button,
    Dialog, DialogTitle as Title,
    TextareaAutosize as Textarea,
} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import {
    Actions,
    Select, MenuItem,
    Content, ContentText, Text,
} from './components'
import { SelectedChip, UnselectedChip, DottedChip } from '../Tags/components'
import { defaultTags } from '../../constant'
import classes from '../../modules/form.module.css'
import { addRequest, closeForm } from '../../actions'

const Form = ({
    open = false, closeForm, addRequest, owns = [],
}) => {
    const [business, setBusiness] = useState('')
    const [details, setDetails] = useState('')
    const [tags, setTags] = useState(defaultTags)
    const fullScreen = useMediaQuery(useTheme().breakpoints.down('sm'))

    const onClose = () => {
        setDetails('')
        setTags(defaultTags)
        closeForm('request')
    }

    const onSubmit = e => {
        addRequest({
            business,
            details,
            tags: tags
                .filter(({ selected }) => selected)
                .map(({ label }) => ({ label })),
        })
        onClose()
    }

    const selectTag = i => {
        tags[i].selected = !tags[i].selected
        setTags([...tags])
    }

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            aria-labelledby="request-form"
        >
            <Title id="request-form" disableTypography>File a new request</Title>
            <Content>
                <ContentText>
                    To help us best understand your situation,
                    please provide details and type of help required of your business.
                </ContentText>
                <Text>Which business of yours do you need help with?</Text>
                <Select variant="outlined" defaultValue="" value={business} onChange={e => setBusiness(e.target.value)}>
                    {owns.map(({ storeName }, i) => (
                        <MenuItem key={i} value={storeName} dense>
                            {storeName}
                        </MenuItem>
                    ))}
                </Select>
                <Text>Request Details</Text>
                <div className={classes.tags}>
                    {tags.map(({ label, selected }, i) => (
                        selected
                            ? <SelectedChip key={label} label={label} onClick={() => selectTag(i)} />
                            : <UnselectedChip key={label} label={label} onClick={() => selectTag(i)} />
                    ))}
                    <DottedChip />
                </div>
                <Textarea
                    aria-label="details"
                    className={classes.textarea}
                    rowsMin={5}
                    value={details}
                    onChange={e => setDetails(e.target.value)}
                />
            </Content>
            <Actions>
                <Button variant="outlined" onClick={onClose}>Cancel</Button>
                <Button variant="outlined" onClick={onSubmit}>Submit</Button>
            </Actions>
        </Dialog>
    )
}

const mapStateToProps = ({ forms, currentUser }) => ({ open: forms.request, ...currentUser.data })

export default connect(mapStateToProps, { addRequest, closeForm })(Form)
