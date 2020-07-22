db.requests.insertMany([
    {
        _id: ObjectId('5f04e72670a68be788efaf60'),
        business: 'Tenth and Proper',
        details: 'We need a logo for our website!',
        tags: [{ label: 'Call for Designers' }],
        status: 'To Do',
        createdAt: ISODate('2020-07-18T04:25:51.274Z'),
    },
    {
        _id: ObjectId('5f092f4f6b1b32fa5b5eb2b0'),
        business: 'Hunter & Hare',
        details: 'We need a driver to pick up clothes!',
        tags: [{ label: 'Call for Drivers' }],
        status: 'To Do',
        createdAt: ISODate('2020-07-18T04:25:51.274Z'),
    },
    {
        _id: ObjectId('5f04e72670a68be788efaf5e'),
        business: 'Hunter & Hare',
        details: 'We need photos of our store!',
        tags: [{ label: 'Call for Photographer' }],
        status: 'In Progress',
        createdAt: ISODate('2020-07-18T04:25:51.274Z'),
    },
])
