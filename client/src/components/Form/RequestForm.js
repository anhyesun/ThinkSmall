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
import Tags from '../Tags/Tags'
import classes from '../../modules/form.module.css'
import { addBusiness, saveRequest, closeForm } from '../../actions'

const Form = ({ open = false, closeForm, saveRequest }) => {
    const [business, setBusiness] = useState('')
    const [details, setDetails] = useState('')
    const [tags, setTags] = useState([])
    const fullScreen = useMediaQuery(useTheme().breakpoints.down('sm'))

    const onClose = () => {
        setDetails('')
        setTags([])
        closeForm('request')
    }

    const onSubmit = e => {
        saveRequest({ business, details, tags })
        onClose()
    }

    // TODO: replace with actual list of businesses owned by the authenticated business owner
    const businesses = [
        { storeName: 'Hunter & Hare' },
        { storeName: 'Tenth and Proper' },
    ]

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
                    {businesses.map(({ storeName }, i) => (
                        <MenuItem key={i} value={storeName} dense>
                            {storeName}
                        </MenuItem>
                    ))}
                </Select>
                <Text>Request Details</Text>
                <Tags canAdd />
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

const mapStateToProps = ({ forms }) => ({ open: forms.request })

export default connect(mapStateToProps, { addBusiness, saveRequest, closeForm })(Form)
