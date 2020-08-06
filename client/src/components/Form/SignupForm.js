import React, { useState } from 'react'
import { connect } from 'react-redux'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import {
    Button,
    Dialog,
    DialogTitle as Title,
} from '@material-ui/core'
import axios from 'axios'
import {
    Actions,
    Content,
    Input,
    Text,
} from './components'
import { closeForm } from '../../actions'
import classes from '../../modules/form.module.css'

const SignupForm = ({ open = false, closeForm }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [passwordMatchState, setPasswordMatchState] = useState(false)
    const [registrationDuplicate, setRegistrationDuplicate] = useState(false)

    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const onClose = () => closeForm('sign_up')

    async function handleSubmit(event) {
        event.preventDefault()

        if (password !== confirmPassword) {
            setPasswordMatchState(true)
        }

        if (password === confirmPassword) {
            setPasswordMatchState(false)
            await axios.post('/register', {
                email, password, givenName: firstName, familyName: lastName,
            })
            onClose()
        }
    }

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            scroll="paper"
            aria-labelledby="signup-form"
        >
            <Title id="signup-form" disableTypography>Please enter your information in the form or use google to signup</Title>

            <Content>

                <form onSubmit={handleSubmit}>
                    {registrationDuplicate && <Text>This email is already registered</Text>}

                    <Text>First Name</Text>

                    <Input autoFocus margin="dense" fullWidth placeholder="" className="input" onChange={e => setFirstName(e.target.value)} required />

                    <Text>Last Name</Text>
                    <Input margin="dense" fullWidth placeholder="" onChange={e => setLastName(e.target.value)} required />

                    <Text>Email</Text>
                    <Input margin="dense" fullWidth placeholder="" onChange={e => setEmail(e.target.value)} type="email" required />

                    <Text>Password</Text>
                    <Input margin="dense" fullWidth placeholder="" type="password" id="password" onChange={e => setPassword(e.target.value)} required />

                    <Text>Confirm Password</Text>
                    <Input margin="dense" fullWidth placeholder="" type="password" id="confirm_password" onChange={e => setConfirmPassword(e.target.value)} required />

                    {passwordMatchState && <Text>Your Password does not match</Text>}

                    <Actions style={{ padding: '16px 0' }}>

                        <Button style={{ width: '50%' }} variant="outlined" label="Submit" type="submit">Submit</Button>
                        <Button style={{ width: '50%' }} variant="outlined" onClick={onClose}>Cancel</Button>

                    </Actions>

                    <p style={{ textAlign: 'center' }}>or</p>

                    <div style={{ width: 'fit-content', margin: ' 0 auto 50px' }}>
                        <a href="/auth/google">
                            <Button className={classes.google}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png" width={18} height={18} />
                                Sign in with Google
                            </Button>
                        </a>
                    </div>

                </form>

            </Content>

        </Dialog>
    )
}

const mapStateToProps = ({ forms }) => ({ open: forms.sign_up })
export default connect(mapStateToProps, { closeForm })(SignupForm)
