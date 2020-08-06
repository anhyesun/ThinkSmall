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

const LoginForm = ({ open = false, closeForm }) => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [loginSuccess, setloginSuccess] = useState(false)

    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const onClose = () => closeForm('login')

    async function handleSubmit(event) {
        event.preventDefault()
        await axios.post('/login', {
            email, password,
        })
        window.location.reload(true)
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
                    <Input margin="dense" fullWidth placeholder="" type="password" id="password" onChange={e => setPassword(e.target.value)} required />

                    {loginSuccess && <Text>Login Credentials Invalid</Text>}

                    <Actions>

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

const mapStateToProps = ({ forms }) => ({ open: forms.login })

export default connect(mapStateToProps, { closeForm })(LoginForm)
