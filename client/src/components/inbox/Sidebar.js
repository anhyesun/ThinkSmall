import React from 'react';
import { connect } from 'react-redux';
import { setConversation } from '../../actions';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const Title = withStyles({
    root: {
        padding: '5px 15px 0',
        margin: '5px auto',
        fontWeight: 600,
        fontFamily: '\'Baloo 2\', cursive',
        fontSize: 'small',
    }
})(Typography);

const Subtitle = withStyles({
    root: {
        padding: '5px 15px',
        margin: '5px auto',
        cursor: 'pointer',
        fontFamily: '\'Baloo 2\', cursive',
        fontSize: 'small',
    }
})(Typography);

const Sidebar = ({ conversations, setConversation }) => {
    return (
        <div style={{
            width: 200,
            background: '#fafafa',
            borderRadius: 5,
            paddingTop: 10,
            paddingBottom: 10,
            marginRight: 5,
            fontSize: 'small',
        }}>
            <Title>Channels</Title>
            {conversations.filter(({ channel }) => channel).map(({ id, title }) => (
                <Subtitle key={id} onClick={() => setConversation(id)}>
                    {`# ${title}`}
                </Subtitle>
            ))}
            <Title>People</Title>
            {conversations.filter(({ channel }) => !channel).map(({ id, title }, i) => (
                <Subtitle key={id} onClick={() => setConversation(id)}>
                    {title}
                </Subtitle>
            ))}
        </div>
    )
}

export default connect(({ conversations }) => ({ conversations }), { setConversation })(Sidebar);
