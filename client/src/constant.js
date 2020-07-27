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
                id: '5f0966e9aa615c5132595683',
                message: 'Hi, there!',
                timestamp: '12:03 PM',
            },
            {
                id: '5f096790aa615c5132595684',
                message: 'Hello!',
                timestamp: '12:05 PM',
            },
            {
                id: '5f09696baa615c5132595686',
                message: 'Hi.',
                timestamp: '12:17 PM',
            },
            {
                id: '5f0968f3aa615c5132595685',
                message: 'Hey there!',
                timestamp: '12:23 PM',
            },
        ],
    },
    {
        id: 3,
        channel: false,
        title: 'Alice Kim',
        messages: [
            {
                id: '5f0966e9aa615c5132595683',
                message: 'Hi, there!',
                timestamp: '12:03 PM',
            },
            {
                id: '5f09696baa615c5132595686',
                message: 'Hello!',
                timestamp: '12:05 PM',
            },
            {
                id: '5f0966e9aa615c5132595683',
                message: 'How\'s your project going?',
                timestamp: '12:17 PM',
            },
        ],
    },
]

export const defaultTags = [
    { label: 'Call for Designers', selected: false },
    { label: 'Call for Developers', selected: false },
    { label: 'Call for Translators', selected: false },
    { label: 'Call for Drivers', selected: false },
    { label: 'Call for Writers', selected: false },
]
