import React, { useState } from 'react'
import GoogleLogin, { GoogleLogout } from 'react-google-login'

const LoginByGoogle = () => {
    const [userDetails, setUserDetails] = useState({})
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

    const responseGoogle = response => {
        setUserDetails(response.profileObj)
        setIsUserLoggedIn(true)
    }

    const logout = () => setIsUserLoggedIn(false)

    return (
        <div className="App">
            {!isUserLoggedIn && (
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_KEY}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
            )}
            {isUserLoggedIn && (
                <div className="userDetails-wrapper">
                    <div className="details-wrapper">
                        <GoogleLogout
                            buttonText="Logout"
                            onLogoutSuccess={logout}
                        />
                        <div className="image">
                            <img src={userDetails.imageUrl} />
                        </div>
                        <div className="name">
                            Welcome
                            {' '}
                            {userDetails.givenName}
                            {' '}
                            {userDetails.familyName}
                        </div>
                        <div className="email"><i>{userDetails.email}</i></div>
                    </div>
                    <div className="bar" />
                    <div className="stand" />
                </div>
            )}
        </div>
    )
}

export default LoginByGoogle
