import React, { useState } from 'react'
import { connect } from 'react-redux'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import {
    Button,
    Dialog,
    DialogTitle as Title,
    TextareaAutosize as Textarea,
} from '@material-ui/core'
import {
    Actions,
    Content,
    ContentText,
    Input,
    Text,
} from './components'
import Tags from '../Tags/Tags'
import { closeForm } from '../../actions'
import LoginByGoogle from '../LoginByGoogle'

const LoginForm = ({ open = false, closeForm }) => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const onClose = () => closeForm('login')

    function handleSubmit(event) {
        event.preventDefault()
        onClose()
    }

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            aria-labelledby="login-form"
            maxWidth="md"
        >
            <Title id="signup-form" disableTypography>Please enter your email and password to login!</Title>

            <Content>

                <form onSubmit={handleSubmit}>

                    <Text>Email</Text>
                    <Input autoFocus margin="dense" fullWidth placeholder="" onChange={e => setEmail(e.target.value)} type="email" required />

                    <Text>Password</Text>
                    <Input autoFocus margin="dense" fullWidth placeholder="" type="password" id="password" onChange={e => setPassword(e.target.value)} required />

                    <Actions>

                        <Button style={{ width: '50%' }} variant="outlined" label="Submit" type="submit">Submit</Button>
                        <Button style={{ width: '50%' }} variant="outlined" onClick={onClose}>Cancel</Button>

                    </Actions>

                    <hr />

                    <LoginByGoogle />

                    <br />

                </form>
            </Content>

        </Dialog>
    )
}

const mapStateToProps = ({ forms }) => ({ open: forms.login })

export default connect(mapStateToProps, { closeForm })(LoginForm)
