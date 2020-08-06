import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import {
    Button,
    Dialog,
    DialogTitle as Title,
} from '@material-ui/core'
import { Actions, Content } from './components'
import RequestItem from '../Account/RequestItem'

const DetailsForm = ({ open, closeForm, details = [] }) => {
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Dialog
            fullWidth
            maxWidth={'sm'}
            fullScreen={fullScreen}
            open={open}
            aria-labelledby="details-form"
        >
            <Title id="details-form" disableTypography>Request Details</Title>
            <Content>
                {details.map((request, i) => <RequestItem key={i} {...request} />)}
            </Content>
            <Actions>
                <Button variant="outlined" onClick={closeForm}>Go back</Button>
            </Actions>
        </Dialog>
    )
}

export default DetailsForm
