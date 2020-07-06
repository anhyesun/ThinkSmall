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
                    render={renderProps => (
                        <button
                            type="button"
                            className="button"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                        >
                            Log in with Google
                        </button>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
            )}
            {isUserLoggedIn && (
                <div className="userDetails-wrapper">
                    <div className="details-wrapper">
                        <GoogleLogout
                            render={renderProps => (
                                <button
                                    type="button"
                                    className="logout-button"
                                    onClick={renderProps.onClick}
                                >
                                    Log Out
                                </button>
                            )}
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
