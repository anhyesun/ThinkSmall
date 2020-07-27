import React from 'react'

const styles = {
    square: {
        sm: {
            borderRadius: 5,
            display: 'flex',
            width: 20,
            height: 20,
            marginRight: 2.5,
            objectFit: 'cover',
        },
        md: {
            borderRadius: 10,
            display: 'flex',
            width: 35,
            height: 35,
            margin: 'auto 10px auto 0',
            objectFit: 'cover',
        },
        lg: {
            borderRadius: 10,
            display: 'flex',
            width: 50,
            height: 50,
            cursor: 'pointer',
            objectFit: 'cover',
        },
        pr: {
            border: '1px solid #bbb',
            borderRadius: 10,
            color: '#888',
            cursor: 'pointer',
            display: 'flex',
            height: 50,
            margin: '5px auto',
            width: 50,
            objectFit: 'cover',
        },
    },
}

export default ({ type, color, user }) => (
    <>
        {user.imageUrl
            ? <img src={user.imageUrl} style={styles.square[type]} alt={user.givenName} />
            : (
                <div style={{ ...styles.square[type], background: color }}>
                    <p style={{ margin: 'auto' }}>{user.givenName.charAt(0)}</p>
                </div>
            )}
    </>
)
