import { combineReducers } from 'redux';
import {
    PUSH_MESSAGE,
    SET_CONVERSATION,
} from '../actions';
import { now } from './helper';

const defaultUsers = [
    {
        id: 0,
        name: 'Alice',
    },
    {
        id: 1,
        name: 'Dave',
    },
    {
        id: 2,
        name: 'Kelly',
    },
    {
        id: 3,
        name: 'Jenny',
    },
];

const defaultConversations = [
    {
        id: 0,
        channel: true,
        title: 'general',
        messages: [],
    },
    {
        id: 1,
        channel: true,
        title: 'announcements',
        messages: [],
    },
    {
        id: 2,
        channel: true,
        title: 'daebak',
        messages: [
            {
                id: 0,
                message: 'Hi, there!',
                timestamp: '12:03 PM',
                comments: [
                    { id: 1, message: 'Hello', timestamp: '12:05 PM' },
                    { id: 2, message: 'Hey!', timestamp: '12:07 PM' },
                ],
            },
            {
                id: 1,
                message: 'Hello!',
                timestamp: '12:05 PM',
            },
            {
                id: 2,
                message: 'Hi.',
                timestamp: '12:17 PM',
            },
            {
                id: 3,
                message: 'Hey there!',
                timestamp: '12:23 PM',
                comments: [
                    { id: 0, message: 'Run Forrest, run!', timestamp: '12:27 PM' },
                ],
            },
        ],
    },
    {
        id: 3,
        channel: false,
        title: 'Alice Kim',
        messages: [
            {
                id: 0,
                message: 'Hi, there!',
                timestamp: '12:03 PM',
                comments: [
                    { id: 1, message: 'Hello', timestamp: '12:05 PM' },
                    { id: 2, message: 'Hey!', timestamp: '12:07 PM' },
                ],
            },
            {
                id: 1,
                message: 'Hello!',
                timestamp: '12:05 PM',
            },
            {
                id: 0,
                message: 'How\'s your project going?',
                timestamp: '12:17 PM',
            },
        ],
    },
];

export default combineReducers({
    users: (users = defaultUsers, action) => users,
    conversations: (conversations = defaultConversations, action) => {
        switch (action.type) {
            case PUSH_MESSAGE:
                const { uid, iid, message } = action;
                const { messages = [] } = conversations[iid];
                return Object.assign([...conversations], {
                    [iid]: {
                        ...conversations[iid],
                        messages: [...messages, { id: uid, message, timestamp: now() }],
                    },
                });
            default:
                return conversations;
        }
    },
    conversation: (conversation = 0, action) => {
        switch (action.type) {
            case SET_CONVERSATION:
                return action.id;
            default:
                return conversation;
        }
    },
});
