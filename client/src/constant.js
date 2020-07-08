export const styles = {
    active: {
        backgroundColor: '#fafafa',
        cursor: 'pointer',
        padding: '7.5px 10px',
        fontSize: 'small',
        borderRadius: 4,
    },
    inactive: {
        backgroundColor: '#ffffff',
        cursor: 'pointer',
        padding: '7.5px 10px',
        fontSize: 'small',
        borderRadius: 4,
    },
}

export const defaultNeeds = [
    { label: 'Call for Designers' },
    { label: 'Clothing' },
    { label: 'Call for Logo Design' },
    { label: 'Call for Delivery Personnel' },
    { label: 'Food' },
    { label: 'Call for Translators' },
    { label: 'Music Retail' },
    { label: 'Italian' },
]

export const defaultSkills = [
    { label: 'Web Design' },
    { label: 'Logo Design' },
    { label: 'Speaks Korean' },
    { label: 'Chef' },
    { label: 'Delivery' },
    { label: 'Speaks German' },
    { label: 'Food Designer' },
]

export const defaultConversations = [
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
]

export const defaultRequests = [
    {
        business: 'Tenth and Proper',
        details: 'We need a logo for our website!',
        tags: ['Call for Designers'],
    },
    {
        business: 'Hunter & Hare',
        details: 'We need a driver to pick up clothes!',
        tags: ['Call for Drivers'],
    },
    {
        business: 'Hunter & Hare',
        details: 'We need a logo for our website!',
        tags: ['Call for Designers'],
    },
]

export const defaultTags = [
    { label: 'Call for Designers', selected: false },
    { label: 'Call for Developers', selected: false },
    { label: 'Call for Translators', selected: false },
    { label: 'Call for Drivers', selected: false },
    { label: 'Call for Writers', selected: false },
]
