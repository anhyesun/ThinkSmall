import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { Title, Subtitle } from './Text';
import { setConversation } from '../../../actions';
import classes from '../../../modules/inbox.module.css';

const Sidebar = ({ conversations, setConversation }) => (
    <div className={clsx(classes.container, classes.sidebar)}>
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
);

export default connect(({ conversations }) => ({ conversations }), { setConversation })(Sidebar);
