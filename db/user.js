db.users.insertMany([
    {
        _id: ObjectId('5f096e4503e94054e758ade4'),
        givenName: 'Georgia',
        familyName: 'Lauren',
        email: 'gl@mail.io',
        phone: '(778)778-7788',
        imageUrl: 'https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        description: 'I\'m a developer.',
        tags: [{ label: 'Developer' }],
        available: true
    }, {
        _id: ObjectId('5f096e0103e94054e758ade3'),
        givenName: 'Brooke',
        familyName: 'Cagel',
        email: 'bc@mail.io',
        phone: '(778)778-7788',
        imageUrl: 'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        description: 'I\'m a developer.',
        tags: [{ label: 'Developer' }],
        available: true
    }, {
        _id: ObjectId('5f096db503e94054e758ade2'),
        givenName: 'Jason',
        familyName: 'Kang',
        email: 'jkang@mail.io',
        phone: '(778)778-7788',
        imageUrl: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        description: 'I\'m a developer.',
        tags: [{ label: 'Developer' }],
        available: true
    }, {
        _id: ObjectId('5f09696baa615c5132595686'),
        givenName: 'Yuree',
        familyName: 'Jang',
        email: 'yjang@mail.io',
        phone: '(778)778-7788',
        imageUrl: 'https://images.unsplash.com/photo-1568914935935-cffaf221c304?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
        description: 'I\'m a developer.',
        tags: [{ label: 'Developer' }],
        available: true
    }, {
        _id: ObjectId('5f0968f3aa615c5132595685'),
        givenName: 'John',
        familyName: 'Kim',
        email: 'jkim@mail.io',
        phone: '(778)778-7788',
        imageUrl: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        description: 'I\'m a developer.',
        tags: [{ label: 'Developer' }],
        available: true
    }, {
        _id: ObjectId('5f096790aa615c5132595684'),
        givenName: 'Hyesun',
        familyName: 'An',
        email: 'han@mail.io',
        phone: '(778)778-7788',
        imageUrl: 'https://images.unsplash.com/photo-1592085553892-3da0f8addfdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        description: 'I\'m a developer.',
        tags: [{ label: 'Developer' }],
        available: true
    }, {
        _id: ObjectId('5f0966e9aa615c5132595683'),
        givenName: 'Alice',
        familyName: 'Kim',
        email: 'akim@mail.io',
        phone: '(778)778-7788',
        imageUrl: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=630&q=80',
        description: 'I\'m a developer.',
        tags: [{ label: 'Developer' }],
        available: true
    }, {
        _id: ObjectId('5f0932a99eeb33d77955d15b'),
        givenName: 'John',
        familyName: 'Doe',
        email: 'jdoe@mail.io',
        imageUrl: 'https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        description: 'Hi! I run a small business in Vancouver. Looking forward to meeting you all!',
        available: true
    }, {
        _id: ObjectId('5f0932a99eeb33d77955d15c'),
        givenName: 'Jane',
        familyName: 'Doe',
        email: 'jdoe@mail.io',
        phone: '(604)604-6040',
        imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        supplementaryUrl: 'https://unsplash.com/photos/6W4F62sN_yI',
        description: 'Hi everyone! I\'m a photographer :)',
        tags: [{ label: 'Photographer' }],
        owns: [
            {
                _id: ObjectId('5f04a784073af3659c1b0951'),
                storeName: 'Tenth and Proper',
                storeOwner: 'Marion Fudge',
                location: '4483 W 10th Ave, Vancouver',
                lat: 49.264100,
                lng: -123.209000,
                description: 'Tenth & Proper, a unique fashion and lifestyle boutique specializing in beautifully crafted casual wear for women.',
                requests: [0],
                tags: [{ label: 'Call for Designers' }, { label: 'Clothing' }],
            }
        ],
        tasks: [
            {
                _id: ObjectId('5f04e72670a68be788efaf5e'),
                business: 'Hunter & Hare',
                details: 'We need photos of our store!',
                tags: [{ label: 'Call for Photographer' }],
                status: 'In Progress',
            }
        ],
        requests: [
            {
                _id: ObjectId('5f04e72670a68be788efaf60'),
                business: 'Tenth and Proper',
                details: 'We need a logo for our website!',
                tags: [{ label: 'Call for Designers' }],
                status: 'To Do',
            }
        ],
        available: true,
    }
]);
