import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Square from './Square';

const colors = ['#FFC759', '#FF7B9C', '#607196', '#BABFD1'];
const useStyles = makeStyles({
    card: {
        display: 'flex',
        margin: 5,
    },
    timestamp: {
        fontSize: 11,
        fontWeight: 'normal',
        color: '#686868',
    },
});

const Card = ({
 id, message, timestamp, users,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.card}>
            <Square type="md" color={colors[id]} user={users[id]} />
            <div style={{ fontSize: 'small' }}>
                <span style={{ fontWeight: 600 }}>
                    {users[id].name}
                    {' '}
                    <span className={classes.timestamp}>{timestamp}</span>
                </span>
                <div>{message}</div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(Card);
