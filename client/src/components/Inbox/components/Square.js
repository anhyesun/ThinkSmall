import React from 'react'

const styles = {
    square: {
        sm: {
            borderRadius: 5,
            display: 'flex',
            width: 20,
            height: 20,
            marginRight: 2.5,
        },
        md: {
            borderRadius: 10,
            display: 'flex',
            width: 35,
            height: 35,
            margin: 'auto 10px auto 0',
        },
        lg: {
            borderRadius: 10,
            display: 'flex',
            width: 50,
            height: 50,
            cursor: 'pointer',
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
        },
    },
}

export default ({ type, color, user }) => (
    <>
        {!user.src && (
            <div style={{ ...styles.square[type], background: color }}>
                <p style={{ margin: 'auto' }}>{user.name.charAt(0)}</p>
            </div>
        )}
        {user.src && <img src={user.src} style={styles.square[type]} alt={user.name} />}
    </>
)
